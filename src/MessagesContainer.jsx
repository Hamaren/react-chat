import React, {Component} from 'react';
import Message from './Message';
import './App.css';

class MessagesContainer extends Component{
  render(){
    return(
      <div className="messages-container">
        {(this.props.messages.length === 0) ?
          <div className="no-messages">No messages</div> :
          this.props.messages.map((messages, i) => {
             return (<Message key={i} messageText={messages.messageText} messageDate={messages.messageDate} click={()=>this.props.messageDelete(i)} />)
          })}
      </div>
    )
  }
}

export default MessagesContainer;
