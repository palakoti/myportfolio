import React, { Image, Component, useState } from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel'


class Skills extends Component {

 SkillsCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    }
return(
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>

<Carousel.Item>
    <Carousel.Caption>
      <h3>Languages</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Carousel.Caption>
      <h3>Web Technologies</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Carousel.Caption>
      <h3>Developer Tools</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
);
};


  render() {
    return (
        <div className="skills">
            
<this.SkillsCarousel/>
        </div>
    );
    
  }
}

export default Skills;
// • Programming Languages: Java/J2EE, C#, Objective-C, Swift
// • Web Technologies: CSS3, HTML5, Bootstrap, jQuery, AngularJS, ReactJS, JavaScript, AJAX,
// ECMAScript (ES6, ES7)
// • Database: SQL Server
// • Operating System: Windows, OSX, Linux
// • Developer Tools: Visual Studio, Eclipse IDE, XCode
// • Other Tools: GitHub, JIRA, Jenkins, SonarQube, IBM tools (WebSphere Portal, MobileFirst App Server)