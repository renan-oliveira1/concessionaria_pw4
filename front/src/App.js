import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/home/Home'
import Sellers from './pages/sellers/Sellers'
import FormSeller from './pages/sellers/FormSeller'
import InfoSeller from './pages/sellers/InfoSeller'
import Vehicles from './pages/vehicles/Vehicles'
import FormVehicle from './pages/vehicles/FormVehicle'
import {HelpProvider} from './contexts/HelpContext'
import SellVehicle from './pages/vehicles/SellVehicle';

function App() {
  return (
    <BrowserRouter>
      <HelpProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/vehicleForm" element={<FormVehicle />} />
          <Route path="/sellVehicle" element={<SellVehicle />} />
          <Route path="/sellers" element={<Sellers />} />
          <Route path="/sellerForm" element={<FormSeller />} />
          <Route path="/infoSeller" element={<InfoSeller />} />
        </Routes>
      </HelpProvider>
    </BrowserRouter>
  );
}

export default App;
