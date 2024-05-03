// SPDX-License-Identifier: SEE LICENSE IN LICENSE

pragma solidity ^0.8.24;

interface IHelloHardhat {
    
    function getMessage() external view returns (string memory);

    function setMessage(string memory) external;

    function clearMessage() external;

}