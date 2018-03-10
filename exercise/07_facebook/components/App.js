class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      status: 'loading'
    }
  }

  componentDidMount(){
    FB.init({
      appId:'1995337070693916',
      xfbml:false,
      version: 'v2.10'
    })

    FB.getLoginStatus(this.loginStatus)
  }

  loginStatus=(rs)=>{
    console.log(rs)
  }

  render(){
    return(
      <div className="app"></div>
    )
  }
}