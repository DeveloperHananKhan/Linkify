import { useState } from "react";
import { useUser } from "../store/userStore";
import { useModalStore } from "../store/userStore";
import { SignOut } from "./userSignOut";
import { useNavigate,Outlet } from "react-router-dom";
import { useNavStore } from "../store/acriveNav"
import type {NavItem} from "../store/acriveNav"
interface UserNavProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}
export const UserNav = ({query,setQuery}:UserNavProps) => {
  const {user} = useUser()
   const {isOpen,toggle} = useModalStore()
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const {navItems,setNavActive,activeNav} = useNavStore()
  
  const navigate = useNavigate()

const handleNav = (item :NavItem) => {
    setNavActive(item.id);      
    navigate(item.path);        
  };
  
  return (
    
    <>

    
    {user && ( <>
      {" "}
      {isSearchOpen ? (
        <div style={{fontFamily: "'Inter', sans-serif"}} className="fixed top-0 left-0 bg-white z-50 w-full flex items-center px-4 py-2 border-b border-gray-300 md:w-[300px]">
          <button>
            {" "}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              role="graphics-document"
              height="28"
              width="28"
              xmlns="http://www.w3.org/2000/svg"
              className="text-slate-800 absolute top-5 left-6  h-5"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </button>
          <input
          value={query}
          onChange={(e)=> setQuery(e.target.value)}
            type="text"
            className="w-full border rounded-md px-10 py-2 t "
            placeholder="Search..."
          />
          <button
            onClick={() => setSearchOpen(false)
              
            }
            className="ml-2 text-lg font-bold absolute right-8"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              role="graphics-document"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              className="text-slate-800"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
          </button>
        </div>
      ) :
     (
        <div style={{fontFamily: "'Inter', sans-serif"}} className="fixed top-0 left-0 bg-white z-50 w-full max-w-lg sm:max-w-md mx-auto flex justify-between border-b  border-gray-300 mx-auto py-2 px-4 md:left-auto md:right-0 md:w-[85%] md:max-w-none md:justify-end
    md:mx-0 ">
          <div className="flex gap-6 items-center justify-center md:hidden ">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              role="graphics-document"
              height="28"
              width="28"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setMenuOpen((prev) => !prev)
              }
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
              className="bitly-header-logo md:hidden"
            >
              <title>Bitly Logo</title>
              <g clip-path="url(#a)">
                <path
                  fill="#F36600"
                  d="M5.325 27.992C1.775 24.565 0 20.654 0 16.261 0 6.873 7.282 0 15.945 0 24.698 0 32 6.873 32 16.26 32 25.135 24.171 32 17.334 32c-2.832 0-4.878-1.071-5.947-2.739-.38-.59-.717-1.541-.785-2.118-.045-.385-.045-1.66 0-3.827v-4.84c.04-2.923.352-6.79-.807-5.898-.343.331-.482.676-1.218.708-.736-.054-.943-.843-.822-1.268.437-1.524 1.722-2.744 3.764-2.524 2.04.22 2.826 1.572 2.88 3.396 0 2.206-.054 4.613-.054 4.893v.236c.01.22-.022.397.236.25l.684-.467c1.397-1.058 4.825-2.175 7.486.467 1.013 1.006 2.26 3.19 1.534 6.559-.117.353-.023.4.28.14.25-.25 3.686-3.344 3.686-9.2 0-6.565-5.756-12.045-12.306-12.045-5.708 0-12.24 4.544-12.24 12.538 0 2.483.89 5.555 3.069 7.953.356.41.626.696.81.862.993.855 1.124 1.931.464 2.713-.85.857-1.757.925-2.723.203Zm12.05.363c2.966-.047 3.444-3.129 3.46-4.869 0-2.57-1.307-3.48-3.268-3.08-1.579.319-3.173 1.963-3.348 4.246a12.807 12.807 0 0 0-.016 1.596c.08 1.565 1.387 2.14 3.172 2.107Z"
                ></path>
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h32v32H0z"></path>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex gap-5 items-center justify-center ">
            <div className="relative">
              <button className="hidden md:block absolute top-3 cursor-pointer"> <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                role="graphics-document"
                height="28"
                width="28"
                xmlns="http://www.w3.org/2000/svg"
                className="text-slate-800 h-5"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
              </svg></button>
              <input value={query} onChange={(e)=>setQuery(e.target.value)} className="hidden md:block px-8 py-2 outline-none shadow-[0_2px_4px_rgba(0,0,0,0.2)] active:border-2 border-blue-500 rounded-md" type="text"  placeholder="Serach..."/>
              </div>
              <button className="cursor-pointer active:bg-[#2a6f78] hidden  md:block bg-[#007c8c] text-white px-6 py-2 rounded-lg font-semi-bold hover:bg-[#2a6f78]">Upgrade</button>
            <button onClick={() =>{ setSearchOpen(true);
              setMenuOpen(false);
            }} className="flex md:hidden">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                role="graphics-document"
                height="28"
                width="28"
                xmlns="http://www.w3.org/2000/svg"
                className="text-slate-800"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
              </svg>
            </button>

            <button className="cursor-pointer">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                role="graphics-document"
                className="pendo-help-icon text-slate-800"
                height="38"
                width="38"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path>
              </svg>
            </button>

            <button onClick={toggle} className="cursor-pointer w-[35px] h-[35px] border-none rounded-full bg-slate-800 text-base font-bold text-white flex items-center justify-center ">
               {user?.displayName? user.displayName[0].toUpperCase() : "U"}
            </button>
          </div>
        </div>
      )}
      {isOpen && <SignOut />}
{/* mobile sidenavbar and md sidenavbar    */}

      <div style={{fontFamily: "'Inter', sans-serif"}}
          className={`fixed bg-white top-[50px] h-full left-0 w-full bg-gray-100 z-40 transition-transform duration-300 ease-in-out flex gap-5 flex-col mx-auto p-4  md:w-[15%] md:py-0 md:px-4 md:fixed md:top-0 md:translate-x-0 md:transition-none md:py-4 md:border-r border-gray-300 
    transition-transform duration-300 ease-in-out
    ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        
        >  
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
              className="bitly-header-logo hidden md:block"
            >
              <title>Bitly Logo</title>
              <g clip-path="url(#a)">
                <path
                  fill="#F36600"
                  d="M5.325 27.992C1.775 24.565 0 20.654 0 16.261 0 6.873 7.282 0 15.945 0 24.698 0 32 6.873 32 16.26 32 25.135 24.171 32 17.334 32c-2.832 0-4.878-1.071-5.947-2.739-.38-.59-.717-1.541-.785-2.118-.045-.385-.045-1.66 0-3.827v-4.84c.04-2.923.352-6.79-.807-5.898-.343.331-.482.676-1.218.708-.736-.054-.943-.843-.822-1.268.437-1.524 1.722-2.744 3.764-2.524 2.04.22 2.826 1.572 2.88 3.396 0 2.206-.054 4.613-.054 4.893v.236c.01.22-.022.397.236.25l.684-.467c1.397-1.058 4.825-2.175 7.486.467 1.013 1.006 2.26 3.19 1.534 6.559-.117.353-.023.4.28.14.25-.25 3.686-3.344 3.686-9.2 0-6.565-5.756-12.045-12.306-12.045-5.708 0-12.24 4.544-12.24 12.538 0 2.483.89 5.555 3.069 7.953.356.41.626.696.81.862.993.855 1.124 1.931.464 2.713-.85.857-1.757.925-2.723.203Zm12.05.363c2.966-.047 3.444-3.129 3.46-4.869 0-2.57-1.307-3.48-3.268-3.08-1.579.319-3.173 1.963-3.348 4.246a12.807 12.807 0 0 0-.016 1.596c.08 1.565 1.387 2.14 3.172 2.107Z"
                ></path>
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h32v32H0z"></path>
                </clipPath>
              </defs>
            </svg>
          
          <button className="cursor-pointer flex bg-[#022d94] active:bg-[#2a5bd7] justify-center text-white py-2 rounded-lg font-bold md:hover:bg-[#2a5bd7]">Create New</button>
          {navItems.map((item) =>{
              
            
            return(
              
            <div
              key={item.id} 
              onClick={() => handleNav(item)}
              className={`
      flex gap-2 items-center p-2 cursor-pointer transition-colors duration-300 ease-in-out
      ${
        activeNav === item.id
          ? "border-l-4 border-blue-600 text-blue-500"
          : "border-l-4 border-transparent"
      }
    `}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          )})}
        </div>
<Outlet />
      
  
       </> )}
    </>
  );
};
