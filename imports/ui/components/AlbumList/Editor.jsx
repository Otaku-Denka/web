import React from 'react';

const Editor = () =>{
  return (
      <a href="/admin/upload" className="card">
        <span className="card-header" >
          <img src={`/upload/add-icon.jpg`} alt=""/>
        </span>
        <span className="card-title">
          <h3> 新增 </h3>
        </span>
      </a>
  )
}

export default Editor