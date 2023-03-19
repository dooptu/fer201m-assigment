import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import { Container, Card, TextInput, Button, Icon } from 'react-materialize'
import BodyLink from './BodyLink'
import { NavLink } from "react-router-dom";

// const EMAIL_CHECK = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
// const PHONE_CHECK = /^[0-9]{10,12}$/;

function ProfileSetting() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    // const [selectedFile, setSelectedFile] = useState(null)

    // const handleFileChange = (event) => {
    //     setSelectedFile(event.target.files[0]);
    // }
    const validateChecking = () => {
        let result = true;
        if (firstName === '' || firstName === null) {
            result = false;
            toast.error('Please Enter Username');
        }
        if (lastName === '' || lastName === null) {
            result = false;
            toast.error('Please Enter Password');
        }
        if (email === '' || email === null) {
            result = false;
            toast.error('Please Enter Email Address');
        }
        if (phone === '' || phone === null) {
            result = false;
            toast.error('Please Enter Phone Number');
        } else
            return result;
    }
    const handleSubmit = (event) => {
        // const formData = new FormData();
        // formData.append('image', selectedFile);
        event.preventDefault();
        const userId = 1; //  đang bị fix cứng nè :)))
        const obj = { firstName, lastName, email, phone };
        console.log(obj);
        if (validateChecking()) {
            fetch(`http://localhost:3000/account/${userId}`, {
                method: 'PUT',
                headers: {
                    "Access-Control-Allow-Origin": 'http://localhost:3000/account',
                    "Accept": "*/*",
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                    "Cache-Control": "no-cache",
                },
                body: JSON.stringify(obj),
                mode: 'cors'
            }).then((res) => {
                console.log(obj)
                sessionStorage.setItem("obj", JSON.stringify(obj));
                window.location.href = '/account'
                toast.success('Successfully')
                console.log(res);
            }).catch((err) => {
                toast.error(err.message)
            });
        };
    }
    return (
        <div>
            <div style={{ display: "flex"}}>
                <BodyLink />
                <Container className="profile-setting">
                    <div style={{ borderBottom: "1px solid black", display: "flex", marginTop: "5%" }}>

                        <Icon style={{ marginLeft: "7%" }}>manage_accounts</Icon>
                        <NavLink className='logo' to='/login' style={{ color: "black", marginLeft: "75%" }}><Icon left>home</Icon> Log out </NavLink>

                    </div>
                    <Card style={{ marginTop: "5%" }}>
                        <h3 style={{ textAlign: "center", marginTop: "5%" }}>Changing Information</h3>
                        <form onSubmit={handleSubmit} style={{ marginLeft: "5%", marginRight: "5%", marginTop: "5%" }}>
                            <TextInput
                                id="TextInput-32"
                                label="First Name"
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <TextInput
                                id="TextInput-33"
                                label="Last Name"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <TextInput
                                email
                                id="TextInput-54"
                                label="Email"
                                validate
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextInput
                                id="TextInput-35"
                                label="Phone Number"
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            {/* <TextInput
                                id="TextInput-26"
                                label="File"
                                type="file"
                                onChange={handleFileChange}
                                // accept="image/*" multiple
                            /> */}
                            <div>
                                <Button type="submit" style={{ backgroundColor: "#2DC98A", color: "white", border: "none", borderRadius: "10%" }}>Saves</Button>
                                <ToastContainer />
                            </div>
                        </form>
                    </Card>
                </Container>
            </div>
        </div>
    )
}

export default ProfileSetting;