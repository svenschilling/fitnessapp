import React from 'react';
import { Home, Activity, Trophy, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-purple-900 p-4 flex justify-around">
      <Link to="/" className={location.pathname === '/' ? 'text-yellow-400' : 'text-white'}>
        <Home className="w-6 h-6" />
      </Link>
      <Link to="/health-advisor" className={location.pathname === '/health-advisor' ? 'text-yellow-400' : 'text-white'}>
        <Activity className="w-6 h-6" />
      </Link>
      <Link to="/achievements" className={location.pathname === '/achievements' ? 'text-yellow-400' : 'text-white'}>
        <Trophy className="w-6 h-6" />
      </Link>
      <Link to="/settings" className={location.pathname === '/settings' ? 'text-yellow-400' : 'text-white'}>
        <Settings className="w-6 h-6" />
      </Link>
    </footer>
  );
};

export default Footer;