import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { createContainer } from 'meteor/react-meteor-data';





class MainLayout extends Component {

  toggleNav(e){
    e.preventDefault();
    const nav = this.refs.navToggle
    if (nav.className == "links"){
      nav.className = "links active"
    } else {
      nav.className = "links"
    }
  }
  closeNav(e){
    e.preventDefault();
    const nav = this.refs.navToggle
    nav.className = "links"
  }

  logOut(e){
    e.preventDefault();
    Meteor.logout(function(err){
      if(err){
        console.log(err)
      } else {
        console.log(`success logout`)
      }
    })

  }

  
  render(){
    const { content, footer } = this.props
    return(
      <div>
        <div className="main-layout">
          <header>
            <nav>
              <div className="toggle"  onClick={this.toggleNav.bind(this)}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="links" ref="navToggle" onClick={this.closeNav.bind(this)}>
                <a href="/">首頁</a>
                <a href="/gallery">攝影作品</a>
                <a href="/contcat">聯絡我們</a>
                <a href="/about">關於我</a>  

                { (Meteor.user()) ? <RaisedButton label="登出" primary={true} 
                  style={{float:'right', marginRight:'15px'}}
                  onClick={ this.logOut.bind(this) }
                /> : ''}
              </div>     
            </nav>
          </header>
        </div>
        { content }
        { footer }
      </div>
    )
  }
}


export default createContainer(()=> {
  return {
      admin: Meteor.user()
  }
}, MainLayout )