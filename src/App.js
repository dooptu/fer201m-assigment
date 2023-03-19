import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import { ToastContainer } from 'react-toastify';
import Register from './Components/Registration/Register';
import Home from './Components/Main/Home';
<<<<<<< HEAD
import Main from './Components/Complement/Khoi/Main_Khoi';
=======
import Reservation from './Components/Payment/Reservation';
import ReservationDetail from './Components/Payment/ReservationDetail';
import PaymentInformation from './Components/Payment/PaymentInformation';
import ReservationComplete from './Components/Payment/ReservationComplete';
import Banking from './Components/Payment/Banking';
>>>>>>> f9287d0a3d11d9d46dc232a998df33cd802d29cb


import AccountInformation from './Components/Complement/Tam/Account/AccountInformation';
import HistoryBooking from './Components/Complement/Tam/Account/HistoryBooking';
import CompletedBooking from './Components/Complement/Tam/Account/CompletedBooking';
import CancelledBooking from './Components/Complement/Tam/Account/CancelledBooking';
import AllBooking from './Components/Complement/Tam/Account/AllBooking';
import ProfileSetting from './Components/Complement/Tam/Account/ProfileSetting';




function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-right'></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
<<<<<<< HEAD
          <Route path='/Reservation' element={<Main />}></Route>
=======
          <Route path='/Reservation' element = {<Reservation></Reservation>}></Route>
          <Route path='/ReservationDetail' element={<ReservationDetail></ReservationDetail>}></Route>
          <Route path='/PaymentInformation' element={<PaymentInformation></PaymentInformation>}></Route>
          <Route path='/Banking' element={<Banking></Banking>}></Route>
          <Route path='/ReservationComplete' element={<ReservationComplete></ReservationComplete>}></Route>




>>>>>>> f9287d0a3d11d9d46dc232a998df33cd802d29cb
<Route path='/Reservation' element = {<Reservation></Reservation>}></Route>
          <Route path='/ReservationDetail' element={<ReservationDetail></ReservationDetail>}></Route>
          <Route path='/PaymentInformation' element={<PaymentInformation></PaymentInformation>}></Route>
          <Route path='/Banking' element={<Banking></Banking>}></Route>
          <Route path='/ReservationComplete' element={<ReservationComplete></ReservationComplete>}></Route>


        </Routes >
      </BrowserRouter >

    </div >
  );
}


export default App;
