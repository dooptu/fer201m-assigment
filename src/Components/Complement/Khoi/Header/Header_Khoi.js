import { AppBar, Button, Container, Link, Toolbar, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import './Header_Khoi.css';
import { NavLink } from 'react-router-dom';



export default function Header() {
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
                            <NavLink style={{ textDecoration: 'none' }} to="/login">
                                <Link className='hoverLinkBottom' style={{ cursor: 'pointer' }}>Login</Link>

                            </NavLink>
                        </Stack>
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>





    );
}