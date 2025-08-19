import React from 'react';
import { Edit3, Mail, Phone, MapPin, Calendar, Award } from 'lucide-react';
import Header from '../components/Header';

const Profile = () => {
  return (
    <div className="h-full bg-gray-50">
      <Header title="Profile" showBack />
      
      <div className="px-6 pt-4 pb-20">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                JD
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-bold text-gray-800">John Doe</h2>
                <p className="text-gray-500">Premium Member</p>
              </div>
            </div>
            <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200">
              <Edit3 className="h-5 w-5 text-gray-600" />
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">124</div>
              <div className="text-sm text-gray-500">Activities</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">89</div>
              <div className="text-sm text-gray-500">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">4.8</div>
              <div className="text-sm text-gray-500">Rating</div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Mail className="h-5 w-5 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="font-medium text-gray-800">john.doe@email.com</p>
                <p className="text-sm text-gray-500">Email Address</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <Phone className="h-5 w-5 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="font-medium text-gray-800">+1 (555) 123-4567</p>
                <p className="text-sm text-gray-500">Phone Number</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <MapPin className="h-5 w-5 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="font-medium text-gray-800">San Francisco, CA</p>
                <p className="text-sm text-gray-500">Location</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Information</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-gray-700">Member Since</span>
              </div>
              <span className="text-gray-800 font-medium">January 2023</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Award className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-gray-700">Status</span>
              </div>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;