
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import Sidebar from './components/sidebar/Sidebar';
import Vehicle from './pages/Vehicle';
import Trails from './pages/Trails';
import Reports from './pages/Reports';
import Panic from './pages/Panic';
import { Container, Col, Row, Card } from 'react-bootstrap';
import NavbarVts from './components/navbar/NavbarVts';
import Assets from './pages/Assets';


function App() {
  return (
    <div className='row' >
      <div className="leftnav col-md-2">
        <Sidebar />
      </div>
      <div className="col-md-10" >
        <Card responsive style={{  height:"105vh", backgroundColor: "rgba(240, 244, 248)" }}>
          <Card.Body >
            <NavbarVts/>
            <Routes>
              <Route path='/' exact element={<Overview />} />
              <Route path='/vehicle' exact element={<Vehicle />} />
              <Route path='/trails' exact element={<Trails />} />
              <Route path='/reports' exact element={<Reports />} />
              <Route path='/panic' exact element={<Panic />} />
              <Route path='/Assets' exact element={<Assets />} />
            </Routes>
          </Card.Body>
        </Card>
      </div>
    </div >



  );
}

export default App;
