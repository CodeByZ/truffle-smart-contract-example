pragma solidity ^0.4.22;

contract PayMe {

    event FundingEvent(address indexed from, uint256 value);

    constructor() public {
    }

    // fallback method to accept transfers
    function () public payable {
        FundingEvent(msg.sender, msg.value);
    }
}
