class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputArr: [
        // { id: 1, text: 'one', done: false, description:'i am description' },
        // { id: 2, text: 'two', done: false, description:'i am description' },
        // { id: 3, text: 'three', done: true, description:'i am description' },
        // { id: 4, text: 'four', done: true, description:'i am description' },
      ]
    }
    this.addItem = this.addItem.bind(this)
    this.toggleItem = this.toggleItem.bind(this)
  }

  componentDidMount(){
    this.getList()
  }

  getList =() =>{
    // $.get(this.props.url)
    //   .then( arr => this.setArr(arr))
    fetch(this.props.url,{method:'get'})
    .then(response=>{
      if(!response.ok) throw new Error(response.statusText)
      return response.json()
    })
    .then(arr => this.setArr(arr))
    .catch(err => console.log(err))
  }

  setArr = (arr) => {
    this.setState({
      inputArr:arr
    })
  }
  addItem(text) {
    // let newItem = {
    //   id: this.state.inputArr.length + 1,
    //   text,
    //   done: false
    // }

    // let newInputArr = this.state.inputArr.concat(newItem)//return new array

    // this.state.inputArr.push(newItem) //return new array length...
    // let newInputArr = this.state.inputArr // reassign to a variable

    // this.setState({
    //   inputArr: newInputArr
    // })


    // fetch(this.props.url,{method:'post',body:{text}})
    // .then(response=>{
    //   if(!response.ok) throw new Error(response.statusText)
    //   return response.json()
    // })
    // .then(arr => this.setArr(arr))
    // .catch(err => console.log(err))


    $.ajax({type:'POST', url: this.props.url,data:{text}})
      .then( arr => this.setArr(arr))
  }

  toggleItem(id){
    // var newArr =this.state.inputArr.map(
    //   (item) => {
    //     if(item.id === id){ //如果id一樣，改變done值
    //       item.done = !item.done
    //       return item
    //     }
    //     return item //其他id物件傳回原值
    //   }
    // )

    // this.setState({
    //   inputArr: newArr
    // })


    $.ajax({type:'PUT', url: this.props.url,data:{id}})
    .then( arr => this.setArr(arr))
  }

  render() {
    const toggleItem = this.toggleItem
    const todoItems = this.state.inputArr.map(
      (item) => 
        <TodoItem key={item.id} 
                  // done={item.done} 
                  // id={item.id} 
                  // description={item.description}
                  {...item}
                  toggleItem={toggleItem}>
          {item.text}
        </TodoItem>
    )

    return (
      <div className="todo-list">
        TodoList
        <TodoForm addItem={this.addItem}/>
        <ul className="todo-items">
          {todoItems}
        </ul>
      </div>
    )
  }
}