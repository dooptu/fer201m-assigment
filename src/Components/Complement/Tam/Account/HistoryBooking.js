import React, { useState, useEffect } from 'react';
import { Container, Icon, Table } from 'react-materialize'
import { NavLink } from 'react-router-dom';
import BodyLink from './BodyLink'

function HistoryBooking() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/past')
            .then((response) => response.json())
            .then((bookingData) => {
                setHistory(bookingData);
                console.log(bookingData);
            })
    }, [])
    return (
        <div>
            <div style={{ display: "flex" }}>
                <BodyLink />
                <Container>
                    <div  style={{ borderBottom: "1px solid black", display: "flex", marginTop:"5%" }}>

                        <Icon style={{marginLeft:"7%"}}>manage_accounts</Icon>
                        <NavLink className='logo' to='/login' style={{color:"black", marginLeft:"75%"}}><Icon left>home</Icon> Log out </NavLink>

                    </div>
                    <Table striped style={{ marginTop: "5%" }} >
                        <thead>
                            <tr style={{ backgroundColor: "#263544", color: "white" }}>
                                <th data-field="id" style={{ textAlign: "center" }}>
                                    Start Date
                                </th>
                                <th data-field="name" style={{ textAlign: "center" }}>
                                    End Date
                                </th>
                                <th data-field="price" style={{ textAlign: "center" }}>
                                    Start Time
                                </th>
                                <th data-field="price" style={{ textAlign: "center" }}>
                                    End Time
                                </th>
                                <th data-field="price" style={{ textAlign: "center" }}>
                                    Vehicle Type
                                </th>
                                <th data-field="price" style={{ textAlign: "center" }}>
                                    Building
                                </th>
                                <th data-field="price" style={{ textAlign: "center" }}>
                                    Slot
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {history.map((booking) => (
                                <tr key={booking.id} style={{ borderBottom: "1px solid #00000047" }}>
                                    <td style={{ textAlign: "center" }}> {booking.startDate} </td>
                                    <td style={{ textAlign: "center" }}> {booking.endDate} </td>
                                    <td style={{ textAlign: "center" }}> {booking.startTime} </td>
                                    <td style={{ textAlign: "center" }}> {booking.endTime} </td>
                                    <td style={{ textAlign: "center" }}> {booking.type_Of_Vehicle} </td>
                                    <td style={{ textAlign: "center" }}> {booking.id_Building} </td>
                                    <td style={{ textAlign: "center" }}> {booking.id_C_Slot} </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
            </div>
        </div>
    )
}

export default HistoryBooking;