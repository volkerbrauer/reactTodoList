import React, { Component } from 'react';
import Panel from "./Panel";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);

    this.state= {
      todos: [
      {id: 1, title:"Obst kaufen"},
      {id: 2, title:"Programmieren lernen"},
      {id: 3, title:"TODO"}
      ]
    }
    this.addTodo=this.addTodo.bind(this);
  }

addTodo(title) {
  let todos=this.state.todos;
  let maxId=0;
  for (let todo of todos) {
    if (todo.id>maxId) {
      maxId = todo.id;
    }
  }
  todos.push({id:(maxId+1),title: title});
  //mit SetState den State erneuern, sonst kann die Anzeige nicht erneuert werden
  //state, props werden in Virtual DOM überführt (render-methode) -> HTML wird erzeugt

  this.setState({
    todos: todos
  })

}
  render() {

   return (
      <div className="App">
        <h1>Todo-Liste</h1>
        <TodoList todos={this.state.todos} /> {/* Die Todos werden als Props an die Komponente übergeben */}
      <TodoAdd onAdd={this.addTodo} />
      </div>
    );

    return
  }
}

export default App;
