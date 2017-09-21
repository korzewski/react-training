import React from 'react';

import Navbar from '../../components/Navbar';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';

class Todo extends React.Component {
    constructor(props) {
        super();
        
        this.state = {
            themeID: 1,
            todos: []
        }
    }
    
    render() {
        const {todos, themeID} = this.state;
        
        return (
            <div className={`todo todo--theme-${themeID}`}>
                <Navbar title="todo" changeThemeHandle={this.changeTheme.bind(this)} />
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
    
    changeTheme() {
        let {themeID} = this.state;
        
        themeID++;
        if(themeID > 5) {
            themeID = 1;
        }
        
        this.setState({themeID});
    }
}

export default Todo;