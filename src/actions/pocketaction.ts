import { POKET_LOAD_FAIL, POKET_LOAD_SUCCESS } from './pocketactionType';

export const poketSuccess = () => ({
  type: POKET_LOAD_SUCCESS,
});

export const poketFail = () => ({
  type: POKET_LOAD_FAIL,
});
