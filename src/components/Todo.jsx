import React from 'react';
import { MdDeleteForever, MdModeEdit } from "react-icons/md";

function Todo({ tasks, handleDelete, handleEdit, handleCompletion }) {
    return (
        <ul>
            {tasks.map((obj) => (
                <li
                    key={obj.id}
                    className={obj.Complete ? "completed" : ""}
                >
                    <input
                        type="checkbox"
                        checked={obj.Complete}
                        onChange={(e) => handleCompletion(e, obj.id)}
                    />
                    <span className="task-text">{obj.task}</span>
                    <span>
                        <MdDeleteForever
                            onClick={() => handleDelete(obj.id)}
                            className="deletebtn"
                        />
                        <MdModeEdit
                            onClick={() => handleEdit(obj.id)}
                            className="deletebtn"
                        />
                    </span>
                </li>
            ))}
        </ul>
    );
}

export default Todo;
