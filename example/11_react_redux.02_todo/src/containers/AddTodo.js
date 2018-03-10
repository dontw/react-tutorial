import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends Component {
  submitHandler = (e) => {
    e.preventDefault();
    if (!this.input.value.trim()) {
      return;
    }
    this.props.addTodo(this.input.value);
    this.input.value = '';
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input ref={(node) => { this.input = node; }} />
          <button type="submit" >Add Todo</button>
        </form>
      </div>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  addTodo(text) {
    dispatch(addTodo(text));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
