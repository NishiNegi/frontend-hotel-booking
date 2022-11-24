import { Routes, Route } from 'react-router-dom';
import Success from './pages/Success/Success';
import Hotels from './pages/Hotels/Hotels';
import Rooms from './pages/Rooms/Rooms';
import Home from './pages/Home/Home';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/hotels" element={<Hotels />} />
    <Route path="/hotel/:id" element={<Rooms />} />
    <Route path="/success" element={<Success />} />
  </Routes>
);

export default App;
