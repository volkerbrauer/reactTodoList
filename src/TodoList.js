import React, { Component } from 'react';
import Panel from "./Panel";
import PropTypes from 'prop-types';

class TodoList extends Component {
    render() {
        return (
          <Panel title="Todos">
            <ul className="App-todo">

            {this.props.todos.map(function(todo) {
              return (
                <li key={todo.id}>{todo.title}</li>
              )
            })

            }
            </ul>
          </Panel>
        )
    }
}

//Validierung der Prop-Types
TodoList.propTypes= {
  todos: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        id:React.PropTypes.number,
        title: React.PropTypes.string
      })
  ).isRequired
}
export default TodoList;
