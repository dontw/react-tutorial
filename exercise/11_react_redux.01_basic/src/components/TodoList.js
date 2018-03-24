import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ todos }) => (
  <ul>
    {
      todos.map(todo => <li key={todo.id}>{todo.text}</li>)
    }
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default TodoList;
