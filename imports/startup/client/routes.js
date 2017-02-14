import React from 'react';
import { mount } from 'react-mounter';
import MainLayout from '../../ui/layouts/MainLayout/MainLayout.jsx'
import ImagessPlayer from '../../ui/components/ImagesPlayer/ImagePlayer.jsx'
import Footer from '../../ui/components/footer/footer.jsx'
import AlbumList from '../../ui/components/AlbumList/AlbumList.jsx'
import PhotoContain from '../../ui/components/PhotoList/PhotoContain.jsx'
import ContcatContain from '../../ui/components/contcat/ContcatContain.jsx'
import Root from '../../ui/components/root.jsx'
import Upload from '../../ui/components/uploader/upload.jsx'
import Albums from  '../../ui/api/album'
import Login from '../../ui/components/login/login.jsx'
import About from '../../ui/components/about/about.jsx'




FlowRouter.route('/', {
  action(){
    mount(Root, {
      content: (<ImagessPlayer />),
      footer: (<Footer />)
    })
  }
})

FlowRouter.route('/gallery',{
  action(){
    mount(Root, {
      content: (<AlbumList />),
      footer: (<Footer />)
    })
  }
})

FlowRouter.route('/gallery/:id',{
  action(params){
    mount(Root, {
    content: (<PhotoContain _id={params.id} />),
      footer: (<Footer />)
    })
  }
})

FlowRouter.route('/contcat',{
  action(){
    mount(Root, {
      content: (<ContcatContain />),
      footer: (<Footer />)
    })
  }
})

FlowRouter.route('/login',{
  action(){
    mount(Root, {
      content: (<Login />),
      footer: (<Footer />)
    })
  }
})


FlowRouter.route('/admin/upload',{
  action(){
    mount(Root, {
      content: (<Upload />),
      footer: (<Footer />)
    })
  }
})

FlowRouter.route('/about',{
  action(params){
    mount(Root, {
    content: (<About />),
    footer: (<Footer />)
    })
  }
})

FlowRouter.route('/admin/gallery/:id',{
  action(params){
    mount(Root, {
      content: (<PhotoContain _id={params.id} admin={true}  />),
      footer: (<Footer />)
    })
  }
})



