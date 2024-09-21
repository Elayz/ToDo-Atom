import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/app/app";
import {createContext} from "react";
import todoStore from "./store/toDoStore";

const root = ReactDOM.createRoot(document.getElementById('root'));
const GlobalStore = createContext(todoStore);
root.render(
    <GlobalStore.Provider value={GlobalStore}>
        <App></App>
    </GlobalStore.Provider>
);