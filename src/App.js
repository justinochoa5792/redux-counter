import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, incrementByTwo } from "./redux/count";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Count</h1>
      <h2>The count is : {count}</h2>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByTwo())}>increment by 2</button>
    </div>
  );
}

export default App;
