import React, { useState } from 'react';
import { getEmployeeByEmployeeId } from '../apis/employeeService';
import UpdateEmployeeForm from './subcomponents/UpdateEmployeeForm';

const SearchEmployee: React.FC = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [employee, setEmployee] = useState<any>(null);
  const [edit, setEdit] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await getEmployeeByEmployeeId(employeeId);
      setEmployee(response.data);
    } catch (error) {
      console.error('Employee not found', error);
      setEmployee(null);
    }
  };

  const handleEditClick = () => {
    setEdit(true);
  }

  const handleCloseModel = () => {
    setEdit(false);
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Search Employee</h2>
      <div className="mb-4">
        <label className="text-gray-700 text-sm font-bold mb-2">Search employee by Employee ID:</label>
        <input
          type="text"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          placeholder="Enter Employee ID"
          className="ms-12 px-4 py-2 border rounded"
        />
        <button
          onClick={handleSearch}
          className="ms-2 mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>
      {employee && (
        <>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <div className="flex-grow">
                <h3 className="text-lg font-bold">Employee Details</h3>
              </div>
              <button onClick={handleEditClick} className='bg-red-600 text-white p-2 ps-7 pe-7 rounded-md'>Edit</button>
            </div>
            <p><strong>Name:</strong> {employee?.name}</p>
            <p><strong>Employee ID:</strong> {employee?.employeeId}</p>
            <p><strong>Email:</strong> {employee?.email}</p>
            <p><strong>Position:</strong> {employee?.position}</p>
            <p><strong>Salary:</strong> {employee?.salary}</p>
          </div>

          {edit && 
            <UpdateEmployeeForm employee={employee} onClose={handleCloseModel} />
          }
        </>
      )}
    </div>
  );
};

export default SearchEmployee;
