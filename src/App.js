import Hero from './components/Hero';
import Analysis from './components/Analysis';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename="/netflix-teardown">
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/analysis" element={<Analysis />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
