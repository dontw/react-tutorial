class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    // this.inputRef = this.inputRef.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()//阻止原生事件
    let inputText = this.input.value
    this.input.value = ''//送出後清空input
    this.props.addItem(inputText) //將input值傳入父元素經由props傳入additemfunciton中 
  }

  // inputRef(input){
  //   this.input = input
  // }

  render() {
    return (
      <form className="todo-form" onSubmit={this.onSubmit}>
        <input type="text" ref={(elm) => this.input = elm} />
        {/* 使用ref attribute 取得該 input dom元素 並指定到 input */}
      </form>
    );
  }
}
