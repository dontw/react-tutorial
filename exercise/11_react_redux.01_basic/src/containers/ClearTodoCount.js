import { connect } from 'react-redux';
import { clearTodo } from '../actions';
import TodoCount from '../components/TodoCount';

const mapStateToProps = state => ({
  count: state.todos.length,
});

// const mapDispatchToProps = {
//   onClear: clearTodo,
// };

const mapDispatchToProps = dispatch => ({
  onClear() {
    dispatch(clearTodo());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoCount);

