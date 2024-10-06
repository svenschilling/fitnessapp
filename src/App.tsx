import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Achievements from './pages/Achievements';
import Settings from './pages/Settings';
import HealthAdvisor from './pages/HealthAdvisor';
import Footer from './components/Footer';
import { UserProvider } from './contexts/UserContext';

const App: React.FC = () => {
  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-b from-purple-600 to-purple-800 text-white p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/health-advisor" element={<HealthAdvisor />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;