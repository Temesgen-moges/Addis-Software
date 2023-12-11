import { Link, Outlet } from "react-router-dom"
import Navbar from './Navbar'
import styled from '@emotion/styled/macro';
import { useSelector } from 'react-redux';
import { MusicPlayer, SongList } from '../components';
import Footer from "./Footer";

const AppContainer = styled.div`background-color: #081730;`;

const Layout = () => {
    const selectedSong = useSelector((state) => state.songs.selectedSong);
    return (
        <AppContainer >
            <Navbar />
            <Outlet />
            {selectedSong && (
                <MusicPlayer />
            )}
           
            <Footer/>
                
           
              
        </AppContainer>
    )
}

export default Layout
