import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// import components
import HeaderNav from './Components/HeaderNav';
import PrivateRoute from './Utils/PrivateRoute';
import Signup from './Components/Signup';
import Login from './Components/Login';
import NoteList from './Components/NoteList';


function App() {
  return (
    <div className="App">
      <h1>hello?</h1>
      <Route path="/" render={(props) => <HeaderNav {...props}/>} />
      <PrivateRoute exact path='/protected' component={NoteList}/>
      <Route path="/signup" component={Signup}/>
      <Route exact path="/login" component={Login}/>
    </div>
  );
}

export default App;
