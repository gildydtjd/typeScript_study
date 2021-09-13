import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countDown, countUp } from '../actions/actions';
import { RootState } from '../store';

function Counter() {
  const count = useSelector((state: RootState) => state.count.count);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(countUp())}>+</button>
      <button onClick={() => dispatch(countDown())}>-</button>
    </div>
  );
}

export default Counter;
