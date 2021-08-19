import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-gray-300">
      <header className="fixed top-0 right-0 left-0 bg-white shadow-md z-30">
        <div className="flex max-w-screen-xl mx-auto py-4">
          <Link to="/">
            <div className="text-3xl font-bold font-mono">Moview DB</div>
          </Link>
        </div>
      </header>
      {children}
    </div>
  );
};

export default Layout;
