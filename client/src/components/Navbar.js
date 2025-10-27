import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { MapPin, LogOut, User, LayoutDashboard } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
            <MapPin size={28} />
            <span>CityServe</span>
          </Link>

          {user && (
            <div className="flex items-center space-x-6">
              <Link
                to="/dashboard"
                className="flex items-center space-x-2 hover:text-blue-200 transition"
              >
                <LayoutDashboard size={20} />
                <span>Dashboard</span>
              </Link>
              
              <Link
                to="/map"
                className="flex items-center space-x-2 hover:text-blue-200 transition"
              >
                <MapPin size={20} />
                <span>Map View</span>
              </Link>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <User size={20} />
                  <span className="text-sm">
                    {user.name}
                    {user.role === 'admin' && (
                      <span className="ml-2 px-2 py-1 bg-yellow-500 text-xs rounded">
                        Admin
                      </span>
                    )}
                  </span>
                </div>

                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 hover:text-blue-200 transition"
                >
                  <LogOut size={20} />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;