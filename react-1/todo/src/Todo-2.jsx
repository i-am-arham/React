import { useState } from "react";

function Todo2() {
  const [task, setTask] = useState(["Learning React", "Builing Website"]);
  const [newTask, setNewTask] = useState();
  function handleInput(event) {
    setNewTask(event.target.value);
  }
  function handleAdd() {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  function handleDelete(index) {
    setTask(task.filter((_, i) => i !== index));
  }
  return (
    <>
      <div className="todo">
        <h2>Todo List</h2>
        <input type="text" placeholder="Enter Todo" onChange={handleInput} />
        <button onClick={handleAdd}>Add</button>
        <span>
          <ol>
            {task.map((t, index) => (
              <li key={index}>
                {t}{" "}
                <button onClick={() => handleDelete(index)}>Delete</button>{" "}
              </li>
            ))}
          </ol>
        </span>
      </div>
    </>
  );
}

export default Todo2;
