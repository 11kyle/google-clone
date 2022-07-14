import { NavLink } from "./navLink";

export const Footer = () => {
  return (
    <footer className="flex justify-between py-3 text-custom-slate-2 bg-custom-grey fixed bottom-0 w-screen">
      <div className="ml-6">
        <NavLink className="m-2 py-3 px-2" name="Advertising" href="#" />
        <NavLink className="m-2 py-3 px-2" name="Business" href="#" />
        <NavLink className="m-2 py-3 px-2" name="How Search works" href="#" />
      </div>
      <div>
        <NavLink className="m-2 -ml-20 py-3 px-2" name="Carbon neutral since 2007" href="#" />
      </div>
      <div className='mr-6'>
        <NavLink className="m-2 py-3 px-2" name="Privacy" href="#" />
        <NavLink className="m-2 py-3 px-2" name="Terms" href="#" />
        <NavLink className="m-2 py-3 px-2" name="Settings" href="#" />
      </div>
    </footer>
  );
};