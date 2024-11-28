import { TbCameraSearch } from "react-icons/tb";
import Button from "../ui/Button";


const NavBar = () => {
     return (
          <nav className="bg-[#62b2dd] w-full flex justify-between h-16">
               <div className="mt-2 ml-2">
                    <span className="flex gap-2">
                         <input type="text" className="rounded-3xl h-10 w-full p-2 text-gray-500" />
                         <Button><TbCameraSearch /></Button>

                    </span>

               </div>
               <div>Logo</div>
               <div>User</div>
          </nav>
     );
};

export default NavBar;