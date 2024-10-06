import React from 'react';
import { motion } from 'framer-motion';
import { useUser } from '../contexts/UserContext';

const ProgressBar: React.FC = () => {
  const { xp, level } = useUser();
  const xpForNextLevel = level * level * 100;
  const xpForCurrentLevel = (level - 1) * (level - 1) * 100;
  const xpInCurrentLevel = xp - xpForCurrentLevel;
  const xpNeededForNextLevel = xpForNextLevel - xpForCurrentLevel;
  const percentage = (xpInCurrentLevel / xpNeededForNextLevel) * 100;

  return (
    <div className="w-full bg-purple-900 rounded-full h-6 mb-6 overflow-hidden">
      <motion.div
        className="bg-blue-500 h-6"
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      ></motion.div>
      <div className="text-center -mt-6">Level {level} - {xpInCurrentLevel}/{xpNeededForNextLevel} XP</div>
    </div>
  );
};

export default ProgressBar;