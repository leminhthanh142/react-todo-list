import './App.css';
import React, {Component} from "react";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";


class App extends Component{

    state = {
        todos: [
            {
                id: 1,
                title: "take out the trash",
                completed: false
            },
            {
                id: 2,
                title: "dinner with my wife",
                completed: false
            },
            {
                id: 3,
                title: "Meeting with boss",
                completed: false
            }
        ]
    }

    // Toggle Complete
    markComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            }) })
    }

    // Delete Todo
    delTodo = (id) => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
    }

    // Add Todo
    i = 4;
    addTodo = (title) => {
        const newTodo ={
            id: this.i++,
            title: title,
            completed: false
        }
        this.setState({ todos: [...this.state.todos, newTodo] })
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <Header />
                    <AddTodo addTodo={this.addTodo}/>
                    <Todos todos={this.state.todos}
                           markComplete={this.markComplete}
                           delTodo={this.delTodo}
                    />
                </div>
            </div>
        );
    }
}

export default App;
