async function main() {
  const [deployer] = await ethers.getSigners();
  const deployerAddress = await deployer.getAddress();
  console.log("Deploying contracts with the account:", deployerAddress);

  const balance = await ethers.provider.getBalance(deployerAddress);
  console.log("Account balance:", balance.toString());

  const CryptoZombies = await ethers.getContractFactory("CryptoZombies");

  console.log("Deploying contract...");
  const cryptoZombies = await CryptoZombies.deploy();
  console.log("Contract deployed to:", cryptoZombies.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
