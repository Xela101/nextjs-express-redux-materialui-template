import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import counterReducer from './counterReducer';

const combinedReducer = combineReducers({
  counter: counterReducer,
});

const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  }
  return combinedReducer(state, action);
};

export default rootReducer;
