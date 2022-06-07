const { messagePrefix } = require("@ethersproject/hash");
const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

describe("Test if a vote has been registered", function () {
  let signers, daoVoter;

  before("deploy instance of DaoVoter contract", async function () {
    // Have to use contractFactory to create
    const VotingToken = await ethers.getContractFactory("VotingToken");
    // Deploy token first
    votingToken = await VotingToken.deploy();
    await votingToken.deployed();
    tokenAddress = votingToken.address;

    const DaoVoter = await ethers.getContractFactory("DaoVoter");
    //Use token address to allow IERC20 - balanceOf()
    daoVoter = await DaoVoter.deploy(tokenAddress);
    await daoVoter.deployed();
    signers = await ethers.provider.listAccounts();
  });

  it.skip("contract should be deployed", async function () {
    assert.equal(await daoVoter.owner(), signers[0]);
  });

  it.skip("token address should be stored on DaoVoters", async function () {
    console.log(votingToken.address);
    assert.equal(await daoVoter.token(), votingToken.address);
  });

  it("user should have ability to vote", async function () {
    // have to create a signer from desired address
    const signer = await ethers.getSigner(signers[1]);
    const testNum = 23;

    await daoVoter.connect(signer).vote(testNum, true);
    assert.equal(await daoVoter.votes(signer.address, testNum), true);
    // expect(await daoVoter.votes(signer.address, num)).to.be.true;
  });
});
