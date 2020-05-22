import React, { Component } from 'react';
import '../App.css';
import '../style.css';

class Achievements extends Component {
    
  render() {
    return (
        <div className="">
				 <section className="ach" data-section="ach">
			<div className="main-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span className="heading-meta">Achievements</span>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="ach-entry">
							<div className="desc">
							<span><small>February, 2018 </small></span>
							<h4><a className="desc-one">Award of ‘Best Performer’</a></h4>
							<p>Awarded during first quarter 2018, by Systems Integration Head, Prolifics Inc.</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInBottom">
					<div className="ach-entry">
						<div className="desc">
							<span><small>May, 2016 </small></span>
							<h4><a className="desc-two">IBM Certification</a></h4>
							<p>IBM Certified MobileFirst Developer 2016.</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="ach-entry">
						<div className="desc">
							<span><small>March 2, 2020 </small></span>
							<h4><a className="desc-three">Featured in NIU Today</a></h4>
							<p class="link">Featured in <a href="https://www.niutoday.info/2020/03/02/meet-the-team-of-niu-women-behind-illinois-new-cutting-edge-educational-data-application/?fbclid=IwAR3HzJsh215ubiH5LXLBIVDl7HOwWbTDDYq-XNJawO6EbYAJO7X9TQXEXq8">NIU Today</a> as part of women team in Illinois Interactive Report Cards at Northern Illinois University</p>
						</div>
					</div>
					</div>
				</div>
			</div>
			</section>
			<p className="finalText">I hereby confirm that above data is accurate to the best of my knowledge.</p>
        </div>
    );
    
  }
}

export default Achievements;
