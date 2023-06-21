import { useEffect, useState } from 'react';
import { Animate, initTE } from "tw-elements";
  

const ButtonHoverRightBlack = ({ children }) => {
    useEffect(() => {
        initTE({ Animate });
      }, []);

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);

  return (
    <button
        data-te-animation-init
        data-te-animation-target="#animate-hover"
        data-te-ripple-init
        data-te-ripple-color="light"
        className={`py-2 flex ${
        isDarkMode ? 'text-black' : 'text-black'
      }`}
    >
      {children}
      <svg
        id="animate-hover"
        data-te-animation-init
        data-te-animation-start="onHover"
        data-te-animation-reset="true"
        data-te-animation="[slide-right_1s_ease-in-out]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-10 w-10 ml-2">
        <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>
    </button>
  );
};

export default ButtonHoverRightBlack;
