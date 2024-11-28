import { TbCameraSearch } from "react-icons/tb";
import Button from "../ui/Button";
import Input from "../ui/Input";


const NavBar = () => {
     return (
          <nav className="bg-[#62b2dd] w-full flex justify-between h-16">
               <div className="mt-2 ml-2">
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