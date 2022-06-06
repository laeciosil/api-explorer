import Switch from "react-switch";
import { Sun, Moon } from "phosphor-react";
import { useTheme } from 'next-themes';

function ToggleDarkMode() {
  const {theme, setTheme} = useTheme();
  return (
    <Switch 
    onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    checked={theme === 'dark'}
    uncheckedIcon={
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          color: "orange",
          fontSize: 20,
          paddingRight: 2
        }}
      >
        <Sun weight="fill"/>
      </div>
    }
    checkedIcon={
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          color: "orange",
          fontSize: 20,
          paddingRight: 2
        }}
      >
        <Moon weight="fill"/>
      </div>
    }
    onColor={'#5965E0'}
    offColor={'#5965E0'}
  />
  );
}

export default ToggleDarkMode;