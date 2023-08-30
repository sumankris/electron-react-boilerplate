import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import LeftSidebar from './components/MenuBar/LeftSidebar';
import Sevas from './components/pages/Sevas/Sevas';
import Billing from './components/pages/Billing/Billing';
import Settings from './components/pages/Settings/Settings';
import Reports from './components/pages/Reports/Reports';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LeftSidebar />
                 <Billing />{' '}
              </>
            }
          />
          <Route
            path="/sevas"
            element={
              <>
                <LeftSidebar />
                <Sevas />
              </>
            }
          />
          <Route
            path="/settings"
            element={
              <>
                <LeftSidebar />
                <Settings/>
              </>
            }
          />
                    <Route
            path="/reports"
            element={
              <>
                <LeftSidebar />
                <Reports/>
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
