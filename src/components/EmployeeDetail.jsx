// EmployeeDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Profile from '../assest/Profile.png'
function EmployeeDetail() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  
  useEffect(() => {
    fetch(`https://dummy.restapiexample.com/api/v1/employee/${id}`)
      .then(response => response.json())
      .then(data => {
        setEmployee(data.data);
      })
      .catch(error => console.error('Error fetching employee data:', error));
  }, [id]);

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div  className='flex flex-col gap-3'>
      <div className=" relative bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 h-[250px] flex justify-center items-center">

          <div className='absolute left-[60px] top-[160px]'> 
          <img src={Profile} className='rounded-full'/>
        </div>
      </div>
      <div className='bg-white p-8 rounded-lg shadow-lg mt-[40px] flex justify-center'>
       <p className='text-gray-700 text-3xl font-bold'>{employee.employee_name}</p>
      </div >
      <div className='bg-white p-8 rounded-lg shadow-lg mt-[40px]'>
        <h2 className='text-black text-3xl font-bold'>About</h2>
        <p className='mt-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum omnis soluta nulla aliquid provident veritatis voluptate voluptas nemo iure sapiente. Eos enim, temporibus accusamus laboriosam veniam est inventore optio eligendi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae voluptatum similique ducimus consectetur, quibusdam molestias minima dolorem nesciunt expedita, debitis quos? Provident sunt assumenda sapiente eaque expedita at omnis beatae.</p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Employee Detail</h2>
        <p><span className="font-semibold">ID:</span> {employee.id}</p>
        <p><span className="font-semibold">Salary:</span> {employee.employee_salary}</p>
        <p><span className="font-semibold">Age:</span> {employee.employee_age}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
}

export default EmployeeDetail;
