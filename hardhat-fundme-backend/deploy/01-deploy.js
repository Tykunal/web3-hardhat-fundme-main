const { hexValue } = require("ethers/lib/utils");
const { TASK_DEPLOY_RUN_DEPLOY } = require("hardhat-deploy");

async function deploy() {
  const Fundme = await ethers.getContractFactory("FundMe");
  const fund = await Fundme.deploy();
  console.log("Deployment Success");
  const address = fund.address;
  console.log(address);
}
module.exports.default = deploy();
