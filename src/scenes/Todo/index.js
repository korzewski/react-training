import React from 'react';

import Navbar from '../../components/Navbar';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';

class Todo extends React.Component {
    constructor(props) {
        super();
        
        this.state = {
            todos: [
                {name: 'test'},
                {name: 'example'},
                {name: 'abc'},
            ]
        }
    }
    
    render() {
        const {todos} = this.state;
        
        return (
            <div className="todo">
                <Navbar title="todo" />
                <CreateTodo addTodo={this.addTodo.bind(this)} />
                <TodoList todos={todos} toggleTodoHandle={this.toggleTodo.bind(this)} removeTodoHandle={this.removeTodo.bind(this)} />
            </div>
        )
    }
    
    addTodo(todoName) {
        const {todos} = this.state;
        
        if(todoName === '') {
            return
        }
        
        todos[todos.length] = {
            name: todoName,
            completed: false
        };
        
        this.setState({todos});
    }
    
    toggleTodo(todoIndex) {
        const {todos} = this.state;
        
        todos[todoIndex].completed = !todos[todoIndex].completed;
        
        this.setState({todos});
    }
    
    removeTodo(todoIndex) {
        const {todos} = this.state;
        
        todos.splice(todoIndex, 1);
        
        this.setState({todos});
    }
}

export default Todo;