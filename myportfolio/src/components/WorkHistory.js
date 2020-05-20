import React, { Component } from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import '../App.css';

class WorkHistory extends Component {
 
  render() {
    return (
      <div>
      <section className="colorlib-experience" data-section="workHistory">
        <div className="colorlib-narrow-content">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInTop">
             
              <h1 className="colorlib-heading">Work History</h1>
            </div>
          <div className="row">
            <div className="col-md-12">
              <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-3" >
                      {/* <i className="icon-pen2" /> */}<AccessTimeIcon style={{fontSize: '25', verticalAlign: 'middle'}}/>
                    </div>
                    <div className="timeline-label">
                      <h2><a href="#">Graduate Assistant</a></h2>
                      <h4>IIRC (NIU), DeKalb, IL, USA.</h4>
                      <p>UI development using Html5, CSS3, Bootstrap, and jQuery in addition to working with SQL
Server, AJAX, and C# to develop and maintain data frameworks</p>
                    </div>
                  </div>
                </article>
                <article className="timeline-entry animate-box" style={{textAlign: "right"}} data-animate-effect="fadeInRight">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-4">
                      <AccessTimeIcon style={{fontSize: '25', verticalAlign: 'middle'}}/>
                    </div>
                    <div className="timeline-label">
                    <h2><a href="#">Sr Member Technical</a></h2>
                      <h4>CDK Global, Hyderabad, India.</h4>
                      <p>UI development using HTML5, CSS3, ReactJS for native react applications.</p>
 </div>
                  </div>
                </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-5">
                    <AccessTimeIcon style={{fontSize: '25', verticalAlign: 'middle'}}/>
                    </div>
                    <div className="timeline-label">
                    <h2><a href="#">Software Engineer</a></h2>
                      <h4>Prolifics Inc, Hyderabad, India.</h4>
                      <p>Design and development of web applications using spring boot, JSPs and jQuery besides middleware API
services.</p>
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
