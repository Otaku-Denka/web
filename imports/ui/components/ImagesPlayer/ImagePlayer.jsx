import React, { Component } from 'react'
import Slide from './slide'
import SlideController from './SlideControler'
import { createContainer } from 'meteor/react-meteor-data';
import { SlideLists } from '../../api/slide.js'



class ImagesPlayer extends Component {
  constructor(){
    super();
    this.state ={
      currImg: 0
    }
  }

  componentDidMount () {
    this.interval = setInterval(() => {
      const imgsLength = imgs.length;
      if( this.state.currImg >= imgsLength -1 ){ 
        this.setState({currImg: 0})
        return
      }   
      this.setState({currImg: this.state.currImg +1})
    }, 5000)
  }

  componentWillUnmount() {
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
    const { slideList } = this.props
    imgs = slideList.map((img, index) => {
    return <Slide img={`/upload/${img.image}.jpg`} index={index} key={index} currImg={this.state.currImg}/>
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
            slideTotal = { slideList.length }
            currImg = { this.state.currImg}
          />
      </div>
    )
  }
} 

export default createContainer(()=>{
  const handle = Meteor.subscribe("slideList");
  return {
    slideList: SlideLists.find().fetch()
  }
}, ImagesPlayer)