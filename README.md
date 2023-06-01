# 🌐 Blockchain Acil Durum Bilgilendirme Sistemi (BABİL)

This repository contains the "BABİL Emergency Communication System," which includes both a Solidity smart contract and a web application. BABİL allows users to create, manage, and donate to disaster events on the Ethereum blockchain. This system serves as a foundation for an efficient and transparent emergency communication platform during crises.

## Web Version

You can access the web version of the BABİL Emergency Communication System through the following link: [BABİL Web Version](https://babil.vercel.app/).

### Using MetaMask

When using the web version, please ensure that you have MetaMask installed and set to the Sepolia test network for testing purposes.

## Frontend with Next.js

The frontend of this project is developed using Next.js.

## Web3.js Integration

Web3.js, a popular JavaScript library for Ethereum interactions, is used within the Next.js project to interact with the Ethereum blockchain and the BABİL smart contract. This integration enables seamless communication between the web application and the blockchain, allowing users to create events, make donations, and retrieve information in a secure and decentralized manner.

## Features

- 📢 **Create Disaster Events**: The contract allows the owner to create new disaster events, specifying event type, description, and location.

- 📊 **Track Event Status**: Events can be in "pending," "ongoing," or "resolved" states, providing real-time information about disaster situations.

- 💰 **Accept Donations**: Users can make donations to specific events, contributing to disaster relief efforts.

- 📋 **Retrieve Event Information**: Users can retrieve event details, including event type, description, location, status, and donation amount.

- 💸 **Track Total Donations**: The contract maintains a record of the total donations made for all events.

## Contract Details

### Functions

- 🌟 **Create Event**: Allows the contract owner to create a new disaster event with the provided details and returns the event ID.

- 📜 **Get Event**: Retrieves details of a specific event, including ID, type, description, timestamp, location, status, and donation amount.

- 📈 **Get Event Count**: Returns the total number of created events.

- 💲 **Add Donation**: Allows users to make donations to a specific event. Donations are associated with the event and contribute to its donation amount.

- 💰 **Get Total Donations**: Returns the total amount of donations received across all events.

- 💸 **Get Event Total Donation**: Retrieves the total donation amount for a specific event.

### Statuses

- Events have one of the following statuses: "pending," "ongoing," or "resolved."

### Modifiers

- 🔐 **Only Owner**: Ensures that only the contract owner can perform certain actions, such as creating events.

### Data Structures

- 📅 **Disaster Event**: A struct representing a disaster event with fields for ID, event type, description, timestamp, location, status, and donation amount.

## Getting Started

To use the BABİL Emergency Communication System and create an emergency communication platform, follow these steps:

1. 🚀 **Deploy the Contract**: Deploy the `DisasterEventTracker` contract on the Ethereum blockchain.

2. 🧑‍💼 **Set Ownership**: Set the contract owner to a secure Ethereum address that will manage the system.

3. 🌐 **Utilize Functions**: Use the contract functions to create disaster events, track event statuses, accept donations, and retrieve event information.

## Security Considerations

- Ensure that the contract owner's address is secure and adequately protected to prevent unauthorized access.

- Verify and validate the inputs provided when creating events and making donations to prevent potential vulnerabilities.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

The BABİL Emergency Communication System was developed to address the need for a reliable and transparent emergency communication platform on the Ethereum blockchain. We hope this system contributes to disaster relief efforts and enhances community resilience during critical times.

Contributions to and improvements of this project are highly encouraged and appreciated. Together, we can make emergency communication more accessible and efficient. 🤝
