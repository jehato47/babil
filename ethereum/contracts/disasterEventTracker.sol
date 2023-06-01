// SPDX-License-Identifier: MIT
pragma solidity ^0.4.17;

contract DisasterEventTracker {
    struct DisasterEvent {
        uint256 id;
        string eventType;
        string description;
        uint256 timestamp;
        string location;
        bytes32 status; // "pending", "ongoing", "resolved"
        uint256 donationAmount;
    }

    uint256 private counter = 0;
    mapping(uint256 => DisasterEvent) public disasterEvents;
    address public owner;

    uint256 private totalDonations = 0;

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function DisasterEventTracker() public {
        owner = msg.sender;
    }

    function createEvent(
        string memory _eventType,
        string memory _description,
        string memory _location
    ) public onlyOwner returns (uint256) {
        counter++;
        disasterEvents[counter] = DisasterEvent(
            counter,
            _eventType,
            _description,
            block.timestamp,
            _location,
            keccak256("pending"),
            0
        );
        return counter;
    }

    function getEvent(uint256 _id)
        public
        view
        returns (
            uint256,
            string memory,
            string memory,
            uint256,
            string memory,
            string memory,
            uint256
        )
    {
        return (
            disasterEvents[_id].id,
            disasterEvents[_id].eventType,
            disasterEvents[_id].description,
            disasterEvents[_id].timestamp,
            disasterEvents[_id].location,
            getStatus(disasterEvents[_id].status),
            disasterEvents[_id].donationAmount
        );
    }

    function getEventCount() public view returns (uint256) {
        return counter;
    }

    function addDonation(uint256 _id, uint256 _donationAmount) public payable {
        require(_id <= counter);
        
        disasterEvents[_id].donationAmount += _donationAmount;
        totalDonations += _donationAmount;
    }

    function getTotalDonations() public view returns (uint256) {
        return totalDonations;
    }

    function getEventTotalDonation(uint256 _id) public view returns (uint256) {
        require(_id <= counter);
        return disasterEvents[_id].donationAmount;
    }

    function getStatus(bytes32 _status) private pure returns (string memory) {
        if (_status == keccak256("pending")) {
            return "pending";
        } else if (_status == keccak256("ongoing")) {
            return "ongoing";
        } else if (_status == keccak256("resolved")) {
            return "resolved";
        } else {
            return "unknown";
        }
    }
}
