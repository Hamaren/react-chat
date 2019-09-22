import React, {Component} from 'react';
import MessageForm from './MessageForm';
import MessagesContainer from './MessagesContainer';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      messages: []
    }

    this.messagesChange={
      messageAdd: text =>{
        if(text.length === 0){
          alert('Enter something in message form');
        } else{
          let arrMessages = this.state.messages;
          arrMessages.push({
            messageText: text,
            messageDate: this.getDate()
          });
          this.setState({
            messages: arrMessages
          })
        }
      },
      messagesDelete: event =>{
        event.preventDefault();
        this.setState({
          messages: []
        })
      },
      messageDelete: index =>{
        let arrMessages = this.state.messages
        arrMessages.splice(index, 1)
        this.setState({
          messages: arrMessages
        })
      }
    }
  }

  leadingZero(num){
    if(num < 10){
      return '0' + num
    }
    return num
  }

  getDate(){
    const currentDate = new Date(),
          hours = currentDate.getHours(),
          minutes = currentDate.getMinutes(),
          seconds = currentDate.getSeconds(),
          day = currentDate.getDate(),
          month = currentDate.getMonth() + 1,
          year = currentDate.getFullYear(),
          dateResult = `${this.leadingZero(hours)} : ${this.leadingZero(minutes)} : ${this.leadingZero(seconds)}  ${this.leadingZero(day)}.${this.leadingZero(month)}.${this.leadingZero(year)}`;
    return dateResult
  }

  render(){
    return(
      <div className="chat">
        <MessagesContainer messages={this.state.messages} messageDelete={this.messagesChange.messageDelete} />
        <MessageForm messageAdd={this.messagesChange.messageAdd} messageDelete={this.messagesChange.messagesDelete} />
      </div>
    )
  }
}

export default App;
