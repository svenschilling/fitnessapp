import React from 'react';

const Settings: React.FC = () => {
  return (
    <div className="pb-20">
      <h1 className="text-4xl font-bold mb-6">Settings</h1>
      <div className="space-y-4">
        <div className="bg-purple-700 rounded-lg p-4">
          <h2 className="text-2xl font-semibold mb-2">Account</h2>
          <p>Manage your account settings and preferences</p>
        </div>
        <div className="bg-purple-700 rounded-lg p-4">
          <h2 className="text-2xl font-semibold mb-2">Notifications</h2>
          <p>Configure your notification preferences</p>
        </div>
        <div className="bg-purple-700 rounded-lg p-4">
          <h2 className="text-2xl font-semibold mb-2">Privacy</h2>
          <p>Control your privacy settings</p>
        </div>
        <div className="bg-purple-700 rounded-lg p-4">
          <h2 className="text-2xl font-semibold mb-2">Help & Support</h2>
          <p>Get help and contact support</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;