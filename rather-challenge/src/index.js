import React from 'react';
import ReactDOM from 'react-dom';
import { TriviaApp } from './TriviaApp';
import { HashRouter, Routes, Route } from 'react-router-dom';
import TriviaScreen from './trivia/TriviaScreen';


ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<TriviaApp/>} />
      <Route path="trivia" element={<TriviaScreen />}/>
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);

