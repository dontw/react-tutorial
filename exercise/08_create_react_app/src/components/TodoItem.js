import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.props.toggleItem(this.props.id);
  }
  render() {
    let className = 'todo-item';
    if (this.props.done) {
      className += ' done';
    }
    return (
      <li className={className} onClick={this.onClick}>
        {this.props.children}
      </li>
    );
  }
}

export default TodoItem;
