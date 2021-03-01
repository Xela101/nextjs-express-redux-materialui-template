import { createStore } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers/rootReducer';

const makeStore = () => createStore(rootReducer);

const wrapper = createWrapper(makeStore, { debug: false });
export default wrapper;
