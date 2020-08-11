import React from 'react';
import './Contact.css';

const contact = (props) => {
    return (
        <div className="contact">
            <div className="email">
                <p className="title"><b>Email</b></p>
                <p>{props.email}</p>
                <p className="solicitor">No Solicitors. Buisiness/Job related emails only.</p>
            </div>

            <div className="phoneNumber">
                <p className="title"><b>Phone Number</b></p>
                <p>{props.phoneNumber}</p>
                <p className="solicitor">No Solicitors. Buisiness/Job related phone calls only.</p>
            </div>

            <div className="linkedIn">
                <p className="title"><b>LinkedIn</b></p>
                <a  style={{fontSize: '18px'}} href={props.linkedIn} target="_blank" rel="noopener noreferrer">https://linkedin.com/</a>
            </div>

            <div className="gitHub">
                <p className="title"><b>GitHub</b></p>
                <a  style={{fontSize: '18px'}} href={props.gitHub} target="_blank" rel="noopener noreferrer">{props.gitHub}</a>
            </div>

            <div className="hours">
                <p className="title"><b>Availability</b></p>
                <p style={{fontSize: '18px'}}>Weekdays between 9 am and 5 pm MST</p>
                <p style={{fontSize: '18px'}}>Weekends by appointment</p>
                <p style={{fontSize: '18px'}}>I prefer to set a date and time by email if possible.</p>
            </div>

        </div>
    );
}

export default contact;