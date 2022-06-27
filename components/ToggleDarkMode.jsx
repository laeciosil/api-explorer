import { Sun, MoonStars } from 'phosphor-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

function ToggleDarkMode() {
  const { theme, setTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState('');
  useEffect(() => { setSelectedTheme(theme); }, [theme]);
  return (
    <label className="swap relative cursor-pointer">
      <input
        type="checkbox"
        className="hidden"
        onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
      <Sun weight="bold" size={25} className={`${selectedTheme === 'light' ? '-rotate-45' : 'opacity-0'} absolute -top-3 left-0 text-light-secondary`} />
      <MoonStars weight="bold" size={25} className={`${selectedTheme === 'dark' ? '' : 'opacity-0'} absolute -top-3 left-0   text-light-secondary`} />
    </label>
  );
}

export default ToggleDarkMode;
