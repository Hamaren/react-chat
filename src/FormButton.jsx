import React, {Component} from 'react';
import './App.css';

class FormButton extends Component{
  render(){
    return(
      <button className={this.props.className} onClick={this.props.click}>
        {this.props.text}
      </button>
    )
  }
}

export default FormButton;
