import React, { Component } from 'react'
import Slide from './slide'
import SlideController from './SlideControler'

const imgsArray = [
  "/imgs/1.jpg",
  "/imgs/2.jpg",
  "/imgs/3.jpg"
]


export default class ImagesPlayer extends Component {
  constructor(){
    super();
    this.state ={
      currImg: 0
    }
  }

  componentDidMount () {
    console.log('did mount')
    this.interval = setInterval(() => {
      const imgsLength = imgs.length;
      console.log('interval')
      if( this.state.currImg >= imgsLength -1 ){ 
        this.setState({currImg: 0})
        return
      }   
      this.setState({currImg: this.state.currImg +1})
    }, 5000)
  }

  componentWillUnmount() {
    console.log('will unmount')
    this.interval && clearInterval(this.interval);
    this.interval = false;
  }
  

  stopPlay(e){
    e.preventDefault();
    clearInterval(this.interval)
  }

  startPlay(e){
    e.preventDefault();
    this.interval && clearInterval(this.interval)
    this.interval = setInterval(() => {
      console.log('start play interval')
      const imgsLength = imgs.length;
      if( this.state.currImg >= imgsLength -1 ){ 
        this.setState({currImg: 0})
        return
      }   
      this.setState({currImg: this.state.currImg +1})
    }, 5000)
  }

  slideNext(e){
    e.preventDefault()
    const imgsLength = imgs.length;
    if( this.state.currImg >= imgsLength -1 ){ 
      this.setState({currImg: 0})
      return
    }
    this.setState({currImg: this.state.currImg +1})
  }

  slideBack(e){
    e.preventDefault()
    const imgsLength = imgs.length;
    
    if (this.state.currImg <= 0 ){
      this.setState({currImg: imgsLength -1 })
      return
    }
    this.setState({currImg: this.state.currImg -1})
  } 
  

  
  render(){
    imgs = imgsArray.map((img, index) => {
    return <Slide img={img} index={index} key={index} currImg={this.state.currImg}/>
    })
    return (
      <div className="images-player" 
        onMouseEnter={this.stopPlay.bind(this)}
        onMouseLeave={this.startPlay.bind(this)}  
      >
          {imgs}
          <SlideController 
            slideBack = { this.slideBack.bind(this) }
            slideNext = { this.slideNext.bind(this) }
            slideTotal = { imgsArray.length }
            currImg = { this.state.currImg}
          />
      </div>
    )
  }
} 

