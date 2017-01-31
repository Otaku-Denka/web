import React, { Component } from 'react';
import Lightbox from 'react-images'
import RaisedButton from 'material-ui/RaisedButton';


class PhotoList extends Component {
  constructor(){
    super()

		this.state = {
			lightboxIsOpen: false,
			currentImage: 0,
		};
    this.closeLightbox = this.closeLightbox.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
		this.gotoImage = this.gotoImage.bind(this);
		this.handleClickImage = this.handleClickImage.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
  }
	openLightbox (index, event) {
		event.preventDefault();
		this.setState({
			currentImage: index,
			lightboxIsOpen: true,
		});
	}
	closeLightbox () {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
	}
	gotoPrevious () {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	}
	gotoNext () {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}
	gotoImage (index) {
		this.setState({
			currentImage: index,
		});
	}
	handleClickImage () {
		if (this.state.currentImage === this.props.imgs.length - 1) return;

		this.gotoNext();
	}


  renderGallery(){
    let { imgs, admin, onClick, setTitle, titleImg } = this.props

    
    const gallery = imgs.map((img, i) => {
      if(admin){
        return (
          <div className="editorImg" key={i}>
            <a href={`localhost:3000/upload/${img}.jpg`}
              onClick={(e)=> this.openLightbox(i, e)}
            >
              <img src={`/upload/${img}.jpg`} alt="" className="photo"/>
            </a>
            <div className="control-btn"> 
              <RaisedButton label="封面照片" onClick={(e) => {
                e.preventDefault();
                setTitle(img)
              }} 
                disabled={( img === titleImg )}
              />
              <RaisedButton label="首頁輪播" primary={true} />
              <RaisedButton label="刪除" secondary={true} onClick={function(e){
                e.preventDefault();
                onClick(img)
              }}/>
            </div>
          </div>
        )
      } else {
        return (
          <a href={`localhost:3000/upload/${img}.jpg`}
            key={i}
            onClick={(e)=> this.openLightbox(i, e)}
          >
            <img src={`/upload/${img}.jpg`} alt="" className="photo"/>
          </a>
        )
      }
    })
    return gallery
  }

  render(){
    let { imgs } = this.props
    imgs = imgs.map( (img) => {
      return {src:`/upload/${img}.jpg`}
    })
    return (
      <div className="gallery">
        {this.renderGallery()}
        <Lightbox
          images={imgs}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          onClose={this.closeLightbox}
          onClickThumbnail={this.gotoImage}
          showThumbnails={true}
        />
      </div>
    )
  }
}

export default PhotoList