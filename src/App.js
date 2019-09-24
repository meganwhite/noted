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
      <Route path="/" render={(props) => <HeaderNav {...props}/>} />
      <PrivateRoute exact path='/protected' component={NoteList}/>
      <Route path="/signup" component={Signup}/>
      <Route exact path="/" component={Login}/>
      <h1>Noted!</h1>
    </div>
  );
}

export default App;
