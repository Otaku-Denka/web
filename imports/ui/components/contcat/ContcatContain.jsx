import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { mailTransport } from '../../api/mail.js'
import { Meteor } from 'meteor/meteor'
import { Email } from 'meteor/email'



export default class ContcatContain extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:"",
      mail:"",
      subject:"",
      message:""
    }
  }

  handleClick(e){
    e.preventDefault();
    let { name, mail, subject, message } = this.state
   
    Meteor.call('sendEmail',
      'coffee7365@gmail.com',
      `${name} email: ${mail}`,
      subject,
      `姓名: ${name} 
email: ${mail} 
訊息: ${message}`
    )


    this.setState({
      name: "",
      mail: "",
      subject: "",
      message: ""
    })
  }
  sendMessage(e){
    e.preventDefault();
    let { name, mail, subject, message } = this.refs

    this.setState({
      name: name.getValue(),
      mail: mail.getValue(),
      subject: subject.getValue(),
      message: message.getValue()
    })
  }

  render(){
    
    return (
      <div className="contcat-container">
        <h2>聯絡我們</h2>
        <TextField
          hintText="姓名"
          ref="name"
          onChange={this.sendMessage.bind(this)}
          value={this.state.name}
        /><br />

        <TextField
          hintText="信箱"
          ref="mail"
          value={this.state.mail}
          onChange={this.sendMessage.bind(this)}
        /><br />

        <TextField
          hintText="主旨"
          ref="subject"
          value={this.state.subject}
          onChange={this.sendMessage.bind(this)}
        /><br /><br />

        <h3>留言內容</h3>
        <TextField
          hintText="內容"
          ref="message"
          value={this.state.message}
          onChange={this.sendMessage.bind(this)}
          multiLine={true}
        /><br />
        
        <RaisedButton label="送出" primary={true} onClick={this.handleClick.bind(this)} />
      </div>
    )
  }
}