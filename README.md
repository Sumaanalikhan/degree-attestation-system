# Decentralized Degree Attestation System

An automated, blockchain-backed microservices platform designed to cryptographically verify and attest academic credentials. This system eliminates fraudulent credentials by combining Optical Character Recognition (OCR) for document parsing with immutable Solidity smart contracts for permanent record-keeping.

This project is architected as a distributed multi-tier application to demonstrate modern DevOps practices, including multi-container orchestration and local bridge networking.

## 🏗️ System Architecture

The application is split into three distinct, decoupled services:

1. **Frontend Client:** A React.js user interface handling document uploads and user interaction.
2. **Validation Engine:** A Node.js service utilizing Tesseract.js to perform OCR on uploaded degrees, extracting and verifying text data.
3. **Blockchain Network:** A local Ethereum node deployed via Hardhat, managing the Solidity smart contracts that permanently store the verified attestation hashes.

## 🛠️ Technology Stack

* **Frontend:** React.js, JavaScript, HTML/CSS
* **Smart Contracts:** Solidity, Hardhat, Ethers.js
* **Processing:** Tesseract.js (OCR)
* **DevOps & Infrastructure:** Docker, Docker Compose, Internal Bridge Networking (Implementation In Progress)

## 🚀 Getting Started (Local Development)

*Note: This project is currently migrating to a fully containerized Docker Compose environment. For now, services must be spun up independently.*

### Prerequisites
* Node.js (v16+)
* npm or yarn
* Git

### 1. Start the Blockchain Network (Hardhat)
```bash
# Navigate to the smart contracts directory (adjust path as needed)
cd backend 
npm install
npx hardhat node
