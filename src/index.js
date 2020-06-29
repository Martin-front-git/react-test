import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./store/redux-store";
import StoreContext from './StoreContext/storeContext';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <StoreContext.Provider value={store}>
          <App
              store={store}
              state={store.getState()}
              dispatch={store.dispatch.bind(store)}
            />
          </StoreContext.Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
