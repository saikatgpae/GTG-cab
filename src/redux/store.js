import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const store = configureStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// const store = configureStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// export default store;
