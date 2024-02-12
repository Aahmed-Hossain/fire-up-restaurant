import { useState, useEffect } from 'react';
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const ThemeToggle = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    useEffect(() => {
      document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);

    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
      }, [theme]);
      return (
        <label className="swap swap-rotate">
          <input onClick={toggleTheme} type="checkbox" />
          <div className="swap-on"><MdOutlineDarkMode className='text-2xl font-bold mr-2'/></div>
          <div className="swap-off"><CiLight className='text-2xl font-bold mr-2'/></div>
        </label>
      );
};

export default ThemeToggle;

