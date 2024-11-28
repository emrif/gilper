import { TbCameraSearch } from "react-icons/tb";
import Button from "../ui/Button";
import Input from "../ui/Input";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-around w-full h-16 bg-secondary">
      <div className="m-2">
        <span className="flex gap-2">
          <Input></Input>
          <Button>
            <TbCameraSearch />
          </Button>
        </span>
      </div>
      <div>Logo</div>
      <div>User</div>
    </nav>
  );
};

export default NavBar;
