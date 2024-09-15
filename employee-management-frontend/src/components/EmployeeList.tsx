import React, { useEffect, useState } from 'react';
import { getAllEmployees, deleteEmployee } from '../apis/employeeService';

const EmployeeList: React.FC = () => {
    interface employee {
        id: number;
        employeeId: string;
        name: string;
        position: string;
        email: string;
        salary: number;
    }

    const [employees, setEmployees] = useState([]);
    const [loading, setloading] = useState(true);

    const fetchEmployees = async () => {
        const response = await getAllEmployees();
        setEmployees(response.data);
    };

    useEffect(() => {
        fetchEmployees();
        setloading(false);
    }, []);

    const handleDelete = async (id: number) => {
        await deleteEmployee(id);
        fetchEmployees();
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex">
                <h2 className="text-xl font-bold mb-4">Employee List</h2>
            </div>
            {
                loading ?
                    <> loading </>
                    :
                    <>
                        {
                            employees.length > 0 ? (
                                <>
                                    <table className="table-auto w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-gray-200">
                                                <th className="px-4 py-2 border">ID</th>
                                                <th className="px-4 py-2 border">Employee ID</th>
                                                <th className="px-4 py-2 border">Name</th>
                                                <th className="px-4 py-2 border">Position</th>
                                                <th className="px-4 py-2 border">Email</th>
                                                <th className="px-4 py-2 border">Salary</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {employees.map((employee: employee) => (
                                                <tr key={employee.id} className="hover:bg-gray-100">
                                                    <td className="px-4 py-2 border">{employee.id}</td>
                                                    <td className="px-4 py-2 border">{employee.employeeId}</td>
                                                    <td className="px-4 py-2 border">{employee.name}</td>
                                                    <td className="px-4 py-2 border">{employee.position}</td>
                                                    <td className="px-4 py-2 border">{employee.email}</td>
                                                    <td className="px-4 py-2 border">{employee.salary}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </>
                            )
                                :
                                <>
                                    <p className="text-center text-gray-600">No employees found.</p>
                                </>
                        }
                    </>
            }

        </div>
    );
};

export default EmployeeList;
