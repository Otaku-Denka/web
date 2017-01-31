import React, { Component } from 'react'


export default class Category extends Component {


  componentWillUpdate(nextProps, nextState) {
    const { category } = this.props
     if(category == nextProps.filter){
      this.refs.cate.className = 'btn cate-active'
    } else {
      this.refs.cate.className = "btn"
    }
  }
  
  render(){
    const { category, onClick } = this.props

    if(this.props.category === this.props.filter){
      return (
      <a href="#" className="btn cate-active" 
        ref ="cate"
        onClick = {onClick}
      >{ category }</a>
      )
    } else {

      return (
        <a href="#" className="btn" 
          ref ="cate"
          onClick = {onClick}
        >{ category }</a>
      )
    }
  }

}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     active: ownProps.category === state.filter
//   }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onClick: () => {
//       dispatch( setFilter(ownProps.category) )
//     }
//   }
// }

// export default Category = connect(mapStateToProps, mapDispatchToProps)(Category)
