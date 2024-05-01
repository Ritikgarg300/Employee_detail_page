import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assest/Logo.png'
import Profile from '../assest/Profile.png'
function EmployeeCard({ employee }) {
 

  return (
    <div className="employee-card border-2 p-2 bg-white rounded h-[550px] ">
      <div className='relative w-full h-[40%] bg-black  flex items-center justify-center'>
<img src={Logo} />
<img src={Profile} width={90} height={90}  className=' border-4 border-blue-600 absolute top-[170px] rounded'/>
      </div>
      <div className='w-[100%] flex justify-center'><p class="mt-[50px] text-[30px] font-bold text-blue-700  ">
  {employee.employee_name}
</p></div>
      
     
      <div className='flex flex-col  gap-4 mt-[10px] p-4'>
      

        <div className='flex  gap-3 text-lg font-semibold'><p>Employee ID :</p><p>{employee.id}</p></div>
        <div className='flex  gap-3 text-lg font-semibold'><p>Salary:</p><p>{employee.employee_salary}</p></div>
        <div className='flex  gap-3 text-lg font-semibold'><p>Age:</p><p>{employee.employee_age}</p></div>
        
        
      </div>
       
      <div className='flex justify-between m-3'> <Link to={{
           pathname: `/employee/${employee.id}`,
           state: { employeeData: employee }
        }}>
      <button  className='bg-black p-4 rounded-[5%] text-white'>Veiw Profile</button>
      </Link>
      <button  className='bg-red-400 p-4 rounded-[5%] text-white'>Delete</button></div>
     
      
      
    </div>
  );
}

export default EmployeeCard;