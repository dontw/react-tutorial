class Profile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      picture: 'img/anonymous.jpg',
      name: '',
    }
    this.profileGet = this.profileGet.bind(this)
  }

  componentDidMount(){
    FB.api('/me', {fields:['picture.width(240)', 'name']}, this.profileGet)
  }

  profileGet(rs){
    this.setState({
      picture: rs.picture.data.url,
      name: rs.name
    })
  }
  render() {
    return (
      <div className="profile">
        <img className="picture" src={this.state.picture} alt="profile picture"/>
        <div className="name">{this.state.name}</div>
        <button onClick={this.props.logout}>log out</button>
      </div>
    );
  }
}

