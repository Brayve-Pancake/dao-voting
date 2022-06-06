//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract DaoVoter {
    // store wallet votes on proposed new contracts
    mapping(address => mapping(address => bool)) votes;
    address owner;

    constructor() {
        owner = msg.sender;
    }
}
