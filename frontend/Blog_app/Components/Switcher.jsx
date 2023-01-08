import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "./useDarkSide";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === "light" ? true : false);

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <div>
      <DarkModeSwitch
        style={{ height: 30, width: 30 }}
        checked={darkSide}
        onChange={toggleDarkMode}
        size={30}
      />
      {/* <span className="pl-[12px] text-left w-full hidden lg:block">Chuyển chủ đề</span> */}
    </div>
  );
}
