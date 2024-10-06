import React from 'react';
import AchievementCard from '../components/AchievementCard';

const Achievements: React.FC = () => {
  const achievements = [
    { title: "Early Bird", description: "Complete a workout before 8 AM", icon: "sun" },
    { title: "Step Master", description: "Reach 100,000 total steps", icon: "footprints" },
    { title: "Strength Guru", description: "Complete 50 strength workouts", icon: "dumbbell" },
    { title: "Meditation Master", description: "Meditate for 30 days in a row", icon: "sun" },
    { title: "Marathon Runner", description: "Run a total of 42.2 km", icon: "footprints" },
    { title: "Flexibility Expert", description: "Complete 20 yoga sessions", icon: "sun" },
  ];

  return (
    <div className="pb-20">
      <h1 className="text-4xl font-bold mb-6">Achievements</h1>
      <div className="grid grid-cols-2 gap-4">
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={index}
            title={achievement.title}
            description={achievement.description}
            icon={achievement.icon as "sun" | "footprints" | "dumbbell"}
          />
        ))}
      </div>
    </div>
  );
};

export default Achievements;