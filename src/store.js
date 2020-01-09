import React from 'react';
import {createStore} from "redux";
import {reducer} from "./redux/reducer";

const store = createStore(reducer);
window.store = store;

export default store