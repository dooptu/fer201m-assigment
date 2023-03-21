import './Complement.css'
import { useEffect, useState} from "react";


const Slider = () => {
    const [startDate, setStartDate] = useState();
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
        <div className="background" style={{ marginTop: '65px' }}>
            <div className="booking-in-homepage">
                <h2>BOOKING NOW</h2>
                <form onSubmit={handleSubmit}>
                    <div className="class-input">
                        <label>Start date *</label>
                        <br />
                        <div>
                            <input type={'date'} style={{ width: '100%', position: 'relative' }} onChange={(e) => setStartDate(e.target.value)} ></input>

                        </div>
                    </div>
                    <div className="class-input">
                        <label>Start time *</label>
                        <br />
                        <select class="form-select" autoComplete="" onChange={(e) => setStartTime(e.target.value)}>
                            {/* wait */}
                        </select>
                    </div>
                    <div className="class-input">
                        <label>End date *</label>
                        <br />
                        <div>
                            <input type={'date'} style={{ width: '100%', position: 'relative' }} onChange={(e) => setEndDate(e.target.value)}  ></input>

                        </div>
                    </div>
                    <div className="class-input">
                        <label>End time *</label>
                        <br />
                        <select class="form-select" autoComplete="off" onChange={(e) => setEndTime(e.target.value)}>
                            {/* wait */}
                        </select>
                    </div>


                    <button style={{ color: "#fff" }} type="submit">Book now</button>

                </form>


            </div>
            <div className="describe-system" >
                <h1 style={{color:'white'}}>Booking Vehicle Parking Area</h1>
                <p style={{color:'white', fontSize:'20px'}}>The system provide the easily service to book a slot for your vehicle in my parking area
                    and pay the monthly invoice if you is a resident.</p>
            </div>
        </div>
    )
}

export default Slider;   