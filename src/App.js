import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Home from './pages/Home';
import Login from './components/Login';
import Stadium from './components/Stadium';
import MyReservations from './components/MyReservations';
import DeleteStadiums from './components/DeleteStadiums';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/stadium/:id" element={<Stadium />} />
          <Route path="/my-reservations" element={<MyReservations />} />
          <Route path="/delete" element={<DeleteStadiums />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
