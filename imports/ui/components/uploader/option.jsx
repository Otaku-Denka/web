import React, { Component } from 'react'



export default class Option extends Component {
  constructor(props){
    super(props)
    this.state = {
      category: ['婚禮攝影','人像寫真'],
      selectdCate:"婚禮攝影"
    }
  }
  
  handleChange(e){
    e.preventDefault();
    this.setState({
      selectdCate: e.target.value
    })
  }

  renderOption(){
    return this.state.category.map((cate, i) => {
      return <option value={cate} key={i}> {cate} </option>
    })
  }
  render(){
    return (
      <div className="select-style">
        <select onChange={(e)=>{this.handleChange(e)}}>
          {this.renderOption()}
        </select>
      </div>
    )
  }
}