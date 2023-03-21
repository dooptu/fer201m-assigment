import { Box, Button, Card, CardActions, CardContent, Container, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography } from "@mui/material";
import { display } from "@mui/system";
import React, { useState, useEffect } from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, DatePickerToolbar } from '@mui/x-date-pickers/DatePicker';
import './Body.css'
import { DateCalendar, DateField, DateTimePicker } from "@mui/x-date-pickers";
import { Label } from "@mui/icons-material";
import dayjs, { Dayjs } from 'dayjs';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        },
    },
};

const names = [
    '00:00',
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
];


export default function Body() {
    const [startDate, setStartDate] = useState('');
    // const [value, setValue] = useState('');
    const [endDate, setEndDate] = useState();
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

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
    }, [endTime]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const regObj = { startDate, endDate, startTime, endTime }
        sessionStorage.setItem("startDate", startDate);

        sessionStorage.setItem("endDate", endDate);

        sessionStorage.setItem("startTime", startTime);
        sessionStorage.setItem("endTime", endTime);

        console.log(JSON.stringify(regObj));
        window.location.href = '/Reservation'
    }
    return (

        <Box>
            {/* Booking area */}
            <Box className="backgroundImage">
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={4} pb={5}>
                            <Box sx={{ backgroundColor: 'white', borderRadius: '10px' }}>
                                <Typography p={'24px 0px 0px 24px'} variant="h4" >
                                    BOOKING NOW
                                </Typography>
                                <Box onSubmit={handleSubmit} component="form" p={3}>
                                    <FormControl fullWidth>
                                        <LocalizationProvider style={{ width: '100%' }} dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['DatePicker']}>
                                                <DatePicker value={startDate} onChange={(newValue) => setStartDate(newValue)} showDaysOutsideCurrentMonth label="Start date" />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </FormControl>


                                    <FormControl variant="filled" sx={{ borderRadius: '5px', m: '15px 0px 10px 0px' }} fullWidth>
                                        <InputLabel id="demo-multiple-name-label">Start time</InputLabel>
                                        <Select
                                            id="demo-multiple-name"
                                            value={startTime}
                                            onChange={(e) => setStartTime(e.target.value)}
                                            input={<OutlinedInput label="Start time" />}
                                            MenuProps={MenuProps}
                                        >



                                            {names.map((name) => (
                                                <MenuItem
                                                    value={name}
                                                >
                                                    {name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                    <FormControl fullWidth>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['DatePicker']}>
                                                <DatePicker value={endDate} onChange={(newValue) => setEndDate(newValue)} showDaysOutsideCurrentMonth label="End date " />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </FormControl>

                                    <FormControl variant="filled" sx={{ borderRadius: '5px', m: '15px 0px 10px 0px' }} fullWidth>
                                        <InputLabel id="demo-multiple-name-label">End time</InputLabel>
                                        <Select
                                            id="demo-multiple-name"
                                            value={endTime}
                                            onChange={(e) => setEndTime(e.target.value)}
                                            input={<OutlinedInput label="End time" />}
                                            MenuProps={MenuProps}
                                        >
                                            {names.map((name) => (
                                                <MenuItem
                                                    value={name}
                                                >
                                                    {name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    <Button type="submit" sx={{ m: '40px 0px 20px 0px' }} className="btn--changeColor" color="secondary" fullWidth variant="contained">Booking</Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={8}>
                            <Box p={'120px 30px 0px 30px'}>
                                <Typography color={'primary'} align="justify" variant="h4" gutterBottom>
                                    Booking Vehicle
                                    <p style={{ fontSize: '80px', display: 'inline-block', border: '10px solid #2DC98A', padding: '6px' }}>P</p>

                                    arking Area
                                </Typography>
                                <Typography mt={4} color={'primary'} align="justify" variant="h6">The system provide the easily service to book a slot for your
                                    vehicle in my parking area and pay the monthly invoice
                                    if you is a resident.</Typography>

                            </Box>


                        </Grid>
                    </Grid>

                </Container>
            </Box>

        </Box>

    );
}