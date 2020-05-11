import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import logo from './logo.svg';
import './App.css';
import Card from '@material-ui/core/Card';
import { Nav, NavItem } from 'react-bootstrap';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class AppHeader extends Component {
  render() {
    return (
        <div className="App-header">
            <Navbar fixed="top">
                    <Nav.Link href="mailto:swethapalakoti@outlook.com" style={{color: 'white'}}><MailOutlineIcon/></Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/swetha-palakoti/" style={{color: 'white'}}><LinkedInIcon/></Nav.Link>
            </Navbar>
        </div>
    );
  }
}

export default AppHeader;
