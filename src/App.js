import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// import components
import HeaderNav from './Components/HeaderNav';
import Signup from './Components/Signup';
import NoteList from './Components/NoteList';

function App() {
  return (
    <div className="App">
      <Route path="/" render={(props) => <HeaderNav {...props}/>} />
      <Route path="/signup" component={Signup}/>
      <h1>Noted!</h1>
      <NoteList/>
    </div>
  );
}

export default App;
