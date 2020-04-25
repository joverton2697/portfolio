import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import Header from './Components/Header';
import Landing from './Components/Landing';
import Animation from './Components/Animation';
import Skills from './Components/Skills';
import Projects from './Components/Projects';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div>
          <Animation/>
          <Header/>
          <Landing/>
          <Skills/>
          <Projects/>
      </div>
  );
}

export default App;
