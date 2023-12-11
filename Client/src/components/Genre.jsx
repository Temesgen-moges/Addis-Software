import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from '@emotion/styled/macro';
import { FiChevronDown } from 'react-icons/fi';

const GenreContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 10px;
`;

const GenreButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border: 2px solid #007bff;
  border-radius: 8px;
  background-color: #007bff;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    border-radius: inherit;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover:before {
    opacity: 1;
  }
`;

const DropdownIcon = styled(FiChevronDown)`
  margin-left: 8px;
`;

const GenreDropdown = styled(animated.div)`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  padding: 12px;
  background-color: #fff;
  border: 2px solid #007bff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
  opacity: 0;
`;

const GenreItem = styled.div`
  padding: 10px 0;
  cursor: pointer;
  font-size: 16px;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const Genre = ({ genres, selectedGenre, handleGenreChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: `translateY(${isOpen ? 0 : 5}px)`,
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (genre) => {
    handleGenreChange(genre);
    setIsOpen(false);
  };

  useEffect(() => {
    const closeDropdown = () => {
      setIsOpen(false);
    };

    document.addEventListener('click', closeDropdown);

    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <GenreContainer>
      <GenreButton onClick={(e) => {
        e.stopPropagation();
        toggleDropdown();
      }}>
        {selectedGenre ? selectedGenre : 'All Genres'}
        <DropdownIcon style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
      </GenreButton>
      <GenreDropdown style={dropdownAnimation}>
        {isOpen &&
          genres.map((genre) => (
            <GenreItem key={genre} onClick={() => handleItemClick(genre)}>
              {genre}
            </GenreItem>
          ))}
      </GenreDropdown>
    </GenreContainer>
  );
};

export default Genre;
