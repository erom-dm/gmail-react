import {applyMiddleware} from 'redux';
//import logger from './logger';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

// import otherMiddleware from './here';

export default applyMiddleware(thunk, reduxLogger)

