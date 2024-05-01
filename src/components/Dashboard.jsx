import React, { useState, useEffect } from 'react';
import EmployeeCard from './EmployeeCard';
import SearchBar from './SearchBar';

function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    fetch('https://dummy.restapiexample.com/api/v1/employees')
      .then(response => response.json())
      .then(data => {
        setEmployees(data.data);
        setFilteredEmployees(data.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (id) => {
    if (id === '') {
      setFilteredEmployees(employees);
    } else {
      const filtered = employees.filter(employee => employee.id.toString() === id);
      setFilteredEmployees(filtered);
    }
  };

  return (
    <div  className='bg-blue-400 '>
      <div className='bg-gradient-to-r from-blue-900 via-indigo-600 to-cyan-400 p-8 text-white text-2xl flex justify-center'>
      <h1>Employee Dashboard</h1>
      </div>
      
      <SearchBar onSearch={handleSearch} />
      <div className="employee-list grid grid-cols-4 gap-4 m-2">
        {filteredEmployees.map(employee => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;