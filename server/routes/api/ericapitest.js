const express = require('express');
const router = express.Router();
const { ethers } = require('ethers');
require('dotenv').config(); // ✅ this loads from .env at project root

const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)"
];

// Test console log to verify .env is loading
console.log("🔍 INFURA_API_URL:", process.env.INFURA_API_URL);
console.log("🔍 CONTRACT_ADDRESS:", process.env.CONTRACT_ADDRESS);

router.get('/', async (req, res) => {
  try {
    const provider = new ethers.JsonRpcProvider(process.env.INFURA_API_URL);
    const contract = new ethers.Contract(
      process.env.CONTRACT_ADDRESS,
      ERC20_ABI,
      provider
    );

    const name = await contract.name();
    const symbol = await contract.symbol();
    const totalSupply = await contract.totalSupply();

    res.json({
      name,
      symbol,
      totalSupply: ethers.formatUnits(totalSupply, 6) // USDT uses 6 decimals
    });
  } catch (err) {
    console.error('❌ Error:', err);
    res.status(500).json({ error: 'Failed to fetch contract info' });
  }
});

module.exports = router;
