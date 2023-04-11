import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");
    const handelSubmit = e => {
        e.preventDefault();
        if (value === "") return;
        addTodo(value);
        setValue("");
    };

    return (
        <form className='TodoForm' onSubmit={e => handelSubmit(e)}>
            <input type='text' value={value} onChange={(e) => setValue(e.target.value)} className='todo-input' placeholder='Enter The Task' />
            <button type="submit" className="todo-btn">Add Task</button>
        </form>
    );
}

export default TodoForm;
