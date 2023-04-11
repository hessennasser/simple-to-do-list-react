import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


function Todo({ task, deleteTodo, editTodo, toggleComplete }) {
    return (
        <div className={`${task.completed ? 'completed Todo' : "Todo"}`}>
            <p >{task.task}</p>
            <div className='btns-holder'>
                <input type='checkbox' onClick={(e) => {
                    toggleComplete(task.id);
                    console.log(e)
                }} />
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    );
}

export default Todo;
