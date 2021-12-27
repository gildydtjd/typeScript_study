import { LOAD_FAIL, LOAD_SUCCESS } from './ResponseDataType';

export const loadSuccess = () => ({
  type: LOAD_SUCCESS,
});

export const loadFail = () => ({
  type: LOAD_FAIL,
});
