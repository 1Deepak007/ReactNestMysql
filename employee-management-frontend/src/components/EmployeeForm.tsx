import React, { useState } from 'react';
import { createEmployee, updateEmployee } from '../apis/employeeService';

interface EmployeeFormProps {
  employeeId?: number;
  initialValues?: any;
  onSave: () => void;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({ employeeId, initialValues, onSave }) => {
  const [formValues, setFormValues] = useState(initialValues || { name: '', employeeId: '', email:'', position:'' });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (employeeId) {
      await updateEmployee(employeeId, formValues);
    } else {
      await createEmployee(formValues);
    }
    onSave();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto p-4">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="employeeId">
          Employee ID
        </label>
        <input
          type="text"
          name="employeeId"
          value={formValues.employeeId}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="employeeId">
          Email
        </label>
        <input
          type="text"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="employeeId">
          Designation
        </label>
        <input
          type="text"
          name="position"
          value={formValues.position}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="employeeId">
          Salary
        </label>
        <input
          type="number"
          name="salary"
          value={formValues.salary}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Save
      </button>
    </form>
  );
};

export default EmployeeForm;
