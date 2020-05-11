import React, { Image, Component } from 'react';
import './App.css';
import Card, { ListItem } from "@material-ui/core"
import FadeIn from 'react-fade-in';
import Table from 'react-bootstrap/Table'
import GetAppSharpIcon from '@material-ui/icons/GetAppSharp';

class Introduction extends Component {
    
  render() {
    return (
        <div className="intro">

        <FadeIn transitionDuration='500' delay='60'>
            <Table borderless style={{color: '#CBD1D1'}}>
                <tbody>
    <tr>
      <td align="left">
        <ul>
        <li><h2><i>Swetha Palakoti</i></h2></li>
          <li><br></br></li>
          <li><h4>Full Stack Developer</h4></li>
          <li><br></br></li>
          <li>I write simple lines of code for the applications to talk in different languages</li>
          <li><br></br></li>
          <li align="right"><a href="">Download my CV<GetAppSharpIcon></GetAppSharpIcon></a></li>
        </ul>
        </td>
    </tr>
    </tbody>
            </Table>
        </FadeIn>
        </div>
    );
    
  }
}

export default Introduction;
