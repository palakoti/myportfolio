import React, { Component } from 'react';
import '../App.css';
import '../style.css';
import CodeIcon from '@material-ui/icons/Code';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import StorageIcon from '@material-ui/icons/Storage';
import BuildIcon from '@material-ui/icons/Build';
import WebIcon from '@material-ui/icons/Web';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Skills extends Component {

  render() {
      
    return (
        <div>
          <section className="skills" id="skills" data-section="skills">
          
        <div className="main-content">
        
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Expertise</span>
                <h2 className="heading"></h2>
            </div>
            </div>
            <div className="skills-carousel">
            <Slider  dots={false}
        infinite={true}
        speed={700}
        slidesToShow={5}
        slidesToScroll={1}
        autoplay= {true}
  autoplaySpeed={700}>
        <div><img className="img-responsive" src="assets/java.png"
      />
        </div>
        <div><img className="img-responsive" src="assets/csharp.png"
      />
        </div>
        <div><img className="img-responsive" src="assets/python.png"
      />
        </div>
        <div><img className="img-responsive" src="assets/swift.png"
      />
        </div>
        <div><img className="img-responsive" src="assets/html.png"
      />
        </div>
        <div><img className="img-responsive" src="assets/css.png"
      />
        </div>
        <div><img className="img-responsive" src="assets/bootstrap.png"
      />
        </div>
        <div><img className="img-responsive" src="assets/javascript.png"
      />
        </div>
        <div><img className="img-responsive" src="assets/react.png"
      />
        </div>
        <div><img className="img-responsive" src="assets/angular.png"
      />
        </div>
        <div><img className="img-responsive" src="assets/nodejs.png"
      />
        </div>
        <div><img className="img-responsive" src="assets/db.png"
      />
        </div>
        <div><img className="img-responsive" src="assets/oracle.png"
      />
        </div>

        <div><img className="img-responsive" src="assets/sql.png"
      />
        </div>
        <div><img className="img-responsive" src="assets/mongodb.png"
      />
        </div>
        <div><img className="img-responsive" src="assets/oracle.png"
      />
        </div>

        <div><img className="img-responsive" src="assets/rest.png"
      />
        </div>
        <div><img className="img-responsive" src="assets/jenkins.png"
      />
        </div>
      </Slider>
      </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="sub-content color-3">
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
                <div className="sub-content color-4">
                <span className="icon">
                    <i><SettingsApplicationsIcon fontSize="large"/></i>
                </span>
                <div className="desc">
                    <h3>Microsub-content</h3>
                    <ul>
                      <li>JSON</li>
                      <li>Restful Web-sub-content</li>
                      <li>Async & Sync API</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="sub-content color-5">
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
                <div className="sub-content color-5">
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
                <div className="sub-content color-3">
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
                <div className="sub-content color-4">
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