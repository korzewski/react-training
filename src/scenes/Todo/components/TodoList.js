import React from 'react';

import TodoListItem from './TodoListItem';

const TodoList = ({todos, toggleTodoHandle, removeTodoHandle}) => {
    const todosRender = todos.map((todo, index) => {
        return (
            <TodoListItem
                name={todo.name}
                completed={todo.completed}
                index={index}
                toggleTodoHandle={toggleTodoHandle}
                removeTodoHandle={removeTodoHandle}
                key={index} />
        )
    });
    
    return (
        <div className="todo-list">
            {todosRender}
        </div>
    )
}

export default TodoList;