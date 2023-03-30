//SPDX-License-Identifier: MIT

pragma solidity 0.8.19;
 
contract Example {

    uint256 public x;
    string public str;
    uint256[] public data;

    function setX(uint256 _x)public {
        x = _x;
    }

    function setStr(string memory _str)public{
        str = _str;
    }

    function addElem(uint256 elem)public {
        data.push(elem);
    }
}