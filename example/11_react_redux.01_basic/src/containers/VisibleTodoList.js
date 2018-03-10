import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = {
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default VisibleTodoList;
