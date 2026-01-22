# 🏙️ CityServe

**Live Demo:** [https://cityserve-client.onrender.com/](https://cityserve-client.onrender.com/)

A full-stack web application that bridges the gap between citizens and municipal services. CityServe enables residents to easily request and track local city services while providing administrators with a secure dashboard to manage and monitor all service requests efficiently.

## 🚀 Tech Stack

### Frontend
- **React.js** - UI framework
- **Tailwind CSS** - Utility-first styling
- **Bootstrap** - Component library
- **Leaflet Maps** - Location-based service display

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **JWT** - Token-based authentication
- **bcrypt** - Password hashing

### Database
- **MongoDB** - NoSQL database

### Hosting
- **Render** - Backend & Frontend deployment

## ✨ Features

### For Citizens
- 👤 **User Registration & Login** - Secure account creation and authentication
- 🛠️ **Submit Service Requests** - Easy-to-use form for requesting city services
- 📊 **Track Requests** - Monitor the status of submitted requests in real-time
- 📍 **Location-Based Services** - Interactive map showing service areas

### For Administrators
- 🧾 **Admin Dashboard** - Centralized view of all service requests
- ✅ **Approve/Reject Requests** - Manage incoming service requests
- 📈 **Service Management** - Update request status and track completion
- 🔐 **Secure Access** - Role-based authentication and authorization

## 📋 Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git**

## 🛠️ Installation

### 1. Clone the Repository
```bash
git clone https://github.com/rajshekarparigi/cityserve.git
cd cityserve
```

### 2. Backend Setup
```bash
cd server
npm install
```

Start the backend server:
```bash
npm start
```

### 3. Frontend Setup
```bash
cd client
npm install
```

Start the frontend development server:
```bash
npm start
```

## 📁 Project Structure

```
cityServe/
│
├── client/                          # Frontend Application
│   ├── public/
│   ├── src/
│   │   ├── components/             # Reusable UI Components
│   │   │   ├── ComplaintCard.js
│   │   │   ├── Navbar.js
│   │   │   └── PrivateRoute.js
│   │   ├── context/                # React Context for State Management
│   │   │   └── AuthContext.js
│   │   ├── pages/                  # Page-level Components
│   │   │   ├── ComplaintForm.js
│   │   │   ├── DashboardAdmin.js
│   │   │   ├── DashboardCitizen.js
│   │   │   ├── Login.js
│   │   │   ├── MapView.js
│   │   │   └── Register.js
│   │   └── services/               # API Integration
│   │       └── api.js
│   ├── package.json
│   └── tailwind.config.js          # Tailwind CSS Configuration
│
├── server/                          # Backend Application
│   ├── config/                     # Configuration Files
│   │   └── db.js                   # Database Connection
│   ├── controllers/                # Business Logic
│   │   ├── authController.js
│   │   └── complaintController.js
│   ├── middleware/                 # Express Middleware
│   │   └── auth.js                 # Authentication Middleware
│   ├── models/                     # Database Models/Schemas
│   │   ├── Complaint.js
│   │   └── User.js
│   ├── routes/                     # API Routes
│   │   ├── auth.js
│   │   └── complaints.js
│   ├── seed.js                     # Database Seeding Script
│   └── server.js                   # Server Entry Point
│
└── README.md
```

## 🚀 Deployment

### Render Deployment
1. Push your code to GitHub
2. Connect your repository to Render
3. Create Web Services for both frontend and backend
4. Add environment variables in Render dashboard
5. Deploy the services

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

### Service Requests (Protected)
- `GET /api/requests` - Get user's requests
- `POST /api/requests` - Create new request
- `GET /api/requests/:id` - Get specific request
- `PUT /api/requests/:id` - Update request
- `DELETE /api/requests/:id` - Delete request

### Admin (Protected - Admin Only)
- `GET /api/admin/requests` - Get all requests
- `PUT /api/admin/requests/:id/status` - Update request status
- `GET /api/admin/stats` - Get dashboard statistics

## 🔑 User Roles

- **Citizen**: Can create, view, and manage their own service requests
- **Admin**: Can view all requests, approve/reject, and manage service statuses

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 👥 Author

- **Rajshekar Parigi** - [GitHub Profile](https://github.com/rajshekarparigi)

## 📧 Contact

For questions or support:
- Email: rajashekarmudiraj043@gmail.com
- GitHub: [@rajshekarparigi](https://github.com/rajshekarparigi)

---

⭐ If you find this project useful, please consider giving it a star on GitHub!

**Made with ❤️ for better civic engagement**
