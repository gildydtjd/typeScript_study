import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countDown, countUp } from '../actions/actions';
import { RootState } from '../store';

function Counter() {
  const count = useSelector((state: RootState) => state.count.count);
  const dispatch = useDispatch();

  const countPlus = () => {
    dispatch(countUp());
  };

  const countMinus = () => {
    dispatch(countDown());
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={countPlus}>+</button>
      <button onClick={countMinus}>-</button>
    </div>
  );
}

export default Counter;
