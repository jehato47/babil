// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract DisasterEventTracker {
    struct DisasterEvent {
        uint256 id;
        string eventType;
        string description;
        uint256 timestamp;
        string location;
        string status; // "pending", "ongoing", "resolved"
    }

    uint256 private counter = 0;
    mapping(uint256 => DisasterEvent) public disasterEvents;
    address public owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    constructor() {
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
            "pending"
        );
        return counter;
    }

    function updateEventStatus(uint256 _id, string memory _status)
        public
        onlyOwner
    {
        require(
            keccak256(abi.encodePacked(disasterEvents[_id].status)) !=
                keccak256(abi.encodePacked(_status)),
            "This status is already set for this event."
        );
        disasterEvents[_id].status = _status;
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
            string memory
        )
    {
        return (
            disasterEvents[_id].id,
            disasterEvents[_id].eventType,
            disasterEvents[_id].description,
            disasterEvents[_id].timestamp,
            disasterEvents[_id].location,
            disasterEvents[_id].status
        );
    }
}
