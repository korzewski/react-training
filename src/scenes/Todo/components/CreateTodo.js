import React from 'react';

const CreateTodo = (props) => {
    const {addTodo} = props;
    let input;
    
    return (
        <form className="new-todo" onSubmit={(e) => onSubmit(e, addTodo, input)}>
            <input ref={node => {input = node;}} className="new-todo__input" type="text" autoFocus />
            <button className="new-todo__button" type="submit">Add</button>
        </form>
    )
}

function onSubmit(e, callback, input) {
    e.preventDefault();
    
    callback(input.value);
    input.value = '';
}

export default CreateTodo;