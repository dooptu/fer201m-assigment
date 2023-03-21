import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Zone.css';
import { url_api } from "../../API/api";
import { faCarRear, faRoad, faExit, faBicycle, faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ZoneA(){
    const [shells, setShells] = useState([]);
    const [shellsR, setShellsR] = useState([]);
    useEffect(() =>{
        fetch(url_api + '/present_slot/findAll/A') 
        .then(response => response.json())
        .then((data) => {
            setShells(data)
            // console.log(data)
        })
        .catch(error => console.error(error));
    }, []);
    const residentSlot = shells.filter(slot => slot.id_slot.startsWith('R'));
    const customerSlot = shells.filter(slot => slot.id_slot.startsWith('C'));
    return (
        <div>
            <form onSubmit={'handleSubmit'}>
                <div className="zone-detail">
                    <p >
                        <h5 >ZONE A</h5>
                        <Link  to={'/ZoneDetail/B'}>
                            <h5>ZONE B</h5>
                        </Link>
                        <Link  to={'/ZoneDetail/C'}>
                            <h5>ZONE C</h5>
                        </Link></p>
                    <p>
                        <h5>DESCRIPTION</h5>
                        <span>P1 is the nearest zone to the terminal (100m distance).</span>
                        <br />
                        <span>Maximum parking time: 4 hours</span>
                    </p>
                    <p>
                        <h5>SPECIFICATIONS</h5>
                        <span>Maximum parking time: 4 hourss</span>
                    </p>
                    <p >
                        <h5>AVAILABILITY</h5>
                    </p>
                    <div class="table-responsive  align-items-center justify-content-center">
                        <div>Resident Area</div>
                        <table class="table border" >
                            <tbody>
                                <tr class="border">
                                    {residentSlot.slice(0, 10).map(shell => (
                                        <td className="border" key={shell.id} style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>
                                            <FontAwesomeIcon style={{ fontSize: '16px', paddingRight: '30px' }} icon={faCarRear}></FontAwesomeIcon>
                                            {shell.id_slot}
                                        </td>
                                    ))}
                                </tr>
                                <tr class="border">
                                    {residentSlot.slice(10, 20).map(shell => (
                                        <td className="border" key={shell.id} style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>
                                            <FontAwesomeIcon style={{ fontSize: '16px', paddingRight: '30px' }} icon={faBicycle}></FontAwesomeIcon>
                                            {shell.id_slot}
                                        </td>
                                    ))}
                                </tr>
                                <tr class="border">
                                    {residentSlot.slice(20, 30).map(shell => (
                                        <td className="border" key={shell.id} style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>
                                            <FontAwesomeIcon style={{ fontSize: '16px', paddingRight: '30px' }} icon={faMotorcycle}></FontAwesomeIcon>
                                            {shell.id_slot}
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                        <div>Customer Area</div>
                        <table class="table border" style={{ boxShadow: 'rgba(0, 0, 0, 0.14) 0px 3px 8px' }}>
                            <tbody>
                                <tr class="border">
                                    {customerSlot.slice(0, 10).map(shell => (
                                        <td className="border" key={shell.id} style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>
                                            <FontAwesomeIcon style={{ fontSize: '16px', paddingRight: '30px' }} icon={faCarRear}></FontAwesomeIcon>
                                            {shell.id_slot}
                                        </td>
                                    ))}
                                </tr>
                                <tr class="border">
                                    {customerSlot.slice(10, 20).map(shell => (
                                        <td className="border" key={shell.id} style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>
                                            <FontAwesomeIcon style={{ fontSize: '16px', paddingRight: '30px' }} icon={faBicycle}></FontAwesomeIcon>
                                            {shell.id_slot}
                                        </td>
                                    ))}
                                </tr>
                                <tr class="border">
                                    {customerSlot.slice(20, 30).map(shell => (
                                        <td className="border" key={shell.id} style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>
                                            <FontAwesomeIcon style={{ fontSize: '16px', paddingRight: '30px' }} icon={faMotorcycle}></FontAwesomeIcon>
                                            {shell.id_slot}
                                        </td>
                                    ))}
                                </tr>
                                <tr class="border">
                                    {customerSlot.slice(30, 40).map(shell => (
                                        <td className="border" key={shell.id} style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>
                                            <FontAwesomeIcon style={{ fontSize: '16px', paddingRight: '30px' }} icon={faMotorcycle}></FontAwesomeIcon>
                                            {shell.id_slot}
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <button  type="submit">Book now</button>
                </div>
            </form>
        </div>
    );
}
export default ZoneA;