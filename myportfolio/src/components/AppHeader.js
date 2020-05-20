import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import '../style.css';

class AppHeader extends Component {
  render() {
    return (
          <div>
            <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
            <aside id="colorlib-aside" className="border js-fullheight">
              {/* <div className="text-center">
                <div className="author-img" style={{backgroundImage: 'url(assets/picture.JPEG)'}} />
                <h2 id="colorlib-logo">Swetha Palakoti</h2>
                {/* <p className="">Full Stack Web Developer</p> 
              </div> */}
              <nav id="colorlib-main-menu" role="navigation" className="navbar">
                <div id="navbar" className="collapse">
                  <ul>
                    {/* <li className="active"><a href="#home" data-nav-section="home">About</a></li> */}
                    <li><a href="#skills" data-nav-section="skills">Skills</a></li>
                    {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                    <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                    <li><a href="#workHistory" data-nav-section="workHistory">Work History</a></li>
                    <li><a href="#education" data-nav-section="education">Education</a></li>
                    <li><a href="#achievements" data-nav-section="achievements">Achievements</a></li>                    
                  </ul>
                </div>
              </nav>
              {/* <nav id="colorlib-main-menu">
                <ul style={{display: ''}}>
                <li style={{display: 'inline', paddingRight: '5px'}}><a href="000000000" target="_blank" rel="noopener noreferrer"><PhoneIcon style={{ color: '#67d876', fontSize: 30 }}/></a></li>
                 <li style={{display: 'inline', paddingRight: '5px'}}><a href="swethapalakoti@outlook.com" target="_blank" rel="noopener noreferrer"><MailOutlineIcon style={{ color: '#000ff', fontSize: 30 }}/></a></li>
                 <li style={{display: 'inline', paddingRight: '5px'}}><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><Facebook fontSize="large" style={{ color: '#3b5998', fontSize: 30}}/></a></li>
                 <li style={{display: 'inline', paddingRight: '5px'}}><a href="https://www.linkedin.com/in/swetha-palakoti/" target="_blank" rel="noopener noreferrer"><LinkedInIcon style={{ color: '#0077b5', fontSize: 30 }}/></a></li>
                 <li style={{display: 'inline', paddingRight: '0px'}}><a href="https://github.com/palakoti" target="_blank" rel="noopener noreferrer"><GitHub fontSize="large" style={{ color: '#000', fontSize: 30 }}/></a></li>
                </ul>
              </nav> */}
              {/* <div className="colorlib-footer"> */}
              {/* </div> */}
            </aside>
          </div>
    );
  }
}

export default AppHeader;
