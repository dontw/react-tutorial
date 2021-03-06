class TodoList extends React.Component {
  constructor(props){
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
  addItem (text) {
    var item = {
      id: this.state.list.length + 1,
      text: text,
      done: false,
    };
    var list = this.state.list.concat(item);
    this.setState({
      list: list,
    });
  }
  toggleItem (id) {
    var list = this.state.list.map(function (item) {
      return item.id !== id ? item : {
        id: item.id,
        text: item.text,
        done: !item.done,
      };
    });
    this.setState({
      list: list,
    });
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
                  toggleItem={toggleItem} >
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
