import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Inventor from './components/inventory/Inventor';
import Orders from './components/orders/Orders';
import Shop from './components/shop/Shop';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import RequireAuth from './components/requiredAuth/RequireAuth';
import Shipment from './components/shipment/Shipment';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventor></Inventor>
          </RequireAuth>
        }></Route>
        <Route path='/shipment' element=
          {
            <RequireAuth>
              <Shipment></Shipment>
            </RequireAuth>
          }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
