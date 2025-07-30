import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './pages/intro';
import MapPage from './pages/MapPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/peta" element={<MapPage />} />
      </Routes>
    </Router>
  );
}

export default App;
