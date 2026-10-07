# Degree Attestation System

A secure, decentralized microservices-based platform for verifying and attesting academic degrees using blockchain smart contracts, automated with Docker and Docker Compose.

## 🏛️ Architecture Overview

The system is split into two independent, containerized microservices:

1. **Frontend (`degree-frontend/`)**: Built with **React, Vite, and Tailwind CSS**, running on Node 22. Provides the user interface for submitting and verifying degree records.
2. **Backend (`degree-backend/`)**: Built with **Hardhat and Solidity**, running on Node 18. Manages local blockchain simulation, smart contract compilation, and deployment.

---

## 🚀 Quick Start with Docker Compose

The entire application stack can be spun up simultaneously using Docker Compose without needing to install Node.js locally.

### Prerequisites
* [Docker Desktop](https://www.docker.com/) installed and running on your machine.

### Running the Application

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Sumaanalikhan/degree-attestation-system.git](https://github.com/Sumaanalikhan/degree-attestation-system.git)
   cd degree-attestation-system
# Degree Attestation System

A secure, decentralized microservices-based platform for verifying and attesting academic degrees using blockchain smart contracts, automated with Docker and Docker Compose.

## 🏛️ Architecture Overview

The system is split into two independent, containerized microservices:

1. **Frontend (`degree-frontend/`)**: Built with **React, Vite, and Tailwind CSS**, running on Node 22. Provides the user interface for submitting and verifying degree records.
2. **Backend (`degree-backend/`)**: Built with **Hardhat and Solidity**, running on Node 18. Manages local blockchain simulation, smart contract compilation, and deployment.

---

## 🚀 Quick Start with Docker Compose

The entire application stack can be spun up simultaneously using Docker Compose without needing to install Node.js locally.

### Prerequisites
* [Docker Desktop](https://www.docker.com/) installed and running on your machine.

### Running the Application

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Sumaanalikhan/degree-attestation-system.git](https://github.com/Sumaanalikhan/degree-attestation-system.git)
   cd degree-attestation-system

Spin up the containers:

Bash
docker compose up --build -d
Access the services:

Frontend UI: http://localhost:5173

Blockchain RPC Node: http://localhost:8545

Shut down the environment:

Bash
docker compose down
🛠️ Project Structure
Plaintext
<pre>
degree-attestation-system/
├── .github/
│   └── workflows/
│       └── ci.yml             # GitHub Actions CI pipeline configuration
├── degree-backend/            # Blockchain & Smart Contract tier (Node 18)
│   ├── contracts/             # Solidity smart contracts (.sol)
│   ├── Dockerfile
│   └── hardhat.config.js
├── degree-frontend/           # User Interface tier (Node 22)
│   ├── src/                   # React components & pages
│   ├── Dockerfile
│   └── vite.config.js
├── docker-compose.yml         # Multi-container orchestration blueprint
└── README.md
</pre>
🤖 CI/CD Pipeline
This repository features automated infrastructure validation using GitHub Actions. Every time code is pushed to the main or master branch, the CI server executes a test build of the Docker Compose stack to ensure container health and prevent deployment regressions.
