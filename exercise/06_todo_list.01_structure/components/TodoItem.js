class TodoItem extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.clickItem = this.clickItem.bind(this)
  // }

  clickItem =() => {
    this.props.toggleItem(this.props.id)
  }
  
  render() {
    let doneClass = 'todo-item'
    if(this.props.done){
      doneClass += ' done'
    }
    return (
      <li className={doneClass} onClick={this.clickItem}>
        {this.props.children}
        <p>{this.props.description}</p>
        {/* 夾在<TodoItem></TodoItem>中的html */}
      </li>
    );
  }
}

