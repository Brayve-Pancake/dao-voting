// `npx hardhat run <script>`
const hre = require("hardhat");

async function main() {
  const VoterToken = await hre.ethers.getContractFactory("VoterToken");
  const voterToken = await VoterToken.deploy();

  await voterToken.deployed();

  console.log("VoterToken deployed to:", voterToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
