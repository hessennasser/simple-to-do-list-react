import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from "uuid";
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
uuidv4();
function TodoWrapper() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
    };

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        if (storedTodos) {
            setTodos(storedTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo));
    };
    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, task, isEditing: !todo.isEditing, completed: false} : todo));
    };
    return (
        <div className='TodoWrapper'>
            <h1>What's Your Tasks Today?</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => {
                return todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} key={index} task={todo} />
                ) : (
                    <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
                );
            })}
        </div>
    );
}

export default TodoWrapper;
