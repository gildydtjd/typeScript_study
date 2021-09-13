import { COUNT_DOWN, COUNT_UP } from './actionsType';

export const countUp = () => ({
  type: COUNT_UP,
});

export const countDown = () => ({
  type: COUNT_DOWN,
});
