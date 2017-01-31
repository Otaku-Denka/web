import React, { Component } from 'react'


export default class Slide extends Component {

  componentWillReceiveProps (nextProps) {
    if (nextProps.currImg == this.props.index){
      this.refs.slide.className = "fadeIn"
    } else {
      this.refs.slide.className = "fadeOut"
    }
  }

  
  componentDidMount () {
    setTimeout(()=>{
      if (this.props.currImg == this.props.index){
      this.refs.slide.className = "fadeIn"
    } else {
      this.refs.slide.className = "fadeOut"
    }
    },300)
  }
  
  

  render(){
    return(
      <div 
        className="fadeOut"
        ref="slide" 
        style={{backgroundImage:'url('+ this.props.img +')'}}
        alt="" 
        onClick={ (e) => {this.handleClick(e)} }
      ></div>
    )
  }
}

