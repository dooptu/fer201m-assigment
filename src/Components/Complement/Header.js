import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Helmet from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Complements.css'



//-------------------------------------------------------------------------------

import { AppBar, Button, Container, FormControl, InputLabel, Link, MenuItem, Select, Toolbar, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import './Khoi/Header/Header_Khoi.css';
import { NavLink } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';








const Header = (props) => {
    const usenavigate = useNavigate();
    const [customerlist, listupdate] = useState(null);
    const [displayusername, displayusernameupdate] = useState('');
    console.log(props.data)
    const logout = () => {
        sessionStorage.removeItem('username')
        window.location.href = '/';
    };
    return (
        <AppBar position='fixed'>
            <Toolbar>
                <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box>
                        <img style={{ width: '250px' }} src='../assets/img/logo.png' alt='Logo'></img>
                    </Box>
                    <Box m={'auto'}>
                        <Stack direction={'row'} spacing={8} fontSize={15}>

                            <NavLink style={{ textDecoration: 'none' }} to="/"> <Link className='hoverLinkBottom' style={{ cursor: 'pointer' }}>Home</Link></NavLink>
                            <NavLink style={{ textDecoration: 'none' }} to="/reservation">
                                <Link className='hoverLinkBottom' style={{ cursor: 'pointer' }}>Reservation</Link>

                            </NavLink>
                            <NavLink style={{ textDecoration: 'none' }} to="/slots">
                                <Link className='hoverLinkBottom' style={{ cursor: 'pointer' }}>Slots</Link>

                            </NavLink>
                            <NavLink style={{ textDecoration: 'none' }} to="/price">
                                <Link className='hoverLinkBottom' style={{ cursor: 'pointer' }}>Price</Link>

                            </NavLink>
                            <NavLink style={{ textDecoration: 'none' }} to="/location">
                                <Link className='hoverLinkBottom' style={{ cursor: 'pointer' }}>Location</Link>

                            </NavLink>
                            <NavLink style={{ textDecoration: 'none' }} to="/more">
                                <Link className='hoverLinkBottom' style={{ cursor: 'pointer' }}>More</Link>
                            </NavLink>




                            {/* 
                            Change login to userIcon if login success
                            */}
                            <NavLink className='account_user' style={{ textDecoration: 'none' }} to="/login" >

                                {
                                    props.data === null || props.data === ''
                                        ? (<>
                                            {/* <AccountCircleIcon className="account_userIcon" sx={{ color: '#4e6058' }} /> */}
                                            <Link className='hoverLinkBottom' style={{ cursor: 'pointer' }}>Login</Link>

                                        </>

                                        )
                                        : (
                                            <>
                                                <FormControl className='account_userIcon' sx={{ m: 1, minWidth: 120 }} size="small">
                                                    <AccountCircleIcon className="account_userIcon" sx={{ color: '#4e6058' }} />

                                                    <Select
                                                        label="List"

                                                    >

                                                        <MenuItem>
                                                            <NavLink style={{ textDecoration: 'none', color: '#2DC98A' }} to="/profile">
                                                                Profile
                                                            </NavLink>
                                                        </MenuItem>
                                                        <MenuItem >
                                                            <NavLink style={{ textDecoration: 'none', color: '#2DC98A' }} onClick={logout}>
                                                                Log out
                                                            </NavLink>
                                                        </MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </>
                                        )
                                }
                            </NavLink>

                        </Stack>
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>

    );
}

export default Header;