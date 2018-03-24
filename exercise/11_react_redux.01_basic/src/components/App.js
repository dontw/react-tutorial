import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

import ClearTodoCount from '../containers/ClearTodoCount';

const App = () => (
  <div className="app">
    <AddTodo />
    <VisibleTodoList />
    <ClearTodoCount />
  </div>
);

export default App;
