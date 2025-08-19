import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bell, Search, Heart, Star } from 'lucide-react';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="h-full bg-gradient-to-b from-blue-50 to-white">
      <Header title="Welcome Back" showNotification />
      
      <div className="px-6 pt-4 pb-20">
        {/* Welcome Card */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white mb-6">
          <h2 className="text-2xl font-bold mb-2">Good Morning!</h2>
          <p className="text-blue-100 mb-4">Ready to start your day?</p>
          <Link 
            to="/profile"
            className="inline-flex items-center bg-white bg-opacity-20 px-4 py-2 rounded-xl text-sm font-medium hover:bg-opacity-30 transition-all duration-200"
          >
            View Profile <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200"
          />
        </div>

        {/* Quick Actions */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <Link 
              to="/profile"
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                <Heart className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-medium text-gray-800">My Profile</h4>
              <p className="text-sm text-gray-500">View details</p>
            </Link>
            
            <Link 
              to="/settings"
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-3">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-medium text-gray-800">Settings</h4>
              <p className="text-sm text-gray-500">Customize app</p>
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {[
              { title: "Profile Updated", time: "2 hours ago", color: "bg-green-100 text-green-600" },
              { title: "Settings Changed", time: "Yesterday", color: "bg-blue-100 text-blue-600" },
              { title: "Welcome Message", time: "2 days ago", color: "bg-purple-100 text-purple-600" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-800">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.time}</p>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${item.color.split(' ')[0]}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;