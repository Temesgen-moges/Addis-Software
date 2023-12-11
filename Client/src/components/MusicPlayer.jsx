import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Draggable from 'react-draggable';
import styled from '@emotion/styled/macro';
import { useDispatch, useSelector } from 'react-redux';
import { togglePlayPause } from '../redux/actions/songActions';
import { FaTimes } from 'react-icons/fa';

const MusicPlayerContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 300px;
  height: 350px;
  background-color: #2c3e50;
  color: #ecf0f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 2px solid #00A4BD;
  transition: background-color 0.3s ease;
  box-shadow: 6px 4px #00A4BD;
  z-index: 999; // Set a high z-index to ensure the player appears above other elements

  &:hover {
    background-color: #34495e;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

const SongImage = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const DraggableMusicPlayer = styled(Draggable)`
  cursor: grab;
`;

const OpenMusicPlayerButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  left: 10px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #2980b9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;


const MusicPlayer = () => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.songs.isPlaying);
  const selectedSong = useSelector((state) => state.songs.selectedSong);

  const handlePlay = () => {
    dispatch(togglePlayPause());
    setIsVisible(true);
  };

  const handlePause = () => {
    dispatch(togglePlayPause());
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const [isVisible, setIsVisible] = useState(true);

  return isVisible ? (
    <DraggableMusicPlayer>
      <MusicPlayerContainer>
        <CloseButton onClick={handleClose}>
          <FaTimes />
        </CloseButton>
        {selectedSong && <SongImage src={selectedSong.coverImage.secure_url} alt={selectedSong.title} />}
        <AudioPlayer
          autoPlay={selectedSong && isPlaying}
          src={selectedSong ? selectedSong.file.secure_url : ''}
          onPause={handlePause}
          onPlay={handlePlay}
          volume={0.5}
        />
      </MusicPlayerContainer>
    </DraggableMusicPlayer>
  ) : (
    <OpenMusicPlayerButton onClick={() => setIsVisible(true)}>Open Music Player</OpenMusicPlayerButton>
  );
};

export default MusicPlayer;
