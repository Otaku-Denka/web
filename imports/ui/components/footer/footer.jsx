import React, { Component } from 'react';

const Footer = () =>{
  return(
    <div>
      <footer className="footer">
        <div className="copyright">
         <i className="fa fa-copyright"></i>
          &nbsp;By 咖啡攝影工作室 <br />
          網站建置 Zhao Jie
        </div>
        <div className="social-contain">
          <div className="social">
            <a href="https://www.facebook.com/coffee7365">
              <i className="fa fa-facebook fa-1x"></i>
            </a>
          </div>
          <div className="social">
            <a href="https://www.facebook.com/coffee7365">
              <i className="fa fa-instagram fa-1x" ></i>
            </a>
          </div>
        </div>
        <div className="phone">
          <div className="social">
            <a href="tel:0928077408">
              <i className="fa fa-phone fa-1x" ></i>
            </a>
          </div>
          Coffee <br />
          0928077408
        </div>
      </footer>
    </div>
  )
}

export default Footer