import React, { Component } from 'react';

const SlideController = ({slideNext, slideBack, slideTotal, currImg}) =>{
  slidelist = function(){
    const slideArray = []
    for (let i = 0; i<=slideTotal-1; i++){
      activeClass = (i == (currImg)) ? "active" : ""
      slideArray.push(<div key={i} className={activeClass}></div>)
    }
    return slideArray;
  }
  return (
    <div>
      <div className="slide-back" onClick={slideBack}></div>
      <div className="slide-next" onClick={slideNext}></div>
    </div>
  )
}

      // <div className="slide-list">
      //   { slidelist() }
      // </div>

export default SlideController;

// export default class SlideController extends Component {
//   constructor(){
//     super()
//   }

//   componentWillReceiveProps (nextProps) {
    
//   }
  
//   render(){
//     const { slideNext, slideBack, slideTotal, currImg } = this.props
//     slidelist = function(){
//       const slideArray = []
//       for (let i = 0; i<=slideTotal-1; i++){
//         activeClass = (i == (currImg)) ? "active" : ""
//         slideArray.push(<div key={i} className={activeClass}></div>)
//       }
//       return slideArray;
//     }
//     return (
//     <div>
//       <div className="slide-back" onClick={slideBack}></div>
//       <div className="slide-next" onClick={slideNext}></div>
//       <div className="slide-list">
//         { slidelist() }
//       </div>
//     </div>
//     )
//   }
// }