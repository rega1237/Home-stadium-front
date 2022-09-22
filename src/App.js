import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import './css/reset.css';
import './css/page-layout.css';

import Home from './pages/home/Home';
import Stadium from './pages/Stadium/Stadium';
import DeleteStadiumsPage from './pages/manageStadiums/DeleteStadiums';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import MyReservations from './pages/MyReservations/MyReservations';

// import DeleteStadiums from './components/DeleteStadiums';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="total-app">
        <Navbar />
        <div className="page-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stadium/:id" element={<Stadium />} />
            <Route path="/stadiums" element={<DeleteStadiumsPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/my-reservations" element={<MyReservations />} />
            {/* <Route path="/login" element={<Login />} />
            {/* <Route path="/login" element={<Login />} />
            <Route path="/delete" element={<DeleteStadiums />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
