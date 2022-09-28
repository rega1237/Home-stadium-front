import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import { useSelector } from 'react-redux';

import './css/reset.css';
import './css/page-layout.css';
import './css/globals.css';

import Home from './pages/home/Home';
import Stadium from './pages/Stadium/Stadium';
import DeleteStadiumsPage from './pages/manageStadiums/DeleteStadiums';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import MyReservations from './pages/MyReservations/MyReservations';

// import DeleteStadiums from './components/DeleteStadiums';
import Navbar from './components/navbar/Navbar';

function App() {
  const { user } = useSelector((state) => state.users);

  return (
    <Router>
      <div className="total-app">
        {
        user?.token !== undefined
          ? (
            <Navbar />
          ) : ''
        }
        <div className="page-body">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/stadium/:id" element={<Stadium />} />
            <Route path="/stadiums" element={<DeleteStadiumsPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/my-reservations" element={<MyReservations />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
