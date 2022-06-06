const { messagePrefix } = require("@ethersproject/hash");
const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

describe("Test if a vote has been registered", function () {
  before("deploy instance of DaoVoter contract", async function () {
    // Have to use contractFactory to probvide ABI
    const VotingToken = await ethers.getContractFactory("VotingToken");
    // Deploy token first
    votingToken = await VotingToken.deploy();
    await votingToken.deployed();
    tokenAddress = votingToken.address;

    const DaoVoter = await ethers.getContractFactory("DaoVoter");
    //Use token address to allow IERC20 - balanceOf()
    daoVoter = await DaoVoter.deploy(tokenAddress);
    await daoVoter.deployed();
    // Why don't I have to declare the variable? ******************************* let, const
    signers = await ethers.provider.listAccounts();
    // [signer] = await ethers.provider.listAccounts(); ************************************
    // What's does this notation mean??
  });

  it("contract should be deployed", async function () {
    assert.equal(await daoVoter.owner(), signers[0]);
  });

  it.skip("token address should be stored on DaoVoters", async function () {
    console.log(votingToken.address);
    assert.equal(await daoVoter.token(), votingToken.address);
  });

  it("user should have ability to vote", async function () {
    console.log(signers[1]);
    const signer = await ethers.getSigner(signers[1]);
    const num = 23;

    await daoVoter.connect(signer).vote(num, true);
    // Unable to access the variable storedint the mapping using js. It works via remix!!
    // console.log(daoVoter.votes[signer.address][num].bool);
    assert.equal(daoVoter.votes[signer.address][num] == true);
  });
});
