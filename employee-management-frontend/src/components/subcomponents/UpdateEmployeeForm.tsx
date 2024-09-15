import React, { useState } from 'react';
import { getAllEmployees, updateEmployee } from '../../apis/employeeService';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface Employee {
    id: number;
    name: string;
    email: string;
    position: string;
    salary: number;
}

interface UpdateEmployeeFormProps {
    employee: Employee;
    onClose: () => void;
}

const UpdateEmployeeForm: React.FC<UpdateEmployeeFormProps> = ({ employee, onClose }) => {
    const [name, setName] = useState(employee.name);
    const [email, setEmail] = useState(employee.email);
    const [position, setPosition] = useState(employee.position);
    const [salary, setSalary] = useState(employee.salary.toString());

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Create the payload dynamically
        const payload = {
            id: employee.id,
            name,
            email,
            position,
            salary: parseFloat(salary), // Ensure salary is a number
        };

        try {
            // Call the updateEmployee API with the updated payload
            await updateEmployee(employee.id, payload);
            console.log('Employee updated successfully.');
            toast.success('Employee updated successfully!', {
                position: 'top-right', // Use position string directly
            });

            // Close the modal after successful submission
            onClose();

        } catch (error) {
            // Handle any errors that occur during the API call
            console.error('Error updating employee:', error);
            alert('Failed to update employee. Please try again.');
        }
        getAllEmployees();
    };


    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="position" className="block mb-2 text-sm font-medium text-gray-900">Position</label>
                <input
                    type="text"
                    id="position"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="salary" className="block mb-2 text-sm font-medium text-gray-900">Salary</label>
                <input
                    type="number"
                    id="salary"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    step="0.01"
                    min="0"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
            </div>

            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
                Update Employee
            </button>

            <button
                onClick={onClose}
                className="mt-4 bg-red-600 text-white p-2 ps-7 pe-7 rounded-md hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-gray-200"
                type="button"
            >
                Cancel
            </button>
        </form>
    );
};

export default UpdateEmployeeForm;