import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/intro';
import MapPage from './pages/MapPage'; // <- sudah diimport?

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </Router>
  );
}

export default App;
