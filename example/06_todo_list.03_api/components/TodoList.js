class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
    this.toggleItem = this.toggleItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  componentDidMount() {
    $.get(this.props.url)
      .then( list => this.setList(list));
  }
  addItem(text) {
    $.ajax({
      type: "POST",
      url: this.props.url,
      data:{ text }
    }).then( list => this.setList(list));
  }
  toggleItem(id) {
    $.ajax({
      type: "PUT",
      url: this.props.url,
      data:{ id }
    }).then( list => this.setList(list));
  }
  setList(list) {
    this.setState({ list });
  }
  render () {
    var toggleItem = this.toggleItem;
    return (
      <div className="todo-list">
        <TodoForm addItem={this.addItem} />
        <ul className="todo-items">
          {
            this.state.list.map(function (item) {
              return (
                <TodoItem
                  id={item.id}
                  done={item.done}
                  key={item.id}
                  toggleItem={toggleItem}
                >
                  {item.text}
                </TodoItem>
              );
            })
          }
        </ul>
      </div>
    );
  }
};
