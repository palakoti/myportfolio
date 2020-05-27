
import React, { Component } from 'react';
import '../App.css';
import '../style.css';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import { Icon } from '@iconify/react';
import trophyIcon from '@iconify/icons-bi/trophy';
import roundSchool from '@iconify/icons-ic/round-school';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">    
        <ul>
          <li className="active">
            <a href="#skills" target="_blank" rel="noopener noreferrer"><EmojiObjectsIcon/>  Expertise</a>
          </li>
          <li><a href="#experience" data-nav-section="experience" target="_blank" rel="noopener noreferrer"><QueryBuilderIcon/>  Job History</a></li>
          <li><a href="#education" target="_blank" rel="noopener noreferrer"><Icon icon={roundSchool} />  Education</a></li>
          <li><a href="#ach" data-nav-section="ach" target="_blank" rel="noopener noreferrer"><Icon icon={trophyIcon} />  Achievements</a></li>
        </ul>
      </div>
    );    
  }
}

export default Navigation;
