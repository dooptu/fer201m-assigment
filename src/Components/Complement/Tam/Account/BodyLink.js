import React from 'react';
import { Card, Icon } from 'react-materialize';
import { NavLink } from 'react-router-dom'

function BodyLink() {
    return (
        <Card className="body-link">
            <ul>
                <div style={{ display: "flex", color:"white", fontSize:"20px", borderBottom:"1px solid #00000047", marginBottom:"20px", paddingBottom:"30px", width:"100%" }}>
                    <Icon left style={{fontSize:"40px"}}>code </Icon> User Account
                </div>
                <h6 style={{color:"#2dc98a", fontWeight:"bolder", textAlign:"left", marginBottom:"30px"}}>Account</h6>
                <li><NavLink to='/account'><Icon left>home</Icon> Account</NavLink></li>
                <li><NavLink to='/profilesetting'> <Icon left>home</Icon> Profile Setting</NavLink></li>
                
                <h6 style={{color:"#2dc98a", fontWeight:"bolder", textAlign:"left", marginBottom:"30px"}}>Setting</h6>
                <li><NavLink to='/allbooking'><Icon left>home</Icon> All Booking</NavLink></li>
                <li><NavLink to='/pastbooking'> <Icon left>home</Icon> Past Booking </NavLink></li>
                <li><NavLink to='/completedbooking'> <Icon left>home</Icon> Completed Booking </NavLink></li>
                <li><NavLink to='/cancelledbooking'> <Icon left>home</Icon> Cancelled Booking </NavLink></li>
            </ul>
        </Card>
    )
}

export default BodyLink;