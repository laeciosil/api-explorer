import { Sun, MoonStars } from 'phosphor-react';
import { useTheme } from 'next-themes';

function ToggleDarkMode() {
  const { theme, setTheme } = useTheme();
  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        className="hidden"
        onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
      <MoonStars weight="bold" size={25} className="swap-on text-light-secondary" />
      <Sun weight="bold" size={25} className="swap-off text-light-secondary" />

    </label>
  );
}

export default ToggleDarkMode;
