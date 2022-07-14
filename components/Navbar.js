import { NavLink } from "./navLink";

export const NavBar = () => {
  return (
    <nav className="flex justify-between py-3 mt-3 fixed top-0 w-screen underline-offset-1">
      <div>
        <NavLink className="ml-6 mr-1 p-1" name="About" href="#" />
        <NavLink className="ml-1 p-1" name="Store" href="#" />
      </div>
      <div>
        <NavLink className="m-2 p-1" name="Gmail" href="#" />
        <NavLink className="mr-6 ml-1 p-1" name="Images" href="#" />
      </div>
    </nav> 
  );
};