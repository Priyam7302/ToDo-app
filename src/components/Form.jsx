import React from 'react';
import { MdTaskAlt } from "react-icons/md";

function Form({ input, setInput, handleSubmit, isEditing }) {
    return (
        <>
            <h1>
                To Do <MdTaskAlt style={{ color: "#00bcd4", verticalAlign: "middle" }} />
            </h1>

            <div id="todo">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter your task"
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                    />
                    <button type="submit">{isEditing ? "Edit" : "Add Tasks"}</button>
                </form>
            </div>
        </>
    );
}

export default Form;
