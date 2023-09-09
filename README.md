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

To set up and run the BABİL Emergency Communication System web application using Next.js, follow these steps:

1. 📁 **Clone the Next.js App**: Clone the Next.js app repository by running the following command in your terminal:

   ```bash
   git clone https://github.com/jehato47/babil.git
   ```	

2. 🏗️ Install Dependencies: Navigate to the cloned directory and install the project dependencies:
   ```
   cd babil
   npm install
   ```

3. ⚙️ Configuration: Configure the application to connect to the Ethereum blockchain. You may need to set up environment variables or update the Web3.js configuration with the appropriate Ethereum network and contract addresses.
   
4. 🚀 Run the Application: Start the Next.js application:
   ```
    npm run dev
    ```
    
    The application should now be running locally and accessible at `http://localhost:3000`.


## Security Considerations

- Ensure that the contract owner's address is secure and adequately protected to prevent unauthorized access.

- Verify and validate the inputs provided when creating events and making donations to prevent potential vulnerabilities.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

The BABİL Emergency Communication System was developed to address the need for a reliable and transparent emergency communication platform on the Ethereum blockchain. We hope this system contributes to disaster relief efforts and enhances community resilience during critical times.

Contributions to and improvements of this project are highly encouraged and appreciated. Together, we can make emergency communication more accessible and efficient. 🤝
