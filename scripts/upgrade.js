const { ethers, upgrades } = require("hardhat");

async function main() {
  const ERC20UpgradableV2 = await ethers.getContractFactory(
    "ERC20UpgradableV2"
  );
  console.log("Upgrading ERC20UpgradableV1...");
  await upgrades.upgradeProxy(
    "0xA4dD31FA5baa2e8D747A1b67dF13ACc41f0F2c22",
    ERC20UpgradableV2
  );
  console.log("Upgraded Successfully");
}

main();
