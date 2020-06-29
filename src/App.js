import React from 'react';
import './App.css';
import Header from './Header/Header';
import { Route } from 'react-router-dom';
import NamesContainer from './Header/Pages/Names/NamesContainer';
import MessagesContainer from './Header/Pages/Messages/MessagesContainer';



function App(props) {
  return (
    <div>
      <Header/>
      <Route path='/Names' render={()=><NamesContainer store={props.store}/>}/>
      <Route path='/Messages' render={()=><MessagesContainer store={props.store}/>}/>
    </div>
  );
}

export default App;
