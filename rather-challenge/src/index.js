import React from 'react';
import ReactDOM from 'react-dom';
import { TriviaApp } from './TriviaApp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TriviaScreen from './trivia/TriviaScreen';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TriviaApp/>} />
      <Route path="trivia" element={<TriviaScreen />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

