import React, { Component } from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import '../App.css';
import '../style.css';
class WorkHistory extends Component {
 
  render() {
    return (
      <div>
      <section className="experience" id="experience" data-section="experience">
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
                      <h2>Software Developer</h2>
                      <h4>IIRC (NIU), DeKalb, IL, USA.</h4>
                      <p>Front-end development using Html5, CSS3, Bootstrap | Develop and Maintain data frameworks usingAJAX and C#</p>
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
                      <h4>CDK Global, Hyderabad, India.</h4>
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
                      <h4>Prolifics Inc, Hyderabad, India.</h4>
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
