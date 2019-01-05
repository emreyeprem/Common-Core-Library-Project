import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Filter from './Filter'
import HomePage from './HomePage'
// ------------- CSS -------------
import '../assets/bootstrap/css/bootstrap.min.css'
import '../assets/fonts/font-awesome.min.css'
import '../assets/css/Card-Group-Classic.css'
import '../assets/css/dh-card-image-left-dark.css'
import '../assets/css/trelyco-login-vertical-horizontal-1.css'
import '../assets/css/trelyco-login-vertical-horizontal.css'



class BaseLayout extends Component{
  constructor(props){
    super(props)
  }

  render(){

    return (

     <div id="page-top">
     <Header/>
     {this.props.children}
     <Footer/>
     </div>



    )
  }
}










export default withRouter(BaseLayout)
