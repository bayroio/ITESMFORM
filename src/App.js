import React, { Component } from 'react';
import UserInfo from './componentes/Userinfo'; 

class App extends Component {
  state = {
    _mail: '',
    _name: '',
    _firstusername: '',
    _secondusername: ''
  }

  SearchApi = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 'mail': this.state._mail, 'name': this.state._name, 'firstsurname': this.state._firstusername, 'secondsurname': this.state._secondusername })
    };

    const url = "http://localhost:3001/api/v1/step";

    fetch(url, requestOptions)
      .then(response => response.text())
      .then((response) => {
        console.log(response)
      })
    . catch(err => console.log(err))
  }

  userdata = (mail, name, firstusername, secondusername) => {
    this.setState({
      _mail: mail,
      _name: name,
      _firstusername: firstusername,
      _secondusername: secondusername
    },
    () => {
      this.SearchApi();
    }
    )
  }
  
  render(){
    return (
      <div className="App">
        <UserInfo Info={this.userdata} />
      </div>
    );  
  }
}

export default App;
