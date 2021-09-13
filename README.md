react + typeScript

1. npx create-react-app 프로젝트이름 --typescript
   yarn add redux react-redux @types/react-redux


2. redux 구성요소
   - 액션함수, 액션타입, 리듀서, 스토어


3. 사용방법
    const count = useSelector((state: RootState) => state.count.count);
    - useSelector 함수를 통해 전역적으로 관리되는 값을 가져온다.
    const dispatch = useDispatch();
    - 액션함수를 사용할 dispatch를 만든다.


4. 있었던 오류
     const count = useSelector((state: RootState) => state.count.count);
      - 여기서 state에 대한 DefaultRootState 지정해주지 않으면 => state에는 아무것도 나타나지 않는다.
      - export type RootState = ReturnType<typeof rootReducer>;