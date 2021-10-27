import { CounterActionTypes } from "../actions/CounterActions";

const INITIAL_STATE = {
  counter: 0,
};
const CounterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CounterActionTypes.INCREMENT_COUNTER: 
      return {...state, counter: state.counter + 1};
    case CounterActionTypes.DECREMENT_COUNTER:
      return {...state, counter: state.counter - 1};
    default:
      return state;
  }
};
export default CounterReducer;
