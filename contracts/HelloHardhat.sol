// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.24;

import "./interfaces/IHelloHardhat.sol";

contract HelloHardhat is IHelloHardhat {
    string public message = "Hello World";

    function getMessage() public view returns (string memory) {
        return message;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }

    function clearMessage() external override {
        message = "";
    }
}
