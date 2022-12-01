
const hre = require("hardhat");

const main = async () => {

  const Transaction = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transaction.deploy();

  await transactions.deployed();

  console.log("Greeter deployed to:", transactions.address);
}


const runMain = async () => {
  try {
    await main();
    process.exit(0)
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
//0x71865766603524EaCf74f619853E7072DD50628e
runMain();