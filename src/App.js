import React from 'react';
import './App.css';
import Header from './Header/Header';
import { Route } from 'react-router-dom';
import NamesContainer from './Header/Pages/Names/NamesContainer';
import MessagesContainer from './Header/Pages/Messages/MessagesContainer';
import UsersComponent from './Header/Pages/Users/UsersComponent';
import Hooks from './Header/Pages/Hooks/Hooks';



function App(props) {
  return (
    <div>
      <Header/>
      <Route path='/Names' render={()=><NamesContainer/>}/>
      <Route path='/Messages' render={()=><MessagesContainer/>}/>
      <Route path='/Users' render={()=><UsersComponent/>}/>
      <Route path='/Hooks' render={()=><Hooks/>}/>
    </div>
  );
}

export default App;
