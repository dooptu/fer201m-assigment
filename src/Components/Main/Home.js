import React, { useEffect, useState, } from "react";
import { Link, NavLink } from "react-router-dom";
import Helmet from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import Header from "../Complement/Header";
import Footer from "../Complement/Footer";
import Slider from "../Complement/Slider";
import './Main.css'
import { ThemeProvider } from "@mui/material";
import { customeTheme } from "../Complement/Khoi/customTheme_Khoi";
import { Box, Button, Card, CardActions, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import WatchLaterIcon from '@mui/icons-material/WatchLater';




const URL_WARNING_C = '';
const URL_WARNING_R = '';

const Home = () => {
    const [zone, setZone] = useState('A');

    const [username, setUsername] = useState(sessionStorage.getItem('username'));
    const [id, setId] = useState(sessionStorage.getItem('id'));
    const [role, setRole] = useState(sessionStorage.getItem('role'));
    const [URL_WARNING, set_URL_WARNING] = useState('')
    const [obj, setObj] = useState([]);

    const [showPopupWarning, setShowPopupWarning] = useState(false);
    const [open, setOpen] = useState();

    useEffect(() => {
        setZone(zone);

    }, [zone]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        sessionStorage.setItem("zone", zone);

        // window.location.href = '/Reservation';
    }

    return (


        <HelmetProvider>
            <Helmet>
                <title>EParking</title>
            </Helmet>
            <Header data={username}></Header>
            <Slider></Slider>

            {/* -----------------------------zone-area-homepage----------------------- */}
            <form onSubmit={handleSubmit}>

                <Box sx={{ mt: '50px' }}>
                    <Container>
                        <Grid container spacing={8}>
                            <Grid item xs={4}>
                                <Card >
                                    <CardContent>
                                        <Typography position={'absolute'}>
                                            2.5$ / Day
                                        </Typography>
                                        <Typography fontWeight={'bold'} variant="h6">
                                            Zone A
                                        </Typography>
                                        <Typography gutterBottom mt={2.3} variant="body1" color='black'>
                                            Content
                                        </Typography>
                                        <Typography gutterBottom variant="body2" color='black'>
                                            <WatchLaterIcon /> Max, Duration: 4 hours
                                        </Typography>

                                    </CardContent>
                                    <Stack direction={'row'}>
                                        <Grid container>
                                            <Grid item xs={4.5}>
                                                <NavLink to={'/ZoneDetail/A'}>
                                                    <CardActions>
                                                        <Button fullWidth size="small">Details</Button>
                                                    </CardActions>
                                                </NavLink>
                                            </Grid>
                                            <Grid item xs={7.5}>
                                                <CardActions>
                                                    <NavLink  to={'/Reservation'} className='changeWidth'>
                                                        <Button fullWidth size="small" onClick={e => setZone(e.target.value)} value='A'>Make Reservation</Button>
                                                    </NavLink>
                                                </CardActions>
                                            </Grid>
                                        </Grid>


                                    </Stack>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card>
                                    <CardContent>
                                        <Typography position={'absolute'}>
                                            2.5$ / Day
                                        </Typography>
                                        <Typography fontWeight={'bold'} variant="h6">
                                            Zone B
                                        </Typography>
                                        <Typography gutterBottom mt={2.3} variant="body1" color='black'>
                                            Content
                                        </Typography>
                                        <Typography gutterBottom variant="body2" color='black'>
                                            <WatchLaterIcon /> Max, Duration: 4 hours
                                        </Typography>

                                    </CardContent>
                                    <Stack direction={'row'}>
                                        <Grid container>
                                        <Grid item xs={4.5}>
                                                <NavLink to={'/ZoneDetail/B'}>
                                                    <CardActions>
                                                        <Button fullWidth size="small">Details</Button>
                                                    </CardActions>
                                                </NavLink>
                                            </Grid>
                                            <Grid item xs={7.5}>
                                                <CardActions>
                                                <NavLink  to={'/Reservation'} className='changeWidth'>
                                                        <Button fullWidth size="small" onClick={e => setZone(e.target.value)} value='B'>Make Reservation</Button>
                                                    </NavLink>
                                                </CardActions>
                                            </Grid>
                                        </Grid>


                                    </Stack>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card>
                                    <CardContent>
                                        <Typography position={'absolute'}>
                                            2.5$ / Day
                                        </Typography>
                                        <Typography fontWeight={'bold'} variant="h6">
                                            Zone C
                                        </Typography>
                                        <Typography gutterBottom mt={2.3} variant="body1" color='black'>
                                            Content
                                        </Typography>
                                        <Typography gutterBottom variant="body2" color='black'>
                                            <WatchLaterIcon /> Max, Duration: 4 hours
                                        </Typography>

                                    </CardContent>
                                    <Stack direction={'row'}>
                                        <Grid container>
                                        <Grid item xs={4.5}>
                                                <NavLink to={'/ZoneDetail/C'}>
                                                    <CardActions>
                                                        <Button fullWidth size="small">Details</Button>
                                                    </CardActions>
                                                </NavLink>
                                            </Grid>
                                            <Grid item xs={7.5}>
                                                <CardActions>
                                                <NavLink  to={'/Reservation'} className='changeWidth'>
                                                        <Button fullWidth size="small" onClick={e => setZone(e.target.value)} value='C'>Make Reservation</Button>
                                                    </NavLink>
                                                </CardActions>
                                            </Grid>
                                        </Grid>


                                    </Stack>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>

                </Box>
                <div className="row zone-area-homepage" >

                    {/* -----------------------------Entry/barrier system & QR code----------------------- */}

                    <div class=" row barrier-homepage" >

                        <div class=" col-lg-6" style={{ marginLeft: '10%' }}>
                            <h2>
                                Entry/barrier system & QR code
                            </h2>
                            <span>
                                <h5 style={{ display: 'block', marginBottom: '30px' }}>You can integrate planyo with any automated entry system. Check out our already existing integration with Spartime.</h5>

                                <h5>Your staff can use our mobile app and read the QR code upon entry for speeding up the arrivals.</h5>
                            </span>

                        </div>

                        <div class="col-lg-6 img-gate-homepage">
                            <button style={{ color: "#fff" }} type="submit"><span>Make Reservation</span></button>
                        </div>



                    </div>

                    {/* -----------------------------Entry/barrier system & QR code----------------------- */}

                    <div class=" row barrier-homepage" >

                        <div class="col-lg-6 img-gate-homepage" style={{ marginLeft: '10%' }}>
                            <button style={{ color: "#fff" }} type="submit"><span>Make Reservation</span></button>
                        </div>

                        <div class=" col-lg-6" >
                            <h2>
                                Entry/barrier system & QR code
                            </h2>
                            <span>
                                <h5 style={{ display: 'block', marginBottom: '30px' }}>You can integrate planyo with any automated entry system. Check out our already existing integration with Spartime.</h5>

                                <h5>Your staff can use our mobile app and read the QR code upon entry for speeding up the arrivals.</h5>
                            </span>
                        </div>

                    </div>

                </div>

            </form>

            <Footer></Footer>




        </HelmetProvider>


    );
}

export default Home;



