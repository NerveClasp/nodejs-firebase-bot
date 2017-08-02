import React, { Component } from 'react';
import fire from './fire'

class TweetQueue extends Component {
  constructor(props) {
    super(props);
    this.state = { tweetsInQueue: [] };
  }
  componentWillMount() {
    /* Create reference to messages in Firebase Database */
    let messagesRef = fire.database()
      .ref('added')
      .orderByKey()
      .limitToLast(20);
    messagesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = {
        text: snapshot.val().text,
        id: snapshot.key
      };
      this.setState({
        tweetsInQueue: [message].concat(this.state.tweetsInQueue)
      });
    })
  }
  render() {
    return (
      <div className="TweetList" >
        { /* Render the list of messages */
          this.state
            .tweetsInQueue
            .map(tweet => <div className="tweetsQueue" key={tweet.id}>{tweet.text}</div>)
        }
      </div>
    );
  }
}

export default TweetQueue;