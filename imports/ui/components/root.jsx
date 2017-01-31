import React from 'react'
import MainLayout from '../layouts/MainLayout/MainLayout'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



const Root = ({content, footer}) =>{
  return (
    <MuiThemeProvider>  
        <MainLayout content={content} footer={footer} />
    </MuiThemeProvider>
  )
}

export default Root