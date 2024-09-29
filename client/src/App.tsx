import React, { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css'
import Players from './pages/Players';
import Game from './pages/Game';
import Layout from './component/Layout';

function App() {
  const [message, setMessage] = React.useState('');
  React.useEffect(() => {
    fetch('http://localhost:5000')
      .then((response) => response.text())
      .then((data) => setMessage(data));
  }, []);
  return (
    <>
      <div className="mx-auto">
          <div className="flex h-full flex-1 flex-col">
            <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Layout />}>
                  <Route index element={<Players />} />
                  <Route path="/player" element={<Players />} />
                  <Route path="/game" element={<Game />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </div>
      </div>
    </>
  )
}

export default App
