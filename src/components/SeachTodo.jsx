import React from 'react';

const SeachTodo = ({ searchInputValue, setSearchInputValue }) => {
  return (
    <div className='relative'>
      <i className='fa-solid fa-magnifying-glass absolute text-sm pt-[5px] pl-2 text-gray-500'></i>
      <input
        type='text'
        placeholder='Search Todo'
        value={searchInputValue}
        onChange={(e) => setSearchInputValue(e.target.value)}
        className='border py-1 pl-8 text-sm rounded-md outline-none focus:border-gray-500 w-40'
      />
    </div>
  );
};

export default SeachTodo;
