import React, { useEffect, useState, } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { Carousel, Card, Stack, Button } from "react-bootstrap";
import Header from "../Complements/Header";
import Footer from "../Complements/Footer";
import Slider from "../Complements/Slider";
import './Main.css'
import PopUpWarning from './PopUp/PopUpWarning';
import { url_api } from "../../API/api";

const URL_WARNING_C = url_api + '/expired/checkExpiredC/';
const URL_WARNING_R = url_api + '/expired/checkExpiredR/';

const Home = () => {
    const reviews = [
        { _id: 1, text: "abc" },
        { _id: 2, text: "def" },
        { _id: 3, text: "ghi" },
        { _id: 4, text: "jkl" },

    ];

    const [zone, setZone] = useState('A');

    const [username, setUsername] = useState(sessionStorage.getItem('username'));
    const [id, setId] = useState(sessionStorage.getItem('id'));
    const [role, setRole] = useState(sessionStorage.getItem('role'));
    const [URL_WARNING, set_URL_WARNING] = useState('')
    const [obj, setObj] = useState([]);

    const [showPopupWarning, setShowPopupWarning] = useState(false);
    const [open, setOpen] = useState();

    useEffect(() => {
        const currentDate = new Date(Date.now());
        const formattedDate = currentDate.toISOString().substr(0, 10);
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const currentTime = `${hours}a${minutes}a${seconds}`;
        if (role === 'C') {
            set_URL_WARNING(URL_WARNING_C + id + '?time=' + currentTime);
            console.log(URL_WARNING_C + id + '?time=' + currentTime)
        } else if (role === 'R') {
            set_URL_WARNING(URL_WARNING_R + id + '?time=' + currentTime);
            console.log(URL_WARNING_R + id + '?time=' + currentTime)
        }

        fetch(URL_WARNING, {
            method: "GET",
            headers: {
                "Access-Control-Allow-Origin": URL_WARNING,
                Accept: "*/*",
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                "Cache-Control": "no-cache",
            },

        })
            .then((res) => {
                setOpen(false)
                console.log('open: ' + open)
                res.json()
            })
            .then((data) => {

                setObj(data);
                console.log('data: ' + data)
                setOpen(true)
                console.log('open + : ' + open)
            })
            .catch((err) => {
                console.error(err);

            });

        if (obj === undefined) setOpen(false)
        else setOpen(true)

    }, []);
    console.log('data:---' + obj)



    useEffect(() => {
        if (open) {
            togglePopupWarning()
            console.log('open')
        } else console.log('dont');

    }, [])


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
                                                    <NavLink to={'/Reservation'} className='changeWidth'>
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
                                                    <NavLink to={'/Reservation'} className='changeWidth'>
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
                                                    <NavLink to={'/Reservation'} className='changeWidth'>
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



