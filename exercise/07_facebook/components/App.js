class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      status: 'loading'
    }
    this.loginStatus = this.loginStatus.bind(this)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
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
    if(rs.status === 'connected'){
      this.setState({status: 'connected'})
    }else{
      this.setState({status:'not-connected'})
    }
  }

  login(){
    this.setState({status:'loading'})
    FB.login(this.loginStatus)
  }

  logout(){
    this.setState({status:'loading'})
    FB.logout(this.loginStatus)
  }

  getElement(){
    switch(this.state.status){
      case 'loading':
        return(
          <img className="loading" src="img/fb-loading.gif"/>
        )
      case 'not-connected':
        return(
          <button className="login" onClick={this.login}>
            Connect Facebook
          </button>
        )
      case 'connected':
        return <Profile logout={this.logout}>logout</Profile>
    }
  }


  render(){
    return(
      <div className="app">
        {this.getElement()}
      </div>
    )
  }
}