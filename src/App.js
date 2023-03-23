import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Main/Home';
import Login from './Components/Login/Login';
import Register from './Components/Registration/Register';
import { ToastContainer } from 'react-toastify';
import ForgottenPwd from './Components/Login/Forgotten-pwd';
import Reservation from './Components/Payment/Reservation';
import PaymentInformation from './Components/Payment/PaymentInformation';
import Banking from './Components/Payment/Banking';
import ReservationComplete from './Components/Payment/ReservationComplete';
import ZoneDetail from './Components/Zone/ZoneDetail';

import ManagerHomePage from './Components/Admin/ManagerHomepage';
import ResidentManagement from './Components/Admin/Sercurity/ResidentManagement';
import CustomerManagement from './Components/Admin/Sercurity/CustomerManagement';
import InvoiceManagement from './Components/Admin/Sercurity/InvoiceManagement';
import Price from './Components/Screen/Price';
import SlotManagement from './Components/Admin/Sercurity/SlotManagement';
import BuildingManagerHomePage from './Components/Admin/BuildingManager/BuildingManagerHomePage';
import SercurityManagement from './Components/Admin/BuildingManager/SercurityManagement';
import AdminLogin from './Components/Admin/AdminLogin';
import RevenueManagement from './Components/Admin/BuildingManager/RevenueManagement';
import HeadManagerHomePage from './Components/Admin/HeadManager/HeadManagerHomePage';

import SerHomePage from './Components/Admin/Sercurity/SerHomePage';
import MoneyManagement from './Components/Admin/Sercurity/MoneyManagement';
import ResidentPage from './Components/Resident/ResidentPage';
import CustomerPage from './Components/Customer/CustomerPage';
import News from './Components/Screen/News';
import Service from './Components/Screen/Service';
import ErrorPage from './Components/Error/ErrorPage';
import About from './Components/Complements/About';


function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-right'></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/Forgotten-pwd' element={<ForgottenPwd />}></Route>
          <Route path='/Reservation' element={<Reservation />}></Route>
          <Route path='/PaymentInformation' element={<PaymentInformation />}></Route>
          <Route path='/Banking' element={<Banking></Banking>}></Route>
          <Route path='/ReservationComplete' element={<ReservationComplete />}></Route>
          <Route path='/ZoneDetail/:index' element={<ZoneDetail />}></Route>
          <Route path='/ManagerHomepage' element={<ManagerHomePage></ManagerHomePage>}></Route>
          <Route path='/SerHomePage' element={<SerHomePage></SerHomePage>}></Route>
          <Route path='/ResidentManagement' element={<ResidentManagement></ResidentManagement>}></Route>
          <Route path='/CustomerManagement' element={<CustomerManagement></CustomerManagement>}></Route>
          <Route path='/InvoiceManagement' element={<InvoiceManagement></InvoiceManagement>}></Route>
          <Route path='/SlotManagement' element={<SlotManagement></SlotManagement>}></Route>
          <Route path='/BuildingManagerHomePage' element={<BuildingManagerHomePage></BuildingManagerHomePage>}></Route>
          <Route path='/SercurityManagement' element={<SercurityManagement></SercurityManagement>}></Route>
          <Route path='/Price' element={<Price></Price>}></Route>
          <Route path='/AdminLogin' element={<AdminLogin></AdminLogin>}></Route>
          <Route path='/RevenueManagement' element={<RevenueManagement></RevenueManagement>}></Route>
          <Route path='/MoneyManagement' element={<MoneyManagement></MoneyManagement>}></Route>
          <Route path='/HeadManagerHomePage' element={<HeadManagerHomePage></HeadManagerHomePage>}></Route>
          <Route path='/about' element={<HeadManagerHomePage></HeadManagerHomePage>}></Route>



          {/* <Route path='/pastbooking' element={<HistoryBooking />}></Route>
          <Route path='/completedbooking' element={<CompletedBooking />}></Route>
          <Route path='/cancelledbooking' element={<CancelledBooking />}></Route>
          <Route path='/profilesetting' element={<ProfileSetting />}></Route>
          <Route path='/account' element={<AccountInformation />}></Route> */}

          <Route path='/ResidentPage' element={<ResidentPage></ResidentPage>}></Route>
          <Route path='/CustomerPage' element={<CustomerPage></CustomerPage>}></Route>


          <Route path='/News' element={<News></News>}></Route>
          <Route path='/Service' element={<Service></Service>}></Route>
          <Route path='*' element=<ErrorPage></ErrorPage> />
          


        </Routes>
      </BrowserRouter>

    </div>
  );
}


export default App;
