import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Stadium from './components/Stadium';
import MyReservations from './components/MyReservations';
import DeleteStadiums from './components/DeleteStadiums';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/stadium/:id" element={<Stadium />} />
        <Route path="/my-reservations" element={<MyReservations />} />
        <Route path="/delete" element={<DeleteStadiums />} />
      </Routes>
    </Router>
  );
}

export default App;
