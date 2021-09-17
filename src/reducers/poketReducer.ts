import { poketFail, poketSuccess } from '../actions/pocketaction';
import {
  POKET_LOAD_FAIL,
  POKET_LOAD_SUCCESS,
} from '../actions/pocketactionType';

interface poketmon {
  name: string;
  url: string;
}

type poketInitialState = {
  state: poketmon[];
};

type actionType =
  | ReturnType<typeof poketSuccess>
  | ReturnType<typeof poketFail>;

export default function poketReducer(
  state: poketInitialState,
  action: actionType
) {
  switch (action.type) {
    case POKET_LOAD_SUCCESS:
      return;
    case POKET_LOAD_FAIL:
      return;
    default:
      return state;
  }
}
