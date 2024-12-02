import { BiMoon, BiSun } from "react-icons/bi";
import { useThemeContext } from "../provider/ThemeProvider";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function ThemeToggle() {
  const { theme, setTheme } = useThemeContext();

  const toggleDarkMode = (newState) => {
    setTheme(newState ? "dark" : "light");
    return;
  };

  const handleChange = () => {
    toggleDarkMode(theme === "light");
  };

  return (
    <>
      <button
        className={`flex relative justify-center flex-col items-center cursor-pointer rounded-md overflow-hidden hover:bg-primary bg-accent text-text p-[20px]`}
        onClick={handleChange}>
        <motion.div
          className="absolute"
          initial={{ y: 0 }}
          animate={{
            y: theme === "light" ? -27 : 0,
          }}>
          <BiMoon className="text-text" />
        </motion.div>

        <motion.div
          className="absolute"
          initial={{ y: 0 }}
          animate={{
            y: theme === "light" ? 0 : 27,
          }}>
          <BiSun className="text-text" />
        </motion.div>
      </button>
    </>
  );
}

ThemeToggle.propTypes = {
  children: PropTypes.string,
};
