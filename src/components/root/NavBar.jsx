import { TbCameraSearch } from "react-icons/tb";
import Button from "../ui/Button";
import Input from "../ui/Input";
import ThemeToggle from "../ThemeToggle";
import { useThemeContext } from "../../provider/ThemeProvider";


const NavBar = () => {

  const { theme } = useThemeContext();
  console.log(theme);
  return (
    <nav className="flex items-center justify-around w-full h-16 bg-secondary pr-3">
      {/* Logo */}
      <div className="">
        {
          theme === 'light' ? (<img className="w-auto h-8 md:h-12" src="/gilper-light.svg" ></img>) : (<img className="w-auto h-8 md:h-12" src="/gilper-dark.svg" ></img>)
        }
      </div>


      {/* Menu */}
      <div className="">

      </div>


      {/* Buttons */}
      <div className="flex gap-2">
        <span className="flex gap-2">
          <Input></Input>
          <Button>
            <TbCameraSearch />
          </Button>
        </span>
        <ThemeToggle />
      </div>

    </nav>
  );
};

export default NavBar;
