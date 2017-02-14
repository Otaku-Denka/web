import React from 'react'
import moment from 'moment'
import RaisedButton from 'material-ui/RaisedButton';

const PhotoHeader = ({title, summary, meta, admin, onClick}) => {
  if(admin){
    return (
      <div className="Photo-Header">
        <h1>
          { title }  
          <RaisedButton label="刪除本相簿" secondary={true} style={{float:'right'}}
            onClick={(e) => {
              e.preventDefault();
              onClick();
            }}
          />
        </h1>
        <span> { `${moment(meta).get('y')}年${moment(meta).month() + 1}月${moment(meta).date()}日` }</span>
        <p>{ summary }</p>
      </div>
    )
  } else {
    return (
      <div className="Photo-Header">
        <h1>
          { title }  
        </h1>
        <span> { `${moment(meta).get('y')}年${moment(meta).month() + 1}月${moment(meta).date()}日` }</span>
        <p>{ summary }</p>
      </div>
    )
  }
}

export default PhotoHeader