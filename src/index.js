import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import store from './store/redux-store';

let rerenderEntireTree=(state)=>{
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App store={store} state={store.getState()} 
              dispatch={store.dispatch.bind(store)}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());
store.subscribe(()=>{
  let state = store.getState();
  rerenderEntireTree(state);
});
