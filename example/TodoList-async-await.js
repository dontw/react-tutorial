const delay = function(time = 1000, cb){
  setTimeout(() => {
    cb();
  }, time);
}
const delayPromise = function(time = 1000){
  return new Promise(function(resolve){
    setTimeout(() => {
      resolve();
    }, time);
  })
}
class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
    this.toggleItem = this.toggleItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }  
  async componentDidMount() {
    console.log('componentDidMount');
    // delay(1000, function(){
    //   console.log('complete')
    //   delay(1000, function(){
    //     console.log('complete')
    //     delay(1000, function(){
    //       console.log('complete')
    //       delay(1000, function(){
    //         console.log('complete')
    //       })
    //     })
    //   })
    // });
    // delayPromise()
    //   .then(function(){
    //     console.log('complete2'); 
    //     return delayPromise()   
    //   })
    //   .then(function(){
    //     console.log('complete3'); 
    //     return delayPromise()   
    //   })
    //   .then(function(){
    //     console.log('complete4'); 
    //   })
    await delayPromise();
    console.log(1);
    await delayPromise();
    console.log(2);
    await delayPromise();
    console.log(3);

    // var result = null;
    // $.get({
    //   url:this.props.url,
    //   success(res){
    //     result = res;
    //     console.log(res);
    //   }
    // })
    // console.log(result);
    // console.log(1);
    // $.get(this.props.url)
    //   .then( (list) => {        
    //     console.log(3);
    //     this.setList(list)
    //   })    
    // console.log(2);

    // console.log(4);
    // var list = await $.get(this.props.url)
    // console.log(5);
    // this.setList(list)

    // $.get(this.props.url)
      // .then( list => this.setList(list));
  }

  
  addItem(text) {
    console.log(text);
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
