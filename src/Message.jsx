import React, {Component} from 'react';
import './App.css';

class Message extends Component{
  render(){
    return(
      <div className="message">
        <span>{this.props.messageText}</span>
        <span className="message-date">Posted: {this.props.messageDate}</span>
        <i className="message-delete" index={this.props.index} onClick={this.props.click}></i>
      </div>
    )
  }
}

export default Message;
