import React from 'react';
import moment from 'moment'


const Card = ({img, url, title, summary, date, category, admin}) =>{
  return (
      <a href={ ( admin ) ? `/admin/gallery/${url}` : `/gallery/${url}` } className="card">

        <span className="card-header" >
          <img src={`/upload/${img}.jpg`} alt=""/>
        </span>

        <span className="card-title">
          <h3> { title } </h3>
        </span>
        
        <span className="card-summary">
          { summary }
        </span>

        <span className="card-meta">
          { `${moment(date).get('y')}年${moment(date).month() + 1}月${moment(date).date()}日` }
        </span>
      </a>
  )
}


export default Card