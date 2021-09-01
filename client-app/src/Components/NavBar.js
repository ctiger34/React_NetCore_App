import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import {Icon, Menu} from 'semantic-ui-react'
import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router-dom';






  const NavBar = () => {
 
  

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
            
        
            <Menu.Item floated="right" as={NavLink} to="/" style={{color:"yellow"}} header> <Icon name="home" size="huge" /> </Menu.Item>

            
            <Menu.Item style={{margin: '5px', color:"white"}} as={NavLink} exact to="/home"> <h1>Home</h1> </Menu.Item>
            <Menu.Item style={{margin: '5px', color:"white"}} as={NavLink} to="/books"> <h1>Books</h1> </Menu.Item>
            <Menu.Item style={{margin: '5px', color:"white" }}> <h1>Category</h1> </Menu.Item>
            
            
        </Toolbar>
      </AppBar>
      
              




       
    </React.Fragment>
  );
}

export default observer(NavBar);