import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '../contexts/UserContext';

interface DailyQuestProps {
  title: string;
  xp: number;
  onComplete: () => void;
}

const DailyQuest: React.FC<DailyQuestProps> = ({ title, xp, onComplete }) => {
  const { addXP } = useUser();
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    setIsCompleted(true);
    addXP(xp);
    setTimeout(() => {
      onComplete();
    }, 500);
  };

  return (
    <AnimatePresence>
      {!isCompleted && (
        <motion.div
          className="bg-purple-700 rounded-lg p-4 flex flex-col items-start"
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <span className="bg-yellow-400 text-black font-bold px-2 py-1 rounded-full mb-2">
            {xp} XP
          </span>
          <button 
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleComplete}
          >
            Complete Quest
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DailyQuest;