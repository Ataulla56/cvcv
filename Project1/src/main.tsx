import React from 'react';
import ReactDOM from 'react-dom/client';
import AirdropClaim from './AirdropClaim';

const demoReward = { label: 'Demo Reward', icon: '🎁' };
const demoWallet = '0x0000000000000000000000000000000000000000';
const handleComplete = () => {
  console.log('Claim completed');
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AirdropClaim
      reward={demoReward}
      walletAddress={demoWallet}
      onClaimComplete={handleComplete}
    />
  </React.StrictMode>
);
