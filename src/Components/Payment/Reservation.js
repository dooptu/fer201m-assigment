import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Helmet from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle, faUser, faClock, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "../Complement/Slider"
import Header from "../Complement/Header";
import Footer from "../Complement/Footer";
import ReservationDetail from "./ReservationDetail";
import PaymentInformation from "./PaymentInformation";
import ReservationComplete from "./ReservationComplete";
import './Payment.css'
import { Box, Button, Card, CardActions, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import '../Complement/Khoi/Body/Body.css'

const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const PHONE_REGEX = /^[0-9]{10,12}$/;
const Reservation = () => {
    const [startDate, setStartDate] = useState(sessionStorage.getItem("startDate"));
    const [endDate, setEndDate] = useState(sessionStorage.getItem("endDate"));
    const [startTime, setStartTime] = useState(sessionStorage.getItem("startTime"));
    const [endTime, setEndTime] = useState(sessionStorage.getItem("endTime"));
    const [zone, setZone] = useState(sessionStorage.getItem("zone"))
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false);
    const [phone, setPhone] = useState('')
    const [validPhone, setValidPhone] = useState(false);
    const [typeOfVehicle, setTypeOfVehicle] = useState('');
    const [slot, setSlot] = useState('');
    const [username, setUsername] = useState(sessionStorage.getItem('username'));

    useEffect(() => {
        setStartDate(startDate);

    }, [startDate]);

    useEffect(() => {
        setEndDate(endDate);
    }, [endDate]);

    useEffect(() => {
        setStartTime(startTime);
    }, [startTime]);

    useEffect(() => {
        setEndTime(endTime);
    }, [endDate]);

    useEffect(() => {
        setZone(zone);
    }, [zone])

    useEffect(() => {
        setFullName(fullName)

    }, [fullName]);


    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        setValidEmail(result);
    }, [email]);

    useEffect(() => {
        const result = PHONE_REGEX.test(phone);
        setValidPhone(result);
    })

    useEffect(() => {
        setTypeOfVehicle(typeOfVehicle)
    }, [typeOfVehicle])

    useEffect(() => {
        setSlot(slot)
    }, [slot])


    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the valid value!';

        if (!PHONE_REGEX.test(phone)) {
            isproceed = false;
            errormessage = 'Phone must be 10-12 numbers.';
        }

        if (!EMAIL_REGEX.test(email)) {
            isproceed = false;
            errormessage = 'Please enter the valid email!';

        }



        if (!isproceed) {
            toast.warning(errormessage)
        } else
            return isproceed;
    }





    return (
        <div>
            <Header data={username}></Header>
            <Slider></Slider>

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
                                        <Grid item xs={4.5}>  <CardActions>
                                            <Button fullWidth size="small">Details</Button>
                                        </CardActions></Grid>
                                        <Grid item xs={7.5}> <CardActions>
                                            <Button fullWidth size="small">Make Reservation</Button>
                                        </CardActions></Grid>
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
                                        <Grid item xs={4.5}>  <CardActions>
                                            <Button fullWidth size="small">Details</Button>
                                        </CardActions></Grid>
                                        <Grid item xs={7.5}> <CardActions>
                                            <Button fullWidth size="small">Make Reservation</Button>
                                        </CardActions></Grid>
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
                                        <Grid item xs={4.5}>  <CardActions>
                                            <Button fullWidth size="small">Details</Button>
                                        </CardActions></Grid>
                                        <Grid item xs={7.5}> <CardActions>
                                            <Button fullWidth size="small">Make Reservation</Button>
                                        </CardActions></Grid>
                                    </Grid>


                                </Stack>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>

            </Box>
            <ReservationDetail></ReservationDetail>
            <Footer></Footer>
        </div>
    )

}
export default Reservation;