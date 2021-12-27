import { combineReducers } from 'redux';
import countReducer from '../reducers/countReducer';
import loadDataReducer from '../reducers/loadDataReducer';

const rootReducer = combineReducers({
  count: countReducer,
  todo: loadDataReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
