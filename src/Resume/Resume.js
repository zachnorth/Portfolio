import React from 'react';
import './Resume.css';

const resume = (props) => {

    var compSciClasses = [];
    Object.keys(props.classes).forEach(function(key) {
        compSciClasses.push(props.classes[key]);
    });

    return (
        <div className="resume">
            <div className="summary">
                <p className="divTitle"><b style={{ fontSize: '20px' }}>Summary</b></p>
                <p style={{fontSize: '16px'}}>{props.summary}</p>
            </div>
            <div className="education">
                <p className="divTitle"><b style={{ fontSize: '20px' }}>Education</b></p>
                <p style={{fontSize: '16px'}}><b>{props.school}</b>, {props.location}</p>
                <p style={{fontSize: '16px'}}>{props.degree}</p>
                <p style={{fontSize: '16px'}}><b>{props.school1}</b>, {props.location1}</p>
                <p style={{fontSize: '16px'}}>{props.degree1}</p>
            </div>
            <div className="developedApplications">
                <p className="divTitle"><b style={{ fontSize: '20px' }}>Developed Applications</b></p>
                <ul>
                    <li style={{fontSize: '16px'}}><b>{props.app1title}</b> : {props.app1desc}</li>
                    <li style={{fontSize: '16px'}}><b>{props.app2title}</b> : {props.app2desc}</li>
                    <li style={{fontSize: '16px'}}><b>{props.app3title}</b> : {props.app3desc}</li>
                </ul>
            </div>
            <div className="additionalExperience">
                <p className="divTitle"><b style={{ fontSize: '20px' }}>Additional Experience</b></p>
                <p style={{fontSize: '18px'}}><b>{props.subject1}</b></p>
                <ul>
                    <li style={{fontSize: '16px'}}>{props.data1_1}</li>
                    <li style={{fontSize: '16px'}}>{props.data1_2}</li>
                </ul>
                <p style={{fontSize: '18px'}}><b>{props.subject2}</b></p>
                <ul>
                    <li style={{fontSize: '16px'}}>{props.data2_1}</li>
                    <li style={{fontSize: '16px'}}>{props.data2_2}</li>
                    <li style={{fontSize: '16px'}}>{props.data2_3}</li>
                </ul>
                <p style={{fontSize: '18px'}}><b>{props.subject3}</b></p>
                <ul>
                    <li style={{fontSize: '16px'}}>{props.data3_1}</li>
                    <li style={{fontSize: '16px'}}>{props.data3_2}</li>
                    <li style={{fontSize: '16px'}}>{props.data3_3}</li>
                </ul>
            </div>
            <div className="workExperience">
                <p className="divTitle"><b style={{ fontSize: '20px' }}>College Work Experience</b></p>

                <p style={{fontSize: '16px'}}><b style={{fontSize: '18px'}}>{props.job1}</b>, {props.description1} <span>&nbsp;&nbsp;</span> {props.date1}</p>
                <p style={{fontSize: '16px'}}><b style={{fontSize: '18px'}}>{props.job2}</b>, {props.description2} <span>&nbsp;&nbsp;</span> {props.date2}</p>
                <p style={{fontSize: '16px'}}><b style={{fontSize: '18px'}}>{props.job3}</b>, {props.description3} <span>&nbsp;&nbsp;</span> {props.date3}</p>
                <p style={{fontSize: '16px'}}><b style={{fontSize: '18px'}}>{props.job4}</b>, {props.description4} <span>&nbsp;&nbsp;</span> {props.date4}</p>
                <p style={{fontSize: '16px'}}><b style={{fontSize: '18px'}}>{props.job5}</b>, {props.description5} <span>&nbsp;&nbsp;</span> {props.date5}</p>
            </div>
            <div className="skills">
                <p className="divTitle"><b style={{ fontSize: '20px' }}>Skills</b></p>
                <p style={{fontSize: '16px'}}>{props.skills}</p>
            </div>
            <div className="classes">
                <h1 className="titles"><b>Class History</b></h1>
                <MyList classes={compSciClasses}/>
            </div>
        </div>
    );
}

const MyList = (props) => {
    return (
        <ul style={{ columns: '2' }}>{props.classes.map((item, i) => <MyListItem name={item} key={i} />)}</ul>
    );
}

const MyListItem = (props) => {
    return (
        <li>{props.name}</li>
    );
}

export default resume;