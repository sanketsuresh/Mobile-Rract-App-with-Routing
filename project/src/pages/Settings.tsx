import React, { useState } from 'react';
import { Bell, Lock, Palette, Globe, HelpCircle, LogOut, ChevronRight } from 'lucide-react';
import Header from '../components/Header';

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const settingsGroups = [
    {
      title: "Preferences",
      items: [
        { 
          icon: Bell, 
          label: "Notifications", 
          type: "toggle",
          value: notifications,
          onChange: setNotifications
        },
        { 
          icon: Palette, 
          label: "Dark Mode", 
          type: "toggle",
          value: darkMode,
          onChange: setDarkMode
        },
        { 
          icon: Globe, 
          label: "Language", 
          type: "link",
          value: "English"
        }
      ]
    },
    {
      title: "Account",
      items: [
        { 
          icon: Lock, 
          label: "Privacy & Security", 
          type: "link"
        },
        { 
          icon: HelpCircle, 
          label: "Help & Support", 
          type: "link"
        }
      ]
    }
  ];

  return (
    <div className="h-full bg-gray-50">
      <Header title="Settings" showBack />
      
      <div className="px-6 pt-4 pb-20">
        {settingsGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-6">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3 px-2">
              {group.title}
            </h3>
            
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {group.items.map((item, itemIndex) => (
                <div key={itemIndex} className={`p-4 ${itemIndex !== group.items.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-gray-600" />
                      </div>
                      <div className="ml-4">
                        <p className="font-medium text-gray-800">{item.label}</p>
                        {item.value && item.type === 'link' && (
                          <p className="text-sm text-gray-500">{item.value}</p>
                        )}
                      </div>
                    </div>
                    
                    {item.type === 'toggle' ? (
                      <button
                        onClick={() => item.onChange && item.onChange(!item.value)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                          item.value ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                            item.value ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    ) : (
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Logout Button */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <button className="w-full p-4 flex items-center hover:bg-red-50 transition-colors duration-200">
            <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
              <LogOut className="h-5 w-5 text-red-600" />
            </div>
            <span className="ml-4 font-medium text-red-600">Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;