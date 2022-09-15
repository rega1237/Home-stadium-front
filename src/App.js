import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

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
