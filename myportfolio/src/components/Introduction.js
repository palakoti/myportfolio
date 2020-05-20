import React, { Image, Component } from 'react';
import '../App.css';
import '../style.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
import GitHub from '@material-ui/icons/GitHub';
import Facebook from '@material-ui/icons/Facebook';
import DownloadIcon from '@material-ui/icons/ArrowDownwardOutlined';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import InstagramIcon from '@material-ui/icons/Instagram';

class Introduction extends Component {
    
  render() {
    return (
        <div>

<section id="colorlib-hero" className="js-fullheight">

    <div className="flexslider js-fullheight">

    <ul className="navIcons">
        <li style={{display: 'inline', paddingRight: '1rem'}}><a href="https://github.com/palakoti" target="_blank" rel="noopener noreferrer"><GitHub fontSize="large" style={{ color: '#fff', fontSize: 30 }}/></a></li>
                 
                 <li style={{display: 'inline', paddingRight: '1rem'}}><a href="https://www.linkedin.com/in/swetha-palakoti/" target="_blank" rel="noopener noreferrer"><LinkedInIcon style={{ color: '#fff', fontSize: 30 }}/></a></li>
                 <li style={{display: 'inline', paddingRight: '1rem'}}><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><Facebook fontSize="large" style={{ color: '#fff', fontSize: 30}}/></a></li>
                 <li style={{display: 'inline', paddingRight: '1rem'}}><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><InstagramIcon fontSize="large" style={{ color: '#fff', fontSize: 30}}/></a></li>
                 <li style={{color: "#fff", fontSize: "16px"}}><a>swethapalakoti@outlook.com</a></li>
                <li style={{color: "#fff"}}>(312) 858-0111</li>
                <br/>
                <li>
    <p className="download"><a className="btn btn-learn">Download CV <DownloadIcon/></a></p></li>
                </ul>
        <ul className="slides">
        <li>
            <div className="overlay"></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                        <div className="slider-text-inner js-fullheight">
                <div className="author-img" style={{backgroundImage: 'url(assets/picture.JPEG)'}} />
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
                            <div className="desc">
                                <h1>I am <br/>a Developer</h1>
                                {/* <div id="navbar"> */}
                            <div id="navbar">
                    <a className="btn btn-learn" href="#workHistory" data-nav-section="workHistory">View Portfolio</a>                    
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
        </div>
    );
    
  }
}

export default Introduction;
