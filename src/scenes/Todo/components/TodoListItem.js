import React from 'react';

const TodoListItem = ({index, name, completed, toggleTodoHandle, removeTodoHandle}) => {
    return (
        <div className="todo-list__item">
            <div
                className={`todo-list__item-name ${completed ? `todo-list__item-name--done` : ``}`}
                onClick={toggleTodoHandle.bind(null, index)}>
                {name} {completed ? `| done` : ``}
            </div>
            <div className="todo-list__item-remove" onClick={removeClickHandle.bind(null, index, removeTodoHandle)}>x</div>
        </div>
    )
}

function removeClickHandle(index, callback) {
    if( window.confirm('Are you sure?') ) {
        callback(index);
    }
}

export default TodoListItem;