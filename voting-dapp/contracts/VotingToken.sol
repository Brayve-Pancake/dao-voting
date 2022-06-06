//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

// npm i @openzeppelin/contracts
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract VoterToken is ERC20 {
    uint constant initialSupply = 10000 * 1e18;

    constructor() ERC20("VoterToken", "VOTE") {
        _mint(msg.sender, initialSupply);
    }
}
