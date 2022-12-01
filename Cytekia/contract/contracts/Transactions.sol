//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCount;

    event Transfer(
        address from,
        address receiver,
        uint256 amount,
        string firstName,
        string lastName,
        uint256 timestamp,
        uint256 cin,
        string email
    );

    struct TransferStruct {
        address from;
        address receiver;
        uint256 amount;
        // string message;
        string firstName;
        string lastName;
        uint256 timestamp;
        uint256 cin;
        string email;
    }

    TransferStruct[] transactions;

    function addToBlockchain(
        address payable receiver,
        uint256 amount,
        uint256 cin,
        string calldata firstName,
        string calldata lastName,
        string calldata email
    ) public {
        transactionCount += 1;
        transactions.push(
            TransferStruct(
                msg.sender,
                receiver,
                amount,
                firstName,
                lastName,
                block.timestamp,
                cin,
                email
            )
        );

        emit Transfer(
            msg.sender,
            receiver,
            amount,
            firstName,
            lastName,
            block.timestamp,
            cin,
            email
        );
    }

    function getAllTransactions()
        public
        view
        returns (TransferStruct[] memory)
    {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}
