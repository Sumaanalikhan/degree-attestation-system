// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract DegreeAttestation {
    struct Degree {
        address student;
        string name;
        string ipfsCid;
        uint256 timestamp;
        bool valid;
    }

    mapping(uint256 => Degree) public degrees;
    uint256 public degreeCount;

    event DegreeAttested(uint256 indexed id, address student, string name, string ipfsCid);

    function attestDegree(string memory name, string memory ipfsCid) public {
        degreeCount++;
        degrees[degreeCount] = Degree({
            student: msg.sender,
            name: name,
            ipfsCid: ipfsCid,
            timestamp: block.timestamp,
            valid: true
        });

        emit DegreeAttested(degreeCount, msg.sender, name, ipfsCid);
    }

    function getDegree(uint256 id) public view returns (Degree memory) {
        return degrees[id];
    }
}
