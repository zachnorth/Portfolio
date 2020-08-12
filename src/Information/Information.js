import React from 'react';
import './Information.css';
import { Link } from 'react-router-dom';

const information = (props) => {

    return (
        <div className="titleInformation">
                <h1 className="myName">{props.myName}</h1>
                <table>
                    <tbody className="titleTable">
                        <tr>
                            <td><nav><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></nav></td>
                            <td><nav><Link to="/Resume" style={{ textDecoration: 'none' }}>Resumé</Link></nav></td>
                            <td><nav><Link to="/Projects" style={{ textDecoration: 'none' }}>Projects</Link></nav></td>
                            <td><nav><Link to="/About" style={{ textDecoration: 'none' }}>About</Link></nav></td>
                            <td><nav><Link to="/Contact" style={{ textDecoration: 'none' }}>Contact</Link></nav></td>
                        </tr>
                    </tbody>
                </table>
            </div>
    );
}

export default information;