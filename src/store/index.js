import {createStore} from 'redux';
import CounterReducer from '../redux/reducers/CounterReducer';
const store = createStore(CounterReducer);

export default store;
