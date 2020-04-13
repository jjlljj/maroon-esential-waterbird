import { combineReducers } from 'redux';
import { exampleStateReducer } from './exampleStateReducer';

const rootReducer = combineReducers({
  exampleState: exampleStateReducer,
});

export default rootReducer;
