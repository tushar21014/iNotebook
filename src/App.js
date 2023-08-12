import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Nav from './Comp/Nav';
import { Home } from './Comp/Home';
import { About } from './Comp/About';
import NoteState from './Context/Notes/NoteStates';
import Signup from './Comp/Signup';
import Login from './Comp/Login';
import Alert from './Comp/Alert';
import { useState } from 'react';
import UserDetails from './Comp/UserDetails';



function App() {
  return (
    <div className="App">
      <NoteState>
        <Router>
          <Nav />
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/Home' element={<Home />}></Route>
            <Route exact path='/About' element={<About />}></Route>
            <Route exact path='/Signup' element={<Signup />}></Route>
            <Route exact path='/UserDetails' element={<UserDetails />}></Route>
            <Route exact path='/Login' element={<Login />}></Route>
          </Routes>
        </Router>
      </NoteState>
    </div>
  );
}

export default App;
