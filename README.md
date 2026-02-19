# 🤖 AI Learning Assistant
Intelligent AI-Powered Learning & Query Support Platform

Build Status • MERN Stack • LLM Integration • License

AI Learning Assistant is a full-stack AI-powered web application designed to help users learn concepts, generate explanations, and get intelligent responses in real time. 
The system integrates Large Language Models (LLMs) with a scalable MERN architecture to provide interactive and personalized learning support.

Project Deployed on Vercel - https://ai-learning-assistant-ebon.vercel.app/login

# 🏗️ System Architecture

The application follows a full-stack architecture:

Frontend: React-based dynamic UI for real-time interaction

Backend: Node.js + Express REST APIs

Database: MongoDB for storing users, prompts, and responses

AI Layer: LLM API integration for intelligent content generation

The system ensures smooth data flow between client, server, and AI services.

# 🚀 Key Features
## 🧠 AI-Powered Query Engine

Real-time AI response generation using Large Language Models

Dynamic prompt handling and structured response formatting

Context-aware learning assistance

## 👤 Authentication & User Management

Secure JWT-based authentication

Protected routes for authorized users

Session-based query tracking

## 📊 Learning Interaction

Stores user queries and AI responses for reference

Clean, responsive interface for seamless interaction

Fast API response handling with error management

## ⚙️ Backend Architecture

RESTful API design for scalable communication

Modular controller-service structure

Input validation and centralized error handling

## 📸 UI Overview

Landing Page

Login / Registration

AI Chat / Learning Interface

Response History Dashboard

# 🛠️ Technology Stack
| Category | Technology Used     | Purpose                         |
| -------- | ------------------- | ------------------------------- |
| Frontend | React.js            | UI & User Interaction           |
| Backend  | Node.js, Express.js | API & Business Logic            |
| Database | MongoDB             | Data Storage                    |
| AI Layer | LLM API             | Intelligent Response Generation |
| Security | JWT                 | Authentication                  |
| Tools    | Postman             | API Testing                     |

# ⚡ Getting Started
Prerequisites

Node.js (v18+)

MongoDB (Local or Cloud)

API Key for LLM Service (Gemini or Claude)

# 🔧 Installation

Clone the repository:
 - `git clone https://github.com/yourusername/ai-learning-assistant.git`
 - `cd ai-learning-assistant`

# Install dependencies:
## Backend
cd server
npm install

## Frontend
cd client
npm install

Create a .env file inside the backend folder:
 - PORT=5000
 - MONGO_URI=your_mongodb_connection_string
 - JWT_SECRET=your_secret_key
 - LLM_API_KEY=your_api_key

# Run the application:
## Backend
npm run dev

## Frontend
npm run dev

 - Frontend: http://localhost:3000
 - Backend API: http://localhost:8000

# 📚 API Endpoints
| Method | Endpoint                     | Description             | 
| ------ | ---------------------------- | ----------------------- | 
| POST   | /api/auth/register           | Register user           | 
| POST   | /api/auth/login              | Login user              | 
| POST   | /api/ai/generate-flashcards  | Generates Flashcards    | 
| POST   | /api/ai/generate-quiz        | Generates Quizzes       | 
| POST   | /api/ai/generate-summay      | Generates Summary       | 
| POST   | /api/ai/chat                 | Login user              | 
| GET    | /api/documents               | Fetch user Documents    | 
| GET    | /api/flashcards              | Fetch user Flashcards   | 
| GET    | /api/quizzes                 | Fetch user Quizzes      | 


# 🔐 Security

JWT-based stateless authentication

Password hashing for secure credential storage

Environment variable protection for API keys

# 🧩 Future Enhancements

Context memory for multi-turn conversations

Role-based access control

Usage-based token tracking

AI model customization

# 🤝 Contributing

Contributions are welcome!

Fork the repository

Create a feature branch

Commit your changes

Push and open a Pull Request



