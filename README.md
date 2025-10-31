# 📝 React To-Do App

A simple and interactive **To-Do List App** built using **React.js**, where you can **add**, **edit**, **delete**, and **mark tasks as complete**.  
The app also prevents adding **duplicate** or **empty tasks**, ensuring a clean task list experience.

---

## 🚀 Features

- ➕ **Add new tasks**
- ✏️ **Edit existing tasks**
- ✅ **Mark tasks as complete/incomplete**
- ❌ **Delete tasks**
- ⚠️ **Duplicate task prevention** (checks only among incomplete tasks)
- 🚫 **Empty or space-only input validation**
- 🎨 **Dynamic styling** — completed tasks appear grey and struck through

---

## 🧩 Project Structure

```
react-todo-app/
│
├── src/
│   ├── components/
│   │   ├── Form.jsx
│   │   ├── Todo.jsx
│   ├── App.jsx
│   ├── Todo.css
│   ├── main.jsx
│
├── package.json
└── README.md
```

---

## 🧠 Logic Explanation

### 1. State Variables
```js
const [input, setInput] = useState("");
const [tasks, setTasks] = useState([]);
const [isEditing, setIsEditing] = useState(false);
const [editId, setEditId] = useState(null);
```

| State | Type | Purpose |
|--------|------|----------|
| `input` | String | Stores text from input box |
| `tasks` | Array | Holds all task objects |
| `isEditing` | Boolean | Tells if user is editing a task |
| `editId` | Number / Null | Stores ID of the task being edited |

---

### 2. Add or Edit Tasks

```js
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

    setTasks([
      ...tasks,
      { id: Date.now(), task: trimmedInput, Complete: false },
    ]);
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
```

---

### 3. Delete Task
```js
function handleDelete(idToDelete) {
  setTasks(tasks.filter((obj) => obj.id !== idToDelete));
}
```

---

### 4. Edit Task
```js
function handleEdit(idToEdit) {
  const taskToEdit = tasks.find((obj) => obj.id === idToEdit);
  setInput(taskToEdit.task);
  setIsEditing(true);
  setEditId(idToEdit);
}
```

---

### 5. Toggle Completion
```js
function handleCompletion(e, idToMarkComplete) {
  setTasks(
    tasks.map((obj) =>
      obj.id === idToMarkComplete ? { ...obj, Complete: !obj.Complete } : obj
    )
  );
}
```

---

## 💅 Dynamic Styling (in `Todo.jsx`)
```jsx
<li
  key={obj.id}
  style={{
    textDecoration: obj.Complete ? 'line-through' : 'none',
    color: obj.Complete ? 'gray' : 'black'
  }}
>
  ...
</li>
```

---

## 🧠 How JSX Inline Style Works
In React JSX:
```jsx
style={{ propertyName: value }}
```
- Styles are written as **objects** inside `{}`.
- CSS properties use **camelCase** instead of dashes.
- You can use **JavaScript logic** directly inside `{}`.

---

## 🛠️ Installation & Setup

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/react-todo-app.git
   cd react-todo-app
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run the app
   ```bash
   npm run dev
   ```

4. Open in browser
   ```
   http://localhost:5173
   ```

---

## 💻 Tech Stack

- ⚛️ **React.js**
- 🎨 **CSS**
- 💡 **JavaScript (ES6+)**

---


## 🪄 Future Improvements
- Add “Clear All Completed” button
- Add due date feature
- Store tasks in localStorage
- Add filters: “All”, “Completed”, “Pending”
