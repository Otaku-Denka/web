import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import { SlideLists } from '../../api/slide.js'

export default class SlideList extends Component {
  constructor(){
    super();
    this.deleteSlide = this.deleteSlide.bind(this)
  }
  renderImages(){
    const {img} = this.props
    img.map
  }

  deleteSlide(id){
    SlideLists.remove(id, function(err,result){
      if (err){
        console.log(err)
      } else {
        console.log(result)
      }
    })
  }
  render(){
    const { img } = this.props
    return (
      <div className="slider-container">
        {img.map(function(result, index){
          return (
            <div className="slider" key={index}>
              <img className="sliderImg" src={`/upload/${result.image}.jpg`} alt="" />
              <RaisedButton label="刪除" secondary={true} 
                onClick={(e) => {
                  e.preventDefault();
                  SlideLists.remove(result._id, function(err, result){
                    if(err){
                      console.log(err)
                    } 
                  })
                }}
              />
            </div>
          )
        })}
      </div>
    )
  }
}