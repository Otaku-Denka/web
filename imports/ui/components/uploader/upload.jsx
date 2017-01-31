import React, { Component } from 'react';
import { Images } from '../../api/file.js'
import { Albums } from '../../api/album.js' 
import UploadList from './uploadList'
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import CircularProgress from 'material-ui/CircularProgress';
import Option from './option'




export default class Upload extends Component {
  constructor(props){
    super(props);
    this.state = {
      category:"",
      loading: false,
      files:[]
    }
  }

  uploadFile(e){
    e.preventDefault();
    let title = this.refs.title.input.value
    let date = this.refs.date.state.date
    let summary = this.refs.summary.getValue()
    const category = this.refs.category.state.selectdCate
    const that = this;
    let files = this.state.files
    let count = files.length
    let photoList = []
    
    if(files && files[0]){
      for (let i=0,l=files.length; i<l; i++){
        var Upload = Images.insert({
          file: files[i],
          streams: 'dynamic',
          chunkSize: 'dynamic'
        },false)

        Upload.on('start',function(fileObj){
          that.setState({
            loading: true
          })
          
        })
        Upload.on('end', function(err, fileObj){
          if(err){
            console.log(err)
          } else {
            count --
            photoList.push(fileObj._id)
            if( count == 0){
              that.setState({
                loading: false
              })
              Albums.insert({
                title,
                date,
                summary,
                category,
                photo: photoList,
                titleImg: photoList[0],
                createAt: new Date()
              })
              title ="";
              date ="";
              summary = "";
              that.setState=({
                file:[]
              })
              FlowRouter.go('/gallery')
            }
          }          
        })
        Upload.start()
      }
    }
  }

  handleChange(e){
    e.preventDefault()
    let that = this;
    const files = e.target.files
    that.setState({
      files: [...that.state.files, ...files]
    })
  }

  deleteImg(index){
    const files = this.state.files
    var newDate = files.slice()
    newDate.splice(index, 1)
    this.setState({
      files: newDate
    })
  }

  handleClick(e){
    e.preventDefault();
    const title = this.refs.title.input.value
    const date = this.refs.date.state.date
    const summary = this.state.summary
    const category = this.refs.category.state.selectCate

    console.log({
      title,
      date,
      summary
    })
    console.log(category)
  }

  render(){
    return (
      <div className="admin-contain">
        <form>
          Select a file<input type="file" 
          multiple  
          ref="file" 
          onChange={this.handleChange.bind(this)}
        />

          <input type="button" value="Upload" onClick={this.uploadFile.bind(this)} />
        </form>

        <DatePicker hintText="日期" mode="landscape" ref="date"/>

        <TextField
          floatingLabelText="請輸入標題"
          ref="title"
        />

        <Option category={this.state.category}
          ref="category"
         />
        <br />

        <TextField
          hintText="相簿介紹"
          fullWidth={true}
          multiLine={true}
          ref="summary"
        />
        { (this.state.loading ? <CircularProgress /> : "")}
        <UploadList imgs={this.state.files} deleteImg = {this.deleteImg.bind(this)}/>
      </div>
    )
  }
}

