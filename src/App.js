import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import ArtRoom from './components/ArtRoom';
import ScienceRoom from './components/ScienceRoom';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation links for our rooms */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/art">Art Room</Link></li>
            <li><Link to="/science">Science Room</Link></li>
          </ul>
        </nav>

        {/* Routes that dictate which component to render for each URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art" element={<ArtRoom />} />
          <Route path="/science" element={<ScienceRoom />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

