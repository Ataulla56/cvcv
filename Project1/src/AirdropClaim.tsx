import { useState } from 'react';
import { ethers } from 'ethers';

interface AirdropClaimProps {
  reward: { label: string; icon: string };
  walletAddress: string;
  onClaimComplete: () => void;
}

export const AirdropClaim = ({
  reward,
  walletAddress,
  onClaimComplete
}: AirdropClaimProps) => {
  const [claiming, setClaiming] = useState(false);
  const [txHash, setTxHash] = useState('');
  const [error, setError] = useState('');

  const handleClaim = async () => {
    try {
      setClaiming(true);
      setError('');
      setTxHash('');

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const contractAddress = "0xcab3faaa777a0858a8ed692e2abd86832f54e68f";
      const abi = ["function claim() external"];
      const contract = new ethers.Contract(contractAddress, abi, signer);

      const tx = await contract.claim({ gasLimit: 60000 });
      setTxHash(tx.hash);
      await tx.wait();

      onClaimComplete();
    } catch (err: any) {
      setError(err.reason || err.message);
    } finally {
      setClaiming(false);
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>🎉 Congratulations!</h2>
      <p>You won <strong>{reward.label}</strong> and earned an airdrop!</p>
      <button onClick={handleClaim} disabled={claiming} style={{ padding: '1rem', fontSize: '1rem', marginTop: '1rem' }}>
        {claiming ? "Claiming..." : "Claim Airdrop"}
      </button>
      {txHash && (
        <p>
          ✅ Claimed! TX: <a href={`https://sepolia.etherscan.io/tx/${txHash}`} target="_blank">View</a>
        </p>
      )}
      {error && <p style={{ color: 'red' }}>❌ {error}</p>}
    </div>
  );
};