import React from 'react';
import './Project.css';


const project = (props) => {

    return (
        <div className="project">
            <p onClick={props.modal} className="title"><b>{props.title}</b></p>
            <p style={{fontSize: '16px'}}>{props.description}</p>
            <p style={{fontSize: '16px'}}><b>Languages/SDK:</b> {props.sdk}</p>
            <p style={{fontSize: '16px'}}><b>Back-End:</b> {props.backend}</p>
            <a style={{fontSize: '16px'}} className="projectRef" href={props.href} target="_blank" rel="noopener noreferrer">{props.href}</a>
        </div>
    );
}

export default project;