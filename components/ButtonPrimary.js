import { useEffect, useState } from 'react';

const ButtonPrimary = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);

  return (
    <button
      className={`transition duration-200 ease-in-out py-2 px-4 rounded ${
        isDarkMode ? 'bg-white text-black' : 'bg-black text-white'
      } border ${
        isDarkMode ? 'border-gray-300 hover:bg-gray-100 focus:outline-none focus:shadow-outline-gray' : 'border-gray-800 hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray'
      }`}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
