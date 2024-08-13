import React, { useState, useEffect } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { getFilteredCharacter } from '../services/characterService';

const Searchbox: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    // Clear the previous timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set a new timeout
    const id = setTimeout(async () => {
      try {
        const data = await getFilteredCharacter({ name: value });
        console.log(data); // Handle the response data as needed
      } catch (error) {
        console.error('Search error:', error);
      }
    }, 3000); // 3000 ms delay

    setTimeoutId(id);
  };

  return (
    <div className='search-container'>
      <input
        type='text'
        placeholder='Search'
        value={inputValue}
        onChange={handleChange}
      />
      <IoSearchSharp color='white' className='icon' />
    </div>
  );
};

export default Searchbox;
