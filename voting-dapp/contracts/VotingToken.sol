//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";

// npm i @openzeppelin/contracts
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract VotingToken is ERC20 {
    uint constant initialSupply = 10000 * 1e18;

    constructor() ERC20("VotingToken", "VOTE") {
        _mint(msg.sender, initialSupply);
    }
}
