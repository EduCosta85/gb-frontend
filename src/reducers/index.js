import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import chuck from './chuck'
import loading from './loading'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    chuck,
    loading,
  });
