import React from 'react';
import { MdDeleteForever, MdModeEdit } from "react-icons/md";

function Todo({ tasks, handleDelete, handleEdit, handleCompletion }) {
    
    return (
        <ul>
            {tasks.map((obj) => {    {/* logic will be written in parenthesis in jsx and while/fordoesnotwork only maps works in react */}
                return <li key={obj.id}>  
                    
                    {obj.task}
                    <input onClick={(e) => { handleCompletion(e, obj.id) }} type='checkbox'></input>
                    <span><MdDeleteForever onClick={(e) => { handleDelete(obj.id) }} className="deletebtn" /> <MdModeEdit onClick={(e) => handleEdit(obj.id)} className='deletebtn' /> </span></li>
            })}
      </ul>
    );
}

export default Todo;
