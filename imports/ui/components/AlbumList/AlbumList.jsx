import React, { Component, PropTypes } from 'react';
import Card from './Card'
import Category from './category'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import ReactCssTransitionGroup from 'react-addons-css-transition-group'
import { createContainer } from 'meteor/react-meteor-data';
import Editor from './Editor'
import { Albums } from '../../api/album.js'
import Login from '../login/login'


class AlbumList extends Component {
  constructor(){
    super()
    this.state = {
      filter:"全部",
      category: ['全部', '婚禮攝影','人像寫真']
    }
  }

  handleActive(e){
    this.setState({
      filter:e.target.text
    })
  }

  render(){

    let { albums, admin } = this.props
      albums = albums.filter((value) => {
        if(this.state.filter == '全部'){
          return value
        }
        return value.category == this.state.filter
      })
      const Cards = albums.map(function(result, index){
        return (
          <Card category={result.category} 
            img={result.titleImg} 
            url={result._id} 
            title={result.title} 
            summary={result.summary} 
            date={result.date} 
            key={index} 
            admin={admin}
          />
        )
      }) 
    


      const cate = this.state.category

      const category = cate.map((result , i) => {
        return <Category ref="cates"   filter={this.state.filter} category={result} key={i} 
        onClick={this.handleActive.bind(this)}/>
      })
      return (
        <div>
          <div className="category">
            {category}
          </div>
          <div className="cards">
          <ReactCssTransitionGroup
            transitionName="cardLoad"
            transitionEnterTimeout={600}
            transitionLeaveTimeout={600}
            transitionAppearTimeout={1500}
            transitionAppear={true}
          >
            { (this.props.admin) ? <Editor /> : "" }
            { (Cards) ? Cards : <div>Loading . . .</div> }
          </ReactCssTransitionGroup>
          </div>
        </div>
      )
  }
}

AlbumList.propTypes ={
  albums: PropTypes.array.isRequired,
  listLoading: PropTypes.bool,
  admin: PropTypes.object
}

export default createContainer(() => {
  var handle = Meteor.subscribe("albums");
  return {
    listLoading: ! handle.ready(),
    albums: Albums.find({}).fetch(),
    admin: Meteor.user()
  }
}, AlbumList )


