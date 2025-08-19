import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bell } from 'lucide-react';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  showNotification?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, showBack, showNotification }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white px-6 py-4 border-b border-gray-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {showBack && (
            <button 
              onClick={() => navigate(-1)}
              className="mr-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </button>
          )}
          <h1 className="text-xl font-bold text-gray-800">{title}</h1>
        </div>
        
        {showNotification && (
          <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;