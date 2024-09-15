import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import Navigationbar from './components/subcomponents/Navar';
import SearchEmployee from './components/SearchEmployee';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navigationbar /> {/* Include the Navbar at the top */}
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<EmployeeList />} />
            <Route path="/add" element={<EmployeeForm onSave={() => {}} />} />
            <Route path="/search" element={<SearchEmployee />} />
            {/* Add other routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
