class TodoItem extends React.Component {
  onClick () {
    this.props.toggleItem(this.props.id);
  }

  render () {
    var className = 'todo-item';
    if (this.props.done) {
      className += ' done';
    }
    return (
      <li className={className} onClick={ ()=> this.onClick() }>
        {this.props.children}
      </li>
    );
  }
};
