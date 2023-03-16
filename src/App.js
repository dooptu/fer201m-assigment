import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import { ToastContainer } from 'react-toastify';
import Register from './Components/Registration/Register';







function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-right'></ToastContainer>
      <BrowserRouter>
        <Routes>

          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>





        </Routes>
      </BrowserRouter>

    </div>
  );
}


export default App;
