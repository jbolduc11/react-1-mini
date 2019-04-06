import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { isContainer } from 'postcss-selector-parser';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      myFriends: [],
      picture: '',
      name: ''
    }

    this.updateName = this.updateName.bind(this)
    this.updatePicture = this.updatePicture.bind(this)
    this.addFriend = this.addFriend.bind(this)
  }

  updatePicture(event){
    console.log('updating picture')
    const inputValue = event.target.value;
    this.setState({
      picture: inputValue
    })
  }

  updateName(event){
    console.log('updating name')
    this.setState({
      name: event.target.value
    })
  }

  addFriend(){
    const newFriend = {
      picture: this.state.picture,
      name: this.state.name
    }

    const tempFriends = this.state.myFriends.slice();
    tempFriends.push(newFriend);

    this.setState({
      myFriends: tempFriends,
      picture: '',
      name: ''
    })
  }

  render() {
    console.log('rendering')
    const {myFriends, name, picture} = this.state;
    const friends = myFriends.map((friend) => (
      <div>
        <img src={friend.picture} />
        <h2>{friend.name}</h2>
      </div>
    ))

    return (
      <div className="App">
        <label>Picture:</label>
        <input type="url" value={picture} onChange={this.updatePicture}/>

        <label>Name:</label>
        <input type="text" value={name} onChange={this.updateName}/>

        <button onClick={this.addFriend}>Add Friend</button>
        {friends}
      </div>
    );
  }
}

export default App;