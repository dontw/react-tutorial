class Counter extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      count: 0,
      interval: null,
      autoState: false
    }
    this.addCount = this.addCount.bind(this)
    this.autoCount = this.autoCount.bind(this)
    this.stopCount = this.stopCount.bind(this)
  }

  componentDidMount(){
    this.state.interval = setInterval(()=>{
      this.addCount()
    },1000)
    this.state.autoState = true
  }

  addCount(){
    this.setState({
      count: this.state.count + 1
    })
  }

  autoCount(){
    if(this.state.autoState === false){
      this.state.interval = setInterval(()=>{
        this.addCount()
      },1000)
    }
  }

  stopCount(){
    clearInterval(this.state.interval)
    this.state.interval = null
    this.state.autoState = false
  }

  render(){
    let color = this.state.count % 2 === 0 ? 'red': 'black'
    return (
      <div className="counter">
        <h1>Counter</h1>
        <div className="count" style={{color}}>{this.state.count}</div>
        <button onClick={this.addCount}>+1</button>
        <button onClick={this.autoCount}>auto</button>
        <button onClick={this.stopCount}>stop</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter/>,
  document.getElementById('app')
)