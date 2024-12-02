import { FiGithub } from "react-icons/fi";
import { useThemeContext } from "../../provider/ThemeProvider";

const Footer = () => {

  const { theme } = useThemeContext();


  return (
    <footer className="flex flex-col gap-4 items-center justify-center w-auto bg-secondary h-52">
      {/* Logo */}
      <div className="flex flex-col gap-2">
        <div>
          {
            theme === 'light' ? (<img className="w-auto h-8 md:h-12" src="/gilper-light.svg" ></img>) : (<img className="w-auto h-8 md:h-12" src="/gilper-dark.svg" ></img>)
          }
        </div>
        <h1 className="md:text-xl font-Exo">Clean and Minimalistic</h1>
      </div>
      <div className="flex items-center gap-5">
        <a href="https://github.com/emrif/"><FiGithub /></a> | <p>© 2024 Emrif. All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
