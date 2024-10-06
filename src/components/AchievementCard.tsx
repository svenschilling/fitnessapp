import React from 'react';
import { Sun, Footprints, Dumbbell } from 'lucide-react';

interface AchievementCardProps {
  title: string;
  description: string;
  icon: 'sun' | 'footprints' | 'dumbbell';
}

const AchievementCard: React.FC<AchievementCardProps> = ({ title, description, icon }) => {
  const IconComponent = {
    sun: Sun,
    footprints: Footprints,
    dumbbell: Dumbbell
  }[icon];

  return (
    <div className="bg-purple-700 rounded-lg p-4 flex items-center">
      <IconComponent className="w-8 h-8 mr-4" />
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default AchievementCard;