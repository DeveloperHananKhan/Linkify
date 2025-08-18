import { Link } from "react-router-dom";
import { useAuthHandlers } from "../backEnd/signIn";
export const NavBar = () => {
  const {login} = useAuthHandlers()
  return (
    <>
      <nav className="bg-white w-full flex justify-between py-3 px-4  md:justify-around  " style={{ fontFamily: "'Inter', sans-serif",background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)' }}>
        <div className="font-bold text-orange-400 cursor-pointer text-lg md:text-3xl lg:text-3xl">
          linkify
        </div>
        <div className="flex gap-4 md:gap-5  lg:gap-6">
          <Link to='/login' className=" text-white text-sm cursor-pointer active:bg-slate-800   md:text-base hover:bg-slate-800  border border-none rounded-xl transition-colors duration-300   lg:text-lg px-3 py-1 md:px-4 md:py-2 ">
            Log in
          </Link>
          <Link to='/signup' className="text-slate-900 text-sm cursor-pointer bg-white border border-black rounded-xl   md:text-base font-semibold lg:text-lg px-3 py-1 md:px-4 md:py-1">
            Sign up Free
          </Link>
        </div>
      </nav>
    </>
  );
};
