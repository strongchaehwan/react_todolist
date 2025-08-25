import { useReducer } from "react";

//reducer:변환기
function reducer(state, action) {
  if (action.type == "INCREASE") {
    return state + action.data;
  }
}

function Exam() {
  const [state, dispath] = useReducer(reducer, 0);
  const onClickPlus = () => {
    dispath({
      type: "INCREASE",
      data: 1,
    });
  };
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
    </div>
  );
}

export default Exam;
