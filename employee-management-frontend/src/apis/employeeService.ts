import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3010/employee', // Base URL of my backend API
});

// Fetch all employees
export const getAllEmployees = async () => {
  try{
    const response = await api.get('/');
    return await api.get('/');
  }
  catch(error){
    throw new Error('Failed to fetch employees');
  }
};

// Get employee by id
export const getEmployeeById = async (id: number) => {
  return await api.get(`/${id}`);
};

// Get employee by employeeId
export const getEmployeeByEmployeeId = async (employeeId: string) => {
  return await api.get(`/employeeId/${employeeId}`);
};

// Create a new employee
export const createEmployee = async (employeeData: any) => {
  return await api.post('/', employeeData);
};

// Update employee by id
export const updateEmployee = async (id: number, employeeData: any) => {
  return await api.patch(`/${id}`, employeeData);
};

// Delete employee by id
export const deleteEmployee = async (id: number) => {
  return await api.delete(`/${id}`);
};

// Delete employee by employeeId
export const deleteEmployeeByEmployeeId = async (employeeId: string) => {
  return await api.delete(`/employeeId/${employeeId}`);
};
