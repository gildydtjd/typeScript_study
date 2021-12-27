import axios, { AxiosResponse } from 'axios';
import { loadFail, loadSuccess } from '../actions/ResponseDataActions';
import { LOAD_FAIL, LOAD_SUCCESS } from '../actions/ResponseDataType';

export type todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type State = {
  data: todo[];
};

const initialState = {
  data: [],
};

const getData = async (): Promise<AxiosResponse> => {
  return await axios.get<Response>(
    'https://jsonplaceholder.typicode.com/todos'
  );
};

type actionType = ReturnType<typeof loadSuccess> | ReturnType<typeof loadFail>;

export default function loadDataReducer(
  state: State = initialState,
  action: actionType
) {
  switch (action.type) {
    case LOAD_SUCCESS:
      const a = getData();
      return a;
    case LOAD_FAIL:
      return;
    default:
      return state;
  }
}
