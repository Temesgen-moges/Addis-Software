// One2.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SongList, SongDetail, SongUpdate, SongCreate, Status,  Layout, One } from './components';

import './App.css'
import './index.css';

const One2 = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='home' element={<SongList />} />
            <Route path='' element={<One />} />
            <Route path="songs/create" element={<SongCreate />} />
            <Route path="songs/:id" element={<SongDetail />} />
            <Route path="songs/update/:id" element={<SongUpdate />} />
          </Route>
          <Route path="*" element={<Status text="😒 Sorry, we can't find the page you are looking for." />} />
        </Routes>
      </div>
    </Router>
  );
};

export default One2;
