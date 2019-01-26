import { applyMiddleware } from "redux";
//import logger from './logger';
import thunk from "redux-thunk";
import reduxLogger from "redux-logger";
import markerLogic from "./markerLogic";


export default applyMiddleware(thunk, markerLogic, reduxLogger);
