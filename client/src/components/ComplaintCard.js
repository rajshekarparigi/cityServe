import React from 'react';
import { MapPin, Calendar, AlertCircle } from 'lucide-react';

const ComplaintCard = ({ complaint, onClick }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'resolved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'text-red-600';
      case 'medium':
        return 'text-orange-600';
      case 'low':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition cursor-pointer border border-gray-200"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900 flex-1">
          {complaint.title}
        </h3>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
            complaint.status
          )}`}
        >
          {complaint.status.replace('-', ' ').toUpperCase()}
        </span>
      </div>

      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
        {complaint.description}
      </p>

      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
        <div className="flex items-center gap-1">
          <MapPin size={16} />
          <span className="capitalize">{complaint.category}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar size={16} />
          <span>{formatDate(complaint.createdAt)}</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-gray-200">
        <div className="flex items-center gap-1">
          <AlertCircle size={16} className={getPriorityColor(complaint.priority)} />
          <span className={`text-sm font-medium ${getPriorityColor(complaint.priority)}`}>
            {complaint.priority.toUpperCase()} Priority
          </span>
        </div>
        {complaint.location?.address && (
          <span className="text-xs text-gray-400 truncate max-w-[200px]">
            {complaint.location.address}
          </span>
        )}
      </div>
    </div>
  );
};

export default ComplaintCard;