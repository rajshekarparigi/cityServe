# 🏙️ CityServe

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
- **Render** - Backend deployment
- **Vercel** - Frontend deployment (configurable)

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

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git**

## 🛠️ Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/cityserve.git
cd cityserve
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

Start the backend server:
```bash
npm start
```

### 3. Frontend Setup
```bash
cd frontend
npm install
```

Create a `.env` file in the frontend directory:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

Start the frontend development server:
```bash
npm start
```

The application should now be running at `http://localhost:3000`

## 📁 Project Structure

```
cityServe/
│
├── client/                          # Frontend Application
│   ├── node_modules/
│   ├── public/
│   │   └── index.html
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
│   ├── .gitignore
│   ├── package-lock.json
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
│   ├── node_modules/
│   ├── .env                        # Environment Variables
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── seed.js                     # Database Seeding Script
│   ├── server.js                   # Server Entry Point
│                 
│
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── README.md
```

## 🚀 Deployment

### Backend (Render)
1. Push your code to GitHub
2. Connect your repository to Render
3. Create a new Web Service
4. Configure the following:
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
5. Add environment variables in Render dashboard:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `NODE_ENV=production`
6. Deploy the service

### Frontend (Vercel)
1. Push your code to GitHub
2. Import project in Vercel
3. Configure:
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend`
4. Add environment variables:
   - `REACT_APP_API_URL` (your Render backend URL)
5. Deploy the application

## 🔐 Environment Variables

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/cityserve
JWT_SECRET=your_super_secret_jwt_key_here
NODE_ENV=development
```

### Frontend (.env)
```env
REACT_APP_API_URL=http://localhost:5000/api
```

For production, update `REACT_APP_API_URL` to your deployed backend URL.

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- `POST /api/auth/login` - User login
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```

### Service Requests (Protected)
- `GET /api/requests` - Get user's requests
- `POST /api/requests` - Create new request
  ```json
  {
    "serviceType": "Road Repair",
    "description": "Pothole on Main Street",
    "location": {
      "address": "123 Main St",
      "coordinates": [40.7128, -74.0060]
    }
  }
  ```
- `GET /api/requests/:id` - Get specific request
- `PUT /api/requests/:id` - Update request
- `DELETE /api/requests/:id` - Delete request

### Admin (Protected - Admin Only)
- `GET /api/admin/requests` - Get all requests
- `PUT /api/admin/requests/:id/status` - Update request status
  ```json
  {
    "status": "approved"
  }
  ```
- `GET /api/admin/stats` - Get dashboard statistics

## 🔑 User Roles

- **Citizen**: Can create, view, and manage their own service requests
- **Admin**: Can view all requests, approve/reject, and manage service statuses

## 🧪 Testing

### Backend Tests
```bash
cd backend
npm test
```

### Frontend Tests
```bash
cd frontend
npm test
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

### Code Style Guidelines
- Use ES6+ JavaScript features
- Follow Airbnb JavaScript Style Guide
- Write meaningful commit messages
- Add comments for complex logic
- Ensure all tests pass before submitting PR

## 🐛 Known Issues

- Map markers may not load on slow connections
- Email notifications are not yet implemented

## 🗺️ Roadmap

- [ ] Email notifications for request status updates
- [ ] Mobile app (React Native)
- [ ] Real-time chat support
- [ ] Payment integration for paid services
- [ ] Advanced analytics dashboard
- [ ] Multi-language support


## 👥 Authors

- **Your Name** - [GitHub Profile](https://github.com/rajshekarparigi)

## 🙏 Acknowledgments

- Thanks to all contributors who have helped shape CityServe
- Inspired by the need for better citizen-government communication
- Built with modern web technologies for scalability and performance
- Special thanks to the open-source community for amazing tools and libraries

## 📧 Contact

For questions or support, please reach out:
- Email: rajashekarmudiraj043@gmail.com
- GitHub: [@yourusername](https://cityserve-client.onrender.com/)
- Website: [cityserve.com]()



---

⭐ If you find this project useful, please consider giving it a star on GitHub!

**Made with ❤️ for better civic engagement**
