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
    if (isEditing) {
      console.log("edit ho raha h");
      setTasks(
        tasks.map((obj) => {
          return obj.id === editId ? { ...obj, task: input } : obj;
        })
      );
      //RESET
      setIsEditing(false);
      setEditId(null);
    }
    else {
      if (input.trim().length===0) {
        return
      }
      else {
        setTasks([...tasks, { id: Date.now(), task: input }]);
      }

    }
    setInput("");
  }

  function handleEdit(idToEdit) {
    setIsEditing(true);
    setEditId(idToEdit);
    const objToEdit = tasks.find((obj) => {
      return obj.id === idToEdit;
    })
    if (objToEdit.task.trim().length === 0) {
      setInput("");
      return 
    }
    else {
      
      setInput(objToEdit.task.trim());
    }
  }

  return (
    <div>
      <Form input={input} setInput={setInput} handleSubmit={handleSubmit} isEditing={isEditing} />
      <Todo tasks={tasks} handleDelete={handleDelete} handleEdit={handleEdit} />
    </div>
  );
}

export default App;