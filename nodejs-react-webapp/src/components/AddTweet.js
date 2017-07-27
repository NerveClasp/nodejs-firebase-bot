import React, { Component } from 'react';

class AddTweet extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { tweet: 'Будь ласка, напиши свій твіт:)' };
  }
  
  handleChange(e) {
    this.setState({
      tweet: document.getElementById("newTweet").value})
  }
  
  render() {
    return (
      <div className="AddTweet">
        <div>{this.state.tweet}</div>
        <textarea id="newTweet" onChange={this.handleChange}/>
      </div>
    );
  }
}

export default AddTweet;