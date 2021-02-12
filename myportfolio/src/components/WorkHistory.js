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
                        <AccessTimeIcon style={{ fontSize: '25', verticalAlign: 'middle' }} />
                      </div>
                      <div className="emp-label">
                        <h4 style={{
                          position: "absolute",
                          paddingRight: "1em",
                          paddingTop: "1em",
                          top: "1",
                          right: "0"
                        }}>October 2019 - Present</h4>
                        <h2>IT Technical Associate</h2>
                        <h4>Illinois Interactive Report Cards - NIU</h4>
                        <h4>IL, USA.</h4>
                        <p>Working on responsive UI development using Html5, CSS3, Bootstrap, and jQuery in addition to working with SQL Server, AJAX, and C# to develop and maintain data framework for IPP application (Illinois Post-Secondary Profiles - http://illinoispostsecondaryprofiles.com) , a website through which interested stakeholders can access data provided by different state agencies related to the post-secondary experience in Illinois.</p>
                      </div>
                    </div>
                  </article>
                  <article className="emp-entry animate-box" style={{ textAlign: "right" }} data-animate-effect="fadeInRight">
                    <div className="emp-entry-inner">
                      <div className="emp-icon color-4">
                        <AccessTimeIcon style={{ fontSize: '25', verticalAlign: 'middle' }} />
                      </div>
                      <div className="emp-label">
                      <h4 style={{
                          position: "absolute",
                          paddingLeft: "1em",
                          paddingTop: "1em",
                          top: "1",
                          left: "0"
                        }}>Jan 2019 - July 2020</h4>
                        <h2>Sr Member Technical</h2>
                        <h4>CDK Global</h4>
                        <h4>INDIA</h4>
                        <p>Built responsive UI for native react applications like Service Booking, and Check-In using HTML5, CSS3, ReactJS for automobile service technicians to be able to access and update service status of the automobiles as primary and sole users.</p>
<p>Designed and implemented end to end testing for react applications unit test frameworks like Jest and Enzyme. </p>
<p>As a full stack developer, I was responsible for modelling and development of ASP .NET Web APIs to integrate server-side services in client applications.</p>

                      </div>
                    </div>
                  </article>
                  <article className="emp-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="emp-entry-inner">
                      <div className="emp-icon color-5">
                        <AccessTimeIcon style={{ fontSize: '25', verticalAlign: 'middle' }} />
                      </div>
                      <div className="emp-label">
                      <h4 style={{
                          position: "absolute",
                          paddingRight: "1em",
                          paddingTop: "1em",
                          top: "1",
                          right: "0"
                        }}>Nov 2014 - Jan 2019</h4>
                        <h2>Software Engineer</h2>
                        <h4>Prolifics Inc</h4>
                        <h4>INDIA</h4>
                        <p>Developed user interface of websites such as Sheryan using HTML/CSS, Bootstrap and jQuery (https://services.dha.gov.ae/sheryan)</p>
                        <p>As one of the technical staff members, I was involved in design and development of Java Web APIs to process data from DB for Ralph Lauren’s enterprise applications like Stock and Replenishment and Fedway using Java.</p>
                        <p>Being a certified IBM MobileFirst Developer v6.0 I was responsible for configuration of IBM MobileFirst Platform server to further integrate with client-side applications using server-side Java APIs.</p>
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
