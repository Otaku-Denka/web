import React, { Component } from 'react'
import ReactCssTransitionGroup from 'react-addons-css-transition-group'

export default class About extends Component {
  render(){
    return(
      <div className="about-container">
        <ReactCssTransitionGroup
            transitionName="aboutAnimation"
            transitionAppear={true}
            transitionEnter={false}
            transitionLeave={false}
            transitionAppearTimeout={600}
          >
          <img src="about2.jpg" alt="" className="about-img" />
          <div className="about-header">
            <h1>
              About Coffee   |   關於佳輝
            </h1>
          </div>
          <p className="about-detail">
            我叫佳輝，叫我Coffee就好

            我喜歡攝影，是因為攝影能把一瞬間的情感記錄起來

            不論喜怒哀樂，100%的還原氣氛

            所以在攝影的當下更能體會婚禮現場的氣氛

            感受到那份感動

            希望能為新人們拍攝最有溫度的影像
          </p>
          <p className="about-detail">器材 canon 5d3    24-70 II
50 1.8  851.8</p>
        </ReactCssTransitionGroup>
      </div>
    )
  }
}