import { useState } from 'react';
import Form from './components/Form';
import Todo from './components/Todo';
import './Todo.css';

const App = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  console.log(tasks);

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  function handleDelete(idToDelete) {
    setTasks(
      tasks.filter((obj) => {
        return obj.id !== idToDelete;
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    const trimmedInput = input.trim();

    if (trimmedInput.length === 0) {
      alert("Task cannot be empty or spaces only!");
      return;
    }

    const duplicate = tasks.some(
      (obj) =>
        !obj.Complete && obj.task.toLowerCase() === trimmedInput.toLowerCase()
    );

    if (!isEditing) {
      if (duplicate) {
        alert("This task already exists in your pending list!");
        return;
      }

      setTasks([...tasks, { id: Date.now(), task: trimmedInput, Complete: false }]);
    }

    if (isEditing) {
      const duplicateEdit = tasks.some(
        (obj) =>
          !obj.Complete &&
          obj.task.toLowerCase() === trimmedInput.toLowerCase() &&
          obj.id !== editId
      );

      if (duplicateEdit) {
        alert("Another incomplete task with the same name already exists!");
        return;
      }

      setTasks(
        tasks.map((obj) =>
          obj.id === editId ? { ...obj, task: trimmedInput } : obj
        )
      );

      setIsEditing(false);
      setEditId(null);
    }

    setInput("");
  }

  function handleEdit(idToEdit) {
    const taskToEdit = tasks.find((obj) => obj.id === idToEdit);
    setInput(taskToEdit.task);
    setIsEditing(true);
    setEditId(idToEdit);
  }

  function handleCompletion(e, idToMarkComplete) {
    setTasks(
      tasks.map((obj) => {
        if (obj.id === idToMarkComplete) {
          return { ...obj, Complete: !obj.Complete };
        } else {
          return obj;
        }
      })
    );
  }

  return (
    <div>
      <Form input={input} setInput={setInput} handleSubmit={handleSubmit} isEditing={isEditing} />
      <Todo tasks={tasks} handleDelete={handleDelete} handleEdit={handleEdit} handleCompletion={handleCompletion} />
    </div>
  );
}

export default App;
