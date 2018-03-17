import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: 1, text: 1, done: false },
        { id: 2, text: 2, done: false },
        { id: 3, text: 3, done: false },
      ],
    };
    this.addItem = this.addItem.bind(this);
    this.toggleItem = this.toggleItem.bind(this);
  }
  addItem(text) {
    const item = {
      id: this.state.list.length + 1,
      text,
      done: false,
    };
    const list = this.state.list.concat(item);
    this.setState({
      list,
    });
  }
  toggleItem(id) {
    const list = this.state.list.map(item => (item.id !== id ? item : {
      id: item.id,
      text: item.text,
      done: !item.done,
    }));
    this.setState({
      list,
    });
  }
  render() {
    const { toggleItem } = this;
    return (
      <div className="todo-list">
        <TodoForm addItem={this.addItem} />
        <ul className="todo-items">
          {
            this.state.list.map(item => (
              <TodoItem
                id={item.id}
                done={item.done}
                key={item.id}
                toggleItem={toggleItem}
              >
                {item.text}
              </TodoItem>
              ))
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;

