import React, { Component } from 'react';
import '../App.css';
import '../style.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import Facebook from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class Introduction extends Component {
    
  render() {
    return (
        <div>

<section id="intro" className="js-fullheight">

    <div className="flexslider js-fullheight">

    <ul className="nav-icons">
        <li style={{display: 'inline', paddingRight: '1rem'}}><a href="https://github.com/palakoti" target="_blank" rel="noopener noreferrer"><GitHub fontSize="large" style={{ color: '#fff', fontSize: 30 }}/></a></li>
                 
                 <li style={{display: 'inline', paddingRight: '1rem'}}><a href="https://www.linkedin.com/in/swetha-palakoti/" target="_blank" rel="noopener noreferrer"><LinkedInIcon style={{ color: '#fff', fontSize: 30 }}/></a></li>
                 <li style={{display: 'inline', paddingRight: '1rem'}}><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><Facebook fontSize="large" style={{ color: '#fff', fontSize: 30}}/></a></li>
                 <li style={{display: 'inline', paddingRight: '1rem'}}><a href="https://www.instagram.com/swethapalakoti/" target="_blank" rel="noopener noreferrer"><InstagramIcon fontSize="large" style={{ color: '#fff', fontSize: 30}}/></a></li>
                 <li style={{color: "#fff", fontSize: "16px"}}><a href="mailto:swethapalakoti@outlook.com">swethapalakoti@outlook.com</a></li>
                <li style={{color: "#fff"}}>+1 (312) 858-0111</li>
                
                </ul>
        <ul className="slides">
        <li>
            <div className="overlay"></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                        <div className="slider-text-inner js-fullheight">
                <div className="portfolio-img"/>
                                <div className="desc">
                <h1>Hi! <br/>I'm Swetha Palakoti</h1>
              </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div className="overlay"></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                        <div className="slider-text-inner">
                            <div className="desc" style={{paddingTop: "10em"}}>
                                <h1>I am a Developer</h1>
                            <div id="navbar">
                    {/* <a className="btn btn-learn" href="#skills" data-nav-section="skills">View Portfolio</a>     */}
                    
                <a href="assets/swethapalakoti.pdf" className="btn btn-learn">Download CV</a>                
                  </div>
                           
                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        </ul>
        
   </div>
   
</section>
<div className="message">
    <a className="btn btn-learn" href="#skills" data-nav-section="skills"><ExpandMoreIcon style={{fontSize: "60px"}}/></a></div>
  
        </div>
    );
    
  }
}

export default Introduction;
