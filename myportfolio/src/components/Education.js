import React, { Component } from 'react';
import '../App.css';
import '../style.css';
import SchoolIcon from '@material-ui/icons/School';

class Education extends Component {
    
  render() {
    return (
        <div>
 <section className="education" data-section="education">
					<div className="main-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">Education</span>
								<h2 className="heading animate-box"></h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6 animate-box" data-animate-effect="fadeInTop">
								<div className="college">
									<div className="desc">
										<div className="con first">
						          <div className="row">
							          <div className="col-md-12">
                          <h3><a>Northern Illinois University</a></h3>
                          <h4>Management Information Systems</h4>
                          <span>Master's <SchoolIcon style={{fontSize:"35px"}}/></span>
                          <span style={{fontSize:"13px"}}>2019 - Present</span>
                        </div>
                        {/* <div className="col-md-2">
                          <span><SchoolIcon style={{fontSize:"60px"}}/></span>
                        </div> */}
                      </div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 animate-box" data-animate-effect="fadeInBottom">
								<div className="college">
									<div className="desc">
										<div className="con second">
                    <div className="row">
							          <div className="col-md-12">
                        <h3><a>Jawaharlal Technological University</a></h3>
                      <h4>Computer Science</h4>
                      <span>Bachelor's <SchoolIcon style={{fontSize:"35px"}}/></span>
											<span style={{fontSize:"13px"}}>2010 - 2014</span>
                        </div>
                      </div>											
										</div>
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

export default Education;
