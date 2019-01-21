import {applyMiddleware} from 'redux';
import logger from './logger';
import thunk from 'redux-thunk';

// import otherMiddleware from './here';

export default applyMiddleware(thunk, logger)

