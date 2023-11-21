const hre = require("hardhat");

async function main() {
  // Get the Points smart contract
  const Degen = await hre.ethers.getContractFactory("DegenToken");

  const initialAddress = "0xC7c352C370D2a7E4D3efd66A91FAA3afE2fA8Fc2";

  // Deploy it
  const degen = await Degen.deploy(initialAddress);
  await degen.waitForDeployment();

  // Display the contract address
  console.log(`Points token deployed to ${degen.target}`);
}

// Hardhat recommends this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
