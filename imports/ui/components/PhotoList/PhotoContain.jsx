import React, { Component, PropTypes } from 'react';
import PhotoHeader from './PhotoHeader'
import PhotoList from './PhotoList'
import SlideList from './slideList'
import { createContainer } from 'meteor/react-meteor-data';
import CircularProgress from 'material-ui/CircularProgress';
import { Albums } from '../../api/album.js'
import { Images } from '../../api/file.js'
import { SlideLists } from '../../api/slide.js'
import { Meteor } from 'meteor/meteor';




  
class PhotoContain extends Component { 
  constructor(){
    super()
    this.state = {
      loading: false
    }
  }
  componentDidMount() {
    if(!Albums.findOne(this.props._id)){
      FlowRouter.go('/gallery')
    }
  }
  

  deleteImg(id){
    const that = this
    let data = Albums.findOne(this.props._id).photo
    data.splice(data.indexOf(id), 1)
    this.setState({
      loading: true
    })
    Meteor.call('Images.remove',id, function(err){
      if (err) {
        console.log(err.reason)
      } else {
        Meteor.call('Albums.update', that.props._id, data)
        console.log('files removed')
        that.setState({
          loading: false
        })
      }
    })
  }

  deleteAlbum(){
    const { _id } = this.props
    const that = this;
    this.setState({
      loading: true
    })
    photoArr = Albums.findOne(_id).photo
    Meteor.call('Albums.remove', _id , function(err){
      if(err){
        console.log(err)
      } else {
        photoArr.forEach((data) =>{
          Meteor.call('Images.remove', data)
        })
        that.setState({
          loading: false
        })
        FlowRouter.go('/gallery')
      }
    })
  }

  setTitleImg(id){
    const { _id } = this.props
    Meteor.call('Albums.setTitle', _id, id)
  }
  render(){
    let { album, _id, admin} = this.props
    if(this.props.listLoading){
      return <div className="photo-contain">
        <CircularProgress />
      </div>
    } else {


      let { title, summary, date, photo, titleImg} = album
      return (
      <div className="photo-contain">
        { ( admin ) ? <SlideList img={this.props.slideList}/> : ""}
        <PhotoHeader title={title} summary={summary} meta={date} admin={admin} onClick={this.deleteAlbum.bind(this)}/>
        { (this.state.loading ? <CircularProgress /> : "")}
        <PhotoList imgs={photo} admin={admin} onClick={this.deleteImg.bind(this)} 
          setTitle={this.setTitleImg.bind(this)}
          titleImg={titleImg}
        />
      </div>
      )
    }
  }
}


PhotoContain.propTypes ={
  album: PropTypes.object,
  listLoading: PropTypes.bool,
  _id: PropTypes.string,
  admin: PropTypes.bool
}


export default createContainer(({ _id }) => {
  const handle = Meteor.subscribe("albums");
  const slideSubscribe = Meteor.subscribe('slideList');
  const list = Albums.findOne(_id)
  const exist = ! handle.ready() && list
  return {
    listLoading: ! handle.ready(),
    album: list,
    slideList: SlideLists.find().fetch()
  }
}, PhotoContain )

