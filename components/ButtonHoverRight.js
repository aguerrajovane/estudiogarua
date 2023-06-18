import { useEffect, useState } from 'react';
import { Animate, initTE } from "tw-elements";
  

const ButtonHoverRight = ({ children }) => {
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
        isDarkMode ? 'text-black' : 'text-white'
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
        class="h-6 w-6">
        <path
            d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
        </svg>
    </button>
  );
};

export default ButtonHoverRight;
