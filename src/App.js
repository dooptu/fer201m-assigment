import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import { ToastContainer } from 'react-toastify';
import Register from './Components/Registration/Register';
import Home from './Components/Main/Home';
import Reservation from './Components/Payment/Reservation';
import ReservationDetail from './Components/Payment/ReservationDetail';
import PaymentInformation from './Components/Payment/PaymentInformation';
import ReservationComplete from './Components/Payment/ReservationComplete';
import Banking from './Components/Payment/Banking';







function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-right'></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/Reservation' element = {<Reservation></Reservation>}></Route>
          <Route path='/ReservationDetail' element={<ReservationDetail></ReservationDetail>}></Route>
          <Route path='/PaymentInformation' element={<PaymentInformation></PaymentInformation>}></Route>
          <Route path='/Banking' element={<Banking></Banking>}></Route>
          <Route path='/ReservationComplete' element={<ReservationComplete></ReservationComplete>}></Route>





        </Routes>
      </BrowserRouter>

    </div>
  );
}


export default App;
