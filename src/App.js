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


<<<<<<< HEAD
import About from './Components/Complement/Tri/About'
import News from './Components/Complement/Tri/News'
=======
tomlenek
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Payment from './pages/Payment';
// import Employee from './pages/Employee';
// import Profile from './pages/Profile';
// import  Messages  from './pages/Messages';

>>>>>>> 25318627db67c8a54a87dfeff0bb9ab24d9f826f


function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-right'></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path='/allbooking' element={<AllBooking />}></Route>
          <Route path='/pastbooking' element={<HistoryBooking />}></Route>
          <Route path='/completedbooking' element={<CompletedBooking />}></Route>
          <Route path='/cancelledbooking' element={<CancelledBooking />}></Route>
          <Route path='/profilesetting' element={<ProfileSetting />}></Route>
          <Route path='/account' element={<AccountInformation />}></Route>

{/* -------------------------------- Tri - About - News ------------------------------------------ */}
          <Route path='/about' element={<About />}></Route>
          <Route path='/news' element={<News />}></Route>
{/* ---------------------------------------------------------------------------------------------- */}

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

        </Routes >
      </BrowserRouter >

    </div >

tomlenek
{/* <div className='App'>     
      <Navbar />
      <Routes>                 
          <Route path='/' element={<Home />}></Route>
          <Route exact path='/employee' element={<Employee />}></Route>
          <Route exact path='/payment' element={<Payment />}></Route> 
          <Route exact path='/profile' element={<Profile />}></Route>
          <Route exact path='/messages' element={<Messages />}></Route>     
      </Routes>    
      </div> */}

  );
}


export default App;
