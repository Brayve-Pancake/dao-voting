//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract DaoVoter {
    // store wallet votes on proposed new contracts (use string for first V.)
    mapping(address => mapping(uint256 => bool)) public votes;
    address public owner;
    address public token; //0x5FbDB2315678afecb367f032d93F642f64180aa3

    constructor(address _token) {
        owner = msg.sender;
        token = _token;
    }

    function vote(uint256 _proposal, bool decision) external validVoter {
        votes[msg.sender][_proposal] = decision;
    }

    modifier validVoter() {
        require(IERC20(token).balanceOf(msg.sender) >= 0);
        _;
    }
}
