import React from 'react';
import { Link } from 'react-router-dom';

const Navigationbar: React.FC = () => {
  return (
    <nav className="bg-blue-600">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link to="/">Employee Management</Link>
        </div>
        <div>
          <Link
            to="/"
            className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Employee List
          </Link>
          <Link
            to="/add"
            className="ml-4 text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Add Employee
          </Link>
          <Link
            to="/search"
            className="ml-4 text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Search Employee
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigationbar;
