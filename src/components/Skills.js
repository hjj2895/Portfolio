import React from 'react';
import './Skills.css';
import Javascript from '../assets/javascript.jpeg';
import HTML from '../assets/html.jpeg';
import CSS from '../assets/css.jpeg';
import Bootstrap from '../assets/bootstrap.avif';
import Reactlogo from '../assets/react.jpeg';
import Ruby from '../assets/ruby.jpeg';
import Rails from '../assets/ror.jpeg';
import RSpec from '../assets/rspec.png';
import VSCode from '../assets/vscode.jpeg';
import Github from '../assets/GitHub-Mark.png';
import Postman from '../assets/postman.jpeg';
import Jest from '../assets/jest.avif';

const Skills = () => {
  return (
    <div className='skills-container'>
        <div className='moving'>
        <div className='skills-header'>
            <h1>Skills</h1>
            <p>Languages, Frameworks, and Tools</p>
        </div>
        </div>
        <div className='skills-table'>
            <table className='skills-list'>
                <thead>
                    <tr>
                           <td><img src={Javascript} alt="js" height="100px" width="100px"/>
                            <h4>Javascript</h4></td>
                            <td><img src={HTML} alt="html" height="100px" width="100px"/>
                            <h4>HTML</h4></td>
                            <td><img src={CSS} alt="css" height="100px" width="100px"/>
                            <h4>CSS</h4></td>
                            <td><img src={Bootstrap} alt="bootstrap" height="100px" width="100px"/>
                            <h4>Bootstrap</h4></td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                            <td><img src={Reactlogo} alt="react" height="100px" width="100px"/>
                            <h4>React</h4></td>
                            <td><img src={Ruby} alt="ruby" height="100px" width="100px"/>
                            <h4>Ruby</h4></td>
                            <td><img src={Rails} alt="rails" height="100px" width="100px"/>
                            <h4>Rails</h4></td>
                            <td><img src={RSpec} alt="rspec" height="100px" width="100px"/>
                            <h4>RSpec</h4></td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                            <td><img src={Github} alt="github" height="100px" width="100px"/>
                            <h4>Github</h4></td>
                            <td><img src={Postman} alt="postman" height="100px" width="100px"/>
                            <h4>Postman</h4></td>
                            <td><img src={Jest} alt="jest" height="100px" width="100px"/>
                            <h4>Jest</h4></td>
                            <td><img src={VSCode} alt="vscode" height="100px" width="100px"/>
                            <h4>VSCode</h4></td>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
  )
}

export default Skills