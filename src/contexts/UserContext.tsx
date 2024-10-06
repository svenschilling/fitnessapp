import React, { createContext, useState, useContext, ReactNode } from 'react';

interface UserContextType {
  xp: number;
  level: number;
  addXP: (amount: number) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [xp, setXP] = useState(0);
  const [level, setLevel] = useState(1);

  const calculateLevel = (xp: number) => {
    return Math.floor(Math.sqrt(xp / 100)) + 1;
  };

  const addXP = (amount: number) => {
    const newXP = xp + amount;
    setXP(newXP);
    const newLevel = calculateLevel(newXP);
    if (newLevel > level) {
      setLevel(newLevel);
    }
  };

  return (
    <UserContext.Provider value={{ xp, level, addXP }}>
      {children}
    </UserContext.Provider>
  );
};