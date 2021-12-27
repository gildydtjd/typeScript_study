import { useDispatch, useSelector } from 'react-redux';
import { loadSuccess } from '../actions/ResponseDataActions';
import { todo } from '../reducers/loadDataReducer';
import { RootState } from '../store';

function LoadData() {
  const State: todo[] = useSelector((state: RootState) => state.todo);
  console.log(State);
  const dispatch = useDispatch();
  const dataload = () => {
    dispatch(loadSuccess());
  };

  return (
    <div>
      {State.length > 0 ? <h2>데이터있음</h2> : <h2>데이터없음</h2>}
      <button onClick={dataload}>데이타 로드</button>
    </div>
  );
}

export default LoadData;
