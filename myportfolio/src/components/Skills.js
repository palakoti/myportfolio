import React, { Image, Component, useState } from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel'
import CodeIcon from '@material-ui/icons/Code';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import StorageIcon from '@material-ui/icons/Storage';
import BuildIcon from '@material-ui/icons/Build';
import WebIcon from '@material-ui/icons/Web';


class Skills extends Component {

  render() {
    return (
        <div className="skills">
          <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i>
                   <CodeIcon style={{color: "#fff"}} fontSize="large"/></i>
                </span>
                <div className="desc">
                    <h3>Programming Languages</h3>
                    <ul>
                      <li>Java</li>
                      <li>C#</li>
                      <li>Python</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i><SettingsApplicationsIcon fontSize="large"/></i>
                </span>
                <div className="desc">
                    <h3>Microservices</h3>
                    <ul>
                      <li>JSON</li>
                      <li>Restful Web-services</li>
                      <li>Asynchronous & Synchronous API</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i><WebIcon fontSize="large"/></i>
                </span>
                <div className="desc">
                    <h3>Front End</h3> 
                    <ul>
                    
                      <li style={{display: 'inline', paddingRight: "1em"}}>CSS3</li>
                      <li style={{display: 'inline'}}>HTML5</li>
                      <li>Bootstrap</li>
                      <li style={{display: 'inline', paddingRight: "1em"}}>Redux</li>
                      <li style={{display: 'inline'}}>ReactJS</li>
                      </ul>
                     
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i><EmojiObjectsIcon fontSize="large"/></i>
                </span>
                <div className="desc">
                    <h3>Back End</h3>
                    <ul>
                      <li>Node.js</li>
                      <li>J2EE</li>
                      <li>Spring Framework</li>
                    </ul>
                     </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i><StorageIcon fontSize="large"/></i>
                </span>
                <div className="desc">
                    <h3>Database</h3>
                    <ul>
                      <li>SQL Server</li>
                      <li>MongoDB</li>
                      <li>Oracle</li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i><BuildIcon fontSize="large"/></i>
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <ul>
                      <li>Maven</li>
                      <li>Git Version-control</li>
                      <li>Jenkins</li>
                    </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        </div>
    );
    
  }
}

export default Skills;
// • Programming Languages: Java/J2EE, C#, Objective-C, Swift
// • Web Technologies: CSS3, HTML5, Bootstrap, jQuery, AngularJS, ReactJS, JavaScript, AJAX,
// ECMAScript (ES6, ES7)
// • Database: SQL Server
// • Operating System: Windows, OSX, Linux
// • Developer Tools: Visual Studio, Eclipse IDE, XCode
// • Other Tools: GitHub, JIRA, Jenkins, SonarQube, IBM tools (WebSphere Portal, MobileFirst App Server)