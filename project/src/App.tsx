import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-4">
      <div className="w-[375px] h-[812px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden relative">
        <Router>
          <div className="h-full flex flex-col">
            <div className="flex-1 overflow-y-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
            <Navigation />
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;