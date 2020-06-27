import React from 'react';
import './App.css';
import Header from './Header/Header';
import { Route } from 'react-router-dom';
import Page1 from './Header/Pages/page1';
import Page2 from './Header/Pages/page2';



function App(props) {
  return (
    <div>
      <Header/>
      <Route path='/Page1' render={()=><Page1 NamePage={props.state.NamePage} 
                                              dispatch={props.dispatch}
                                              Textarea={props.state.NamePage.Textarea}/>}/>
      <Route path='/Page2' render={()=><Page2 MessagePage={props.state.MessagePage}
                                              dispatch={props.dispatch}
                                              AreaValue={props.state.MessagePage.AreaValue}/>}/>
    </div>
  );
}

export default App;
