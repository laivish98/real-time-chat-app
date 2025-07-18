# Real-Time Chat App

**COMPANY**: CODTECH IT SOLUTIONS  
**NAME**: Laivish Sharma  
**INTERN ID**: CT06DF1875  
**DOMAIN**: MERN STACK WEB DEVELOPMENT  
**DURATION**: 6 WEEKS  
**MENTOR**: NEELA SANTOSH  

A real-time chat application built with the MERN stack using **React**, **Node.js**, **Express**, and **Socket.IO**. The application allows multiple users to join and chat instantly with real-time communication powered by WebSockets.

---

## 🚀 Features

- 💬 Real-time messaging with Socket.IO  
- 🧑‍🤝‍🧑 Join with a unique username  
- 🟢 See users join and leave in real-time  
- 🧠 Clean and intuitive chat interface  
- ⚡ Responsive UI for desktop and mobile  
- 🌐 Works over local network (LAN)

---

## 🛠️ Tech Stack

- **Frontend**: React, JavaScript, CSS  
- **Backend**: Node.js, Express  
- **WebSocket**: Socket.IO  
- **Deployment**: (Optional: add Vercel/Render/Heroku if deployed)

---

## 🧑‍💻 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/laivish98/real-time-chat-app.git
cd real-time-chat-app

2. Install Dependencies
# In root directory for backend
npm install

# If you have frontend in /client
cd client
npm install

3. Configure IP for Local Network Access
To access the chat app from another device (e.g. phone) on the same Wi-Fi:

Step 1: Find your local IP address (on host PC)

Step 2: Update frontend to connect to backend
In your React frontend code, wherever you connect to the server via Socket.IO:

js
const socket = io("http://192.168.1.7:5000");
Replace 192.168.1.7 with your actual IPv4 address and 5000 with your backend port.

4. Run the App 
# In backend directory
node server.js

# In frontend (React)
npm start
Now open the app on another device using your PC's IP:


📁 Project Structure
bash
Copy code
real-time-chat-app/
├── client/
│   ├── public/
│   ├── src/
│   ├── App.js
│   └── index.js
├── server.js
├── package.json
├── .gitignore
└── README.md


```
📸 Output Screenshots
🧑‍💻 Join Page
<img width="593" height="307" alt="Image" src="https://github.com/user-attachments/assets/e94cac08-ba51-46b8-9489-98c7186b39cf" />


💬 Chat Interface
<img width="737" height="825" alt="Image" src="https://github.com/user-attachments/assets/af54d7eb-8032-4972-bdd2-d24d212ba1ee" />


📡 Real-Time Messaging
<img width="847" height="659" alt="Image" src="https://github.com/user-attachments/assets/81da9905-218d-4592-b5da-64e89d0d266f" />

👨‍💻 Author
Laivish Sharma
Intern @ CodTech IT Solutions

