import { countDown, countUp } from '../actions/actions';
import { COUNT_DOWN, COUNT_UP } from '../actions/actionsType';

type CounterAction = ReturnType<typeof countUp> | ReturnType<typeof countDown>;

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

function countReducer(
  state: CounterState = initialState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case COUNT_UP:
      return { count: state.count + 1 };
    case COUNT_DOWN:
      return { count: state.count - 1 };
    default:
  }
  return state;
}

export default countReducer;
