import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import './css/reset.css';
import './css/page-layout.css';

import Home from './pages/home/Home';
// import Login from './components/Login';
// import Stadium from './components/Stadium';
// import MyReservations from './components/MyReservations';
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
            {/* <Route path="/login" element={<Login />} />
            <Route path="/stadium/:id" element={<Stadium />} />
            <Route path="/my-reservations" element={<MyReservations />} />
            <Route path="/delete" element={<DeleteStadiums />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
