import React, { Component } from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import '../App.css';
import '../style.css';
class WorkHistory extends Component {
 
  render() {
    return (
      <div>
      <section className="experience" id="experience" data-section="experience" name="experience">
        <div className="main-content">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInTop">
             
              <span className="heading-meta">Employment History</span>
								<h2 className="heading animate-box"></h2>
            </div>
          <div className="row">
            <div className="col-md-12">
              <div className="emp-centered">
              <article className="emp-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="emp-entry-inner">
                    <div className="emp-icon color-3" >
                      {/* <i className="icon-pen2" /> */}<AccessTimeIcon style={{fontSize: '25', verticalAlign: 'middle'}}/>
                    </div>
                    <div className="emp-label">
                      <h2>IT Technical Associate</h2>
                      <h4 style={{textAlign: "right"}}>May 2020 - Present</h4>
                      <h4>Report Cards (NIU)</h4>
                      <h4>DeKalb, IL, USA.</h4>
                      <p>Front-end development using Html5, CSS3, Bootstrap | Develop and Maintain data frameworks using C#</p>
                    </div>
                  </div>
                </article>
                <article className="emp-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="emp-entry-inner">
                    <div className="emp-icon color-3" >
                      <AccessTimeIcon style={{fontSize: '25', verticalAlign: 'middle'}}/>
                    </div>
                    <div className="emp-label">

<h4 style={{ position:"absolute",
paddingRight: "1em",
paddingTop: "1em",
   top:"1",
   right:"0"}}>May 2020 - August 2020</h4>
                      <h2>IT Technical Associate - Intern</h2>
                      <h4>Illinois Interactive Report Cards - NIU</h4>
                      <h4>DeKalb, IL, USA.</h4>
                      <p>Application Interface Development and Data Integration using Html5, CSS3, Bootstrap, XSL | Develop and Maintain data frameworks using C#</p>
                    </div>
                  </div>
                </article>
                <article className="emp-entry animate-box" style={{textAlign: "right"}} data-animate-effect="fadeInRight">
                  <div className="emp-entry-inner">
                    <div className="emp-icon color-4">
                      <AccessTimeIcon style={{fontSize: '25', verticalAlign: 'middle'}}/>
                    </div>
                    <div className="emp-label">
                    <h2>Sr Member Technical</h2>
                      <h4 style={{textAlign: "right"}}>Jan 2019 - July 2020</h4>
                      <h4>CDK Global</h4>
                      <h4>Hyderabad, INDIA.</h4>
                      <p>Design and Development of end to end react applications and API Connectors using .NET C#</p>
                    </div>
                  </div>
                </article>
                <article className="emp-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="emp-entry-inner">
                    <div className="emp-icon color-5">
                    <AccessTimeIcon style={{fontSize: '25', verticalAlign: 'middle'}}/>
                    </div>
                    <div className="emp-label">
                    <h2>Software Engineer</h2>
                      <h4 style={{textAlign: "right"}}>Nov 2014 - Jan 2019</h4>
                      <h4>Prolifics Inc</h4>
                      <h4>Hyderabad, INDIA.</h4>
                      <p>Design and development of data driven web applications and middleware API services using JAVA/J2EE</p>
                     </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
    
  }
}

export default WorkHistory;
