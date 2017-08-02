import React, { Component } from 'react';
import fire from './fire'

class AddTweet extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      tweet: 'Будь ласка, напиши свій твіт:)',
      header : 'Будь ласка, напиши свій твіт:)'
    };
    this.handleAddTweet = this.handleAddTweet.bind(this);
  }
  
  handleChange(e) {
    this.setState({
      tweet: document.getElementById("newTweet").value})
  }
  
  handleAddTweet(e) {
    // e.preventDefault(); 
    fire.database()
      .ref('added')
      .push({ text: this.state.tweet, added: false });
    this.setState({ header: "Круто! Давай ще!" });
    document.getElementById("newTweet").value = "";
  }
  render() {
    return (
      <div className="wrapper">
      <div className="AddTweet">
          < div className="addTweetHeader" > {
              this.state.header
        } < /div>
        <textarea id="newTweet" onChange={this.handleChange} />
        
          </div>
          <button id="newTweetBtn" onClick={this.handleAddTweet}>Додати твіт</button>
      < /div>
    );
  }
}

export default AddTweet;