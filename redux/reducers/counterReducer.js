import { createReducer } from '@reduxjs/toolkit';
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from '../actions/counterActions';

const counterReducer = createReducer({ value: 0 }, {
  [INCREMENT_COUNTER]: (state) => { state.value++; },
  [DECREMENT_COUNTER]: (state) => { state.value--; },
});

export default counterReducer;
