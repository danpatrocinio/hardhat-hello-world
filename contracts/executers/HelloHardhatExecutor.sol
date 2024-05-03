// SPDX-License-Identifier: MIT 

pragma solidity ^0.8.24;

import "../interfaces/IHelloHardhat.sol";

contract HelloHardhatExecutor {

    function execSetMessage(string memory newMessage, address location) public {
        IHelloHardhat contrato = IHelloHardhat(location);
        contrato.setMessage(newMessage);
    }

}