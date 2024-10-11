import React from 'react'
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import UserContextProvider from './context/userContext/UserContextProvider';

const App = () => {
  return (
    <UserContextProvider>
        <Router>
        <div className="w-full h-screen bg-zinc-900 border-t border-zinc-900">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
      </div>
        </Router>
    </UserContextProvider>
  );
}

export default App;
