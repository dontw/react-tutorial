class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      status: 'loading'
    }
    this.loginStatus = this.loginStatus.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  } 
  componentDidMount () {
    FB.init({
      appId: '1920486764629409',
      xfbml: false,
      version: 'v2.10',
    });
    FB.getLoginStatus(this.loginStatus);
  }
  login () {
    this.setState({ status: 'loading' });
    FB.login(this.loginStatus);
  }
  logout () {
    this.setState({ status: 'loading' });
    FB.logout(this.loginStatus);
  }
  loginStatus (rs) {
    console.log(rs);
    if (rs.status === 'connected') {
      this.setState({ status: 'connected' });
    } else {
      this.setState({ status: 'not-connected' });
    }
  }
  getElement () {
    switch (this.state.status) {
      case 'loading':
        return (
          <img className="loading" src="img/fb-loading.gif" />
        );

      case 'not-connected':
        return (
          <button className="login" onClick={this.login} >
            Connect Facebook
          </button>
        );

      case 'connected':
      default:
        return <Profile logout={this.logout}/>;
    }
  }
  render () {
    return (
      <div className="app">
        {this.getElement()}
      </div>
    );
  }
};
