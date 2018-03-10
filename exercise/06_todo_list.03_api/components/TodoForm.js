class TodoForm extends React.Component {

  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.inputRef = this.inputRef.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    var text = this.input.value;
    this.input.value = '';
    this.props.addItem(text);
  }

  inputRef(input) {
    this.input = input;
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.onSubmit}>
        <input type="text" ref={this.inputRef} />
      </form>
    );
  }
};
