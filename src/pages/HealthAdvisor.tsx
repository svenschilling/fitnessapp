import React, { useState } from 'react';

const HealthAdvisor: React.FC = () => {
  const [userInput, setUserInput] = useState({
    age: '',
    weight: '',
    height: '',
    gender: '',
    activityLevel: '',
    goals: '',
  });
  const [aiPlan, setAiPlan] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserInput(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the userInput to your backend,
    // which would then interact with the Claude Sonnet LLM.
    // For now, we'll just set a placeholder response.
    setAiPlan("Your personalized plan is being generated. This feature is coming soon!");
  };

  return (
    <div className="pb-20">
      <h1 className="text-4xl font-bold mb-6">Health Advisor</h1>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <label htmlFor="age" className="block mb-1">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={userInput.age}
            onChange={handleInputChange}
            className="w-full p-2 rounded bg-purple-700 text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="weight" className="block mb-1">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={userInput.weight}
            onChange={handleInputChange}
            className="w-full p-2 rounded bg-purple-700 text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="height" className="block mb-1">Height (cm)</label>
          <input
            type="number"
            id="height"
            name="height"
            value={userInput.height}
            onChange={handleInputChange}
            className="w-full p-2 rounded bg-purple-700 text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="gender" className="block mb-1">Gender</label>
          <select
            id="gender"
            name="gender"
            value={userInput.gender}
            onChange={handleInputChange}
            className="w-full p-2 rounded bg-purple-700 text-white"
            required
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="activityLevel" className="block mb-1">Activity Level</label>
          <select
            id="activityLevel"
            name="activityLevel"
            value={userInput.activityLevel}
            onChange={handleInputChange}
            className="w-full p-2 rounded bg-purple-700 text-white"
            required
          >
            <option value="">Select activity level</option>
            <option value="sedentary">Sedentary</option>
            <option value="light">Lightly Active</option>
            <option value="moderate">Moderately Active</option>
            <option value="very">Very Active</option>
            <option value="extra">Extra Active</option>
          </select>
        </div>
        <div>
          <label htmlFor="goals" className="block mb-1">Fitness Goals</label>
          <textarea
            id="goals"
            name="goals"
            value={userInput.goals}
            onChange={handleInputChange}
            className="w-full p-2 rounded bg-purple-700 text-white"
            rows={3}
            required
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Generate Plan
        </button>
      </form>
      {aiPlan && (
        <div className="bg-purple-700 rounded-lg p-4">
          <h2 className="text-2xl font-semibold mb-2">Your Personalized Plan</h2>
          <p className="whitespace-pre-wrap">{aiPlan}</p>
        </div>
      )}
    </div>
  );
};

export default HealthAdvisor;