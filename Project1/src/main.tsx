import React from 'react';
import ReactDOM from 'react-dom/client';
import { AirdropClaim } from './AirdropClaim';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AirdropClaim
      reward={{ label: "Airdrop", icon: "🎁" }}
      walletAddress="YOUR_WALLET_ADDRESS"
      onClaimComplete={() => alert('Claim complete!')}
    />
  </React.StrictMode>
);