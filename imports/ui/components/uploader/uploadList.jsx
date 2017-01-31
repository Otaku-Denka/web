import React, { Component } from 'react'
import { Images } from '../../api/file.js'
const uuidV4 = require('uuid/v4');



export default class UploadList extends Component {
  constructor(props){
    super(props)
    this.state = {
      result:[]
    }
  }

  shouldComponentUpdate (nextProps, nextState) {

    if(nextProps != this.props){
      return false
    } else {
      return true
    }

  }
  

  componentWillReceiveProps (nextProps) {
    const { imgs } = nextProps
    const { deleteImg } = this.props
    let that = this;
    let newData = [];
    let count = imgs.length
    if (imgs && imgs[0]){
      for (let i=0, l=imgs.length; i<l ; i++){
        let reader = new FileReader();
        reader.readAsDataURL(imgs[i])
        reader.onload = function(e){

          let node = <img src={e.target.result}  alt="" className="photo"/>
          newData.push(node)
          count--
          if(count == 0 ){
            that.setState({result:  [...that.state.result, ...newData]})
          }
        }
      }
    }
    that.setState({
      result: []
    })
  }
  renderUpload(){

    const { deleteImg } = this.props
    return this.state.result && this.state.result.map((value, i ) =>{
      return (
        <div className="image-contain" key={uuidV4()}>
          <div className="deleteBtn" onClick={(e) =>{ this.props.deleteImg(e) }}> 刪除 </div>
            { value }
        </div>
      )
    })
  }
  render(){
    const { deleteImg, imgs } = this.props
    return (
      <div>
        <div className="gallery" >
          {this.renderUpload()}
        </div>
      </div>
    )
  }
}