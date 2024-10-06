import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import Header from '../components/Header';
import ProgressBar from '../components/ProgressBar';
import DailyQuest from '../components/DailyQuest';
import AchievementCard from '../components/AchievementCard';
import { useUser } from '../contexts/UserContext';

interface Quest {
  id: number;
  title: string;
  xp: number;
}

const Home: React.FC = () => {
  const { xp } = useUser();
  const [quests, setQuests] = useState<Quest[]>([
    { id: 1, title: "Morning Yoga", xp: 100 },
    { id: 2, title: "10,000 Steps", xp: 150 },
    { id: 3, title: "Strength Training", xp: 200 },
    { id: 4, title: "Meditation", xp: 50 },
  ]);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleQuestComplete = (id: number) => {
    setQuests(quests.filter(quest => quest.id !== id));
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <div className="pb-20">
      {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}
      <Header />
      <ProgressBar />
      <motion.div
        className="grid grid-cols-2 gap-4 my-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {quests.map((quest) => (
          <DailyQuest
            key={quest.id}
            title={quest.title}
            xp={quest.xp}
            onComplete={() => handleQuestComplete(quest.id)}
          />
        ))}
      </motion.div>
      <h2 className="text-2xl font-bold mb-4">Recent Achievements</h2>
      <div className="grid grid-cols-2 gap-4">
        <AchievementCard title="Early Bird" description="Complete a workout before 8 AM" icon="sun" />
        <AchievementCard title="Step Master" description="Reach 100,000 total steps" icon="footprints" />
        <AchievementCard title="Strength Guru" description="Complete 50 strength workouts" icon="dumbbell" />
      </div>
    </div>
  );
};

export default Home;