import React, {Component} from 'react';
import FormButton from './FormButton';
import './App.css';

class MessageForm extends Component{
  messageCreate(event){
    event.preventDefault();
    let textarea = document.querySelector('.message-input');
    const areaText = textarea.value;
    textarea.value = '';
    return areaText;
  }

  render(){
    return(
      <form className="message-form">
        <textarea className="message-input" placeholder="Enter Your Message Here"></textarea>
        <div className="buttons-wrapper">
          <FormButton
            className={"form-button message-add"}
            text={'Add message'}
            click={()=> this.props.messageAdd(this.messageCreate(event))}
          />
          <FormButton
            className={"form-button message-del"}
            text={'Delete all messages'}
            click={()=> this.props.messageDelete(event)}
          />
        </div>
      </form>
    )
  }
}

export default MessageForm
