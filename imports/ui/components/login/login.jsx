import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Meteor } from 'meteor/meteor'



export default class Login extends Component {

  componentDidMount () {
    console.log(Meteor.user())
    if (Meteor.user()){
      FlowRouter.go('/gallery')
    }
  }
  
  signUp(e){
    e.preventDefault();
    const name = this.refs.name.getValue()
    const email = this.refs.email.getValue()
    const pass = this.refs.pass.getValue()

    console.log({
      name,
      email,
      pass
    })
    Accounts.createUser({
      username: name,
      email: email,
      password: pass,
      profile:{}
    }, function(err){
      if(err){
        console.log(err)
      } else {
        console.log(`accounts created`)
        FlowRouter.go('/')
      }
    })
  }

  login(e){
    const name = this.refs.logInName.getValue()
    const pass = this.refs.logInPass.getValue()
    e.preventDefault();
    Meteor.loginWithPassword(name, pass, function(err){
      if (err){
        console.log(err)
      } else {
        console.log(`Account Login!!`)
        FlowRouter.go('/')
      }
    })
  }

  render(){ 
    return (
      <div className="contcat-container">
        <h2>登入</h2>
          <TextField
            hintText="姓名"
            ref="logInName"
          /><br />

          <TextField
            hintText="密碼"
            type="password"
            ref="logInPass"
          /><br />
          
          <RaisedButton label="送出" primary={true}  onClick={this.login.bind(this)} />
      </div>
    )
  }
}


          
      //  <div className="contcat-container">
      //   <h2>註冊</h2>
      //   <TextField
      //     hintText="姓名"
      //     ref="name"
      //   /><br />

      //   <TextField
      //     hintText="信箱"
      //     ref="email"
      //   /><br />

      //   <TextField
      //     hintText="密碼"
      //     type="password"
      //     ref="pass"
      //   /><br />
        
      //   <RaisedButton label="送出" primary={true}  onClick={this.signUp.bind(this)} />
      // </div>
