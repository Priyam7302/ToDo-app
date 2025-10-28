import React from 'react';
import { TiTick } from "react-icons/ti";

function Form({ input, setInput, handleSubmit,isEditing }) {
    
    return (
        <>
        <h1>To Do <TiTick /></h1>
        <div id='todo' >
        <form action="" onSubmit={handleSubmit}>
           <input type='text' placeholder='Enter your task' onChange={(e) => setInput(e.target.value)} value={input} />
            <button type='submit'>{isEditing? "Edit" :"Add Tasks"}</button>
            </form>
            </div>
        </>
    );
}

export default Form;
