import { useState } from "react";

function Todo() {
  const [tasks, setTask] = useState(["I want to learn React", "Going GYM"]);
  const [newTask, setNewTask] = useState("");

  function handleInput(event) {
    setNewTask(event.target.value);
  }
  function handleAddInput() {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  function handleDelete(index) {
    setTask(tasks.filter((_, i) => i !== index));
  }
  return (
    <>
      <div className="todo">
        <h2>Todo List</h2>
        <input type="text" onChange={handleInput} placeholder="Enter a task" />
        <button className="add" onClick={handleAddInput}>
          Add
        </button>

        <span>
          <ol>
            {tasks.map((task, index) => (
              <li key={index}>
                {task}{" "}
                <button onClick={() => handleDelete(index)}>Delete</button>
              </li>
            ))}
          </ol>
        </span>
      </div>
    </>
  );
}

export default Todo;
