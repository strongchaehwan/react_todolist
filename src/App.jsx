import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Editor from "./components/Editor";
import { useState, useRef, useReducer } from "react";

// const mockData = [
//   {
//     id: 0,
//     isDone: true,
//     content: "React 공부하기",
//     date: new Date().getTime(),
//   },
//   {
//     id: 1,
//     isDone: false,
//     content: "spring 공부하기",
//     date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     isDone: false,
//     content: "DB 공부하기",
//     date: new Date().getTime(),
//   },
// ];

function App() {
  const [todos, setTodos] = useState([]);
  const idRef = useRef(1);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };

  // todos State의 값들 중에
  // targetId와 일치하는 id를 갖는 투두 아이탬의 isDone 변경
  const onUpdate = (targetId) => {
    // 인수: todos 배열에서 targetid와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    setTodos(
      todos.map((todo) => {
        if (todo.id == targetId) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return todo;
      })
    );
  };

  const onDelete = (targetId) => {
    // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
