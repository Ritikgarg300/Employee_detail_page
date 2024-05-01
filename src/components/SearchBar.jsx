import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [id, setId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(id);
  };

  return (
    <form onSubmit={handleSubmit} className='w-[100%]'>
      <input
        type="text"
        placeholder="Search by ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className='w-[80%] m-5 p-3 rounded-[5px]'
      />
      <button type="submit" className='bg-gray-500 text-white p-3 rounded-sm w-[10%] font-bold'>Search</button>
    </form>
  );
}

export default SearchBar;