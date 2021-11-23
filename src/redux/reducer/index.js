import {combineReducers} from 'redux';
import dataReducer from './DataReducer';
import TestReducer from './TestReducer';

const combinedReducers = combineReducers({
  testVal: TestReducer,
  dataVal: dataReducer,
});
export default combinedReducers;
