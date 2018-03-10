class List extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      arr: ['doge', 'doge1', 'doge2', 'cate']
    }
    this.addItem = this.addItem.bind(this)
  }
  componentDidMount(){
    let count = 1
    setInterval(()=>{
      this.addItem(`wow${count}`)
      count ++
    },1000)
  }

  addItem(item){
    // this.setState({
    //   arr: [...this.state.arr, item]
    // })
    // let {arr} = this.state
    // arr.push(item)
    this.setState({
      arr: this.state.arr.concat(item)
    })
  }

  render() {
    return (
      <ol className="list">
      {
        this.state.arr.map((item, index) => <li key={index.toString()}>{item}</li>)
      }
      </ol>
    );
  }
}

ReactDOM.render(
  <List/>,
  document.getElementById('app')
)