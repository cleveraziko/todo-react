import React, { useState } from "react";
import Todo from "./Todo";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "Take dogs for a walk",
    "Take dogs for a walk",
    "wasssup",
  ]);

  const [input, setInput] = useState("");
  console.log("🔫", input);

  const addTodo = (event) => {
    event.preventDefault();
    console.log("😎", `Iam workiing`);
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1> Ikramov </h1>
      <form>
        <FormControl>
          <InputLabel>✅Write a todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
        {/* <button type="submit" onClick={addTodo}>
          {" "}
          Add Todo{" "}
        </button> */}
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
