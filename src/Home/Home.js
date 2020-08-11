import React from 'react';
import './Home.css';
import ProfilePic from './LlamaProfilePic.jpg';
import GitHub from './GitHub-Mark-32px.png';
import LinkedIn from './LinkedInLogo.png';

const home = (props) => {
    return (
        <div>
            <img className="profilePic" src={ProfilePic} alt="not found" />
            <p><b>University of Colorado Boulder Graduate</b></p>
            <p><b>Bachelors of Arts, Computer Science</b></p>
            <p>
                <a href="https://github.com/zachnorth" target="_blank" rel="noopener noreferrer"><img className="logoG" src={GitHub} alt="not found" /></a>
                <a href="https://www.linkedin.com/in/zachary-n-3b6a68155/" target="_blank" rel="noopener noreferrer"><img  className="logoL"  src={LinkedIn} alt="not found" /></a>
            </p>
        </div>
    );
}

export default home;