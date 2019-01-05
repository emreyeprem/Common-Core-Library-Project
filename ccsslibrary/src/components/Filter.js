import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu';

import 'rc-menu/assets/index.css';
import axios from 'axios'
import '../assets/css/filter.css'


class Filter extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }




  render(){

    return (

          <div className="filter">
          <div className="filterdropdown">
          <Menu>
          <SubMenu title={'Grade 1'}>
          <SubMenu title={'Math'} ><MenuItem>Standard</MenuItem></SubMenu>
          <Divider/>
          <SubMenu title={'ELA'} ><MenuItem>Standard 2</MenuItem></SubMenu>
          </SubMenu>
          <Divider/>
          <SubMenu title={'Grade 2'}>
          <SubMenu title={'Math'} ><MenuItem>Standard</MenuItem></SubMenu>
          <Divider/>
          <SubMenu title={'ELA'} ><MenuItem>Standard 2</MenuItem></SubMenu>
          </SubMenu>
          <Divider/>
          <SubMenu title={'Grade 3'}>
          <SubMenu title={'Math'} ><MenuItem>Standard</MenuItem></SubMenu>
          <Divider/>
          <SubMenu title={'ELA'} ><MenuItem>Standard 2</MenuItem></SubMenu>
          </SubMenu>
          <Divider/>
          <SubMenu title={'Grade 4'}>
          <SubMenu title={'Math'} ><MenuItem>Standard</MenuItem></SubMenu>
          <Divider/>
          <SubMenu title={'ELA'} ><MenuItem>Standard 2</MenuItem></SubMenu>
          </SubMenu>
          <Divider/>
          <SubMenu title={'Grade 5'}>
          <SubMenu title={'Math'} ><MenuItem>Standard</MenuItem></SubMenu>
          <Divider/>
          <SubMenu title={'ELA'} ><MenuItem>Standard 2</MenuItem></SubMenu>
          </SubMenu>
          <Divider/>
          <SubMenu title={'Grade 6'}>
          <SubMenu title={'Math'} ><MenuItem>Standard</MenuItem></SubMenu>
          <Divider/>
          <SubMenu title={'ELA'} ><MenuItem>Standard 2</MenuItem></SubMenu>
          </SubMenu>
          <Divider/>
          <SubMenu title={'Grade 7'}>
          <SubMenu title={'Math'} ><MenuItem>Standard</MenuItem></SubMenu>
          <Divider/>
          <SubMenu title={'ELA'} ><MenuItem>Standard 2</MenuItem></SubMenu>
          </SubMenu>
          <Divider/>
          <SubMenu title={'Grade 8'}>
          <SubMenu title={'Math'} ><MenuItem>Standard</MenuItem></SubMenu>
          <Divider/>
          <SubMenu title={'ELA'} ><MenuItem>Standard 2</MenuItem></SubMenu>
          </SubMenu>
          <Divider/>
          <SubMenu title={'Grade 9'}>
          <SubMenu title={'Math'} ><MenuItem>Standard</MenuItem></SubMenu>
          <Divider/>
          <SubMenu title={'ELA'} ><MenuItem>Standard 2</MenuItem></SubMenu>
          </SubMenu>
          <Divider/>
          <SubMenu title={'Grade 10'}>
          <SubMenu title={'Math'} ><MenuItem>Standard</MenuItem></SubMenu>
          <Divider/>
          <SubMenu title={'ELA'} ><MenuItem>Standard 2</MenuItem></SubMenu>
          </SubMenu>
          <Divider/>
          <SubMenu title={'Grade 11'}>
          <SubMenu title={'Math'} ><MenuItem>Standard</MenuItem></SubMenu>
          <Divider/>
          <SubMenu title={'ELA'} ><MenuItem>Standard 2</MenuItem></SubMenu>
          </SubMenu>
          <Divider/>
            <SubMenu title={'Grade 12'}>
            <SubMenu title={'Math'} ><MenuItem>Standard</MenuItem></SubMenu>
            <Divider/>
            <SubMenu title={'ELA'} ><MenuItem>Standard 2</MenuItem></SubMenu>
            </SubMenu>


          </Menu>
       </div>
      </div>
    )
  }
}


// map global state to local props
const mapStateToProps = (state) => {
  return {
    //ctr: state.counter // this.props.ctr

  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    // this.props.onIncrementCounter

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Filter)
