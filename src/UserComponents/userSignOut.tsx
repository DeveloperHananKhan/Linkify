import { useAuthHandlers } from "../backEnd/signIn"
import { useUser } from "../store/userStore"
export const SignOut = ()=>{
    const {user} = useUser()
    const {Logout} = useAuthHandlers()
    function getInitals(str:any){
 
   
let name = ''
if(str.length > 0){
    name += str[0]
}  
for(let i = 1 ; i < str.length ; i++){

    if(str[i] === ' ' && i + 1 < str.length){
        name += str[i + 1]
    }
     if (name.length === 2) break;
}
      return name.toUpperCase();  
    }



    return(<>
    <div className="  bg-white text-black border-1 border-gray-300 rounded-lg p-6 fixed left-4 top-15  w-[90%] flex flex-col gap-4 md:w-[40%] md:left-[60%] md:bg-white md:z-50 lg:w-[25%] lg:left-[74.5%]
    ">
    <div className="flex items-center gap-4 border-b-2 border-gray-300">
        <button  className="cursor-pointer w-[45px] h-[45px] border-none rounded-full bg-slate-800 text-base font-bold text-white flex items-center justify-center ">
               {user?.displayName ? getInitals(user.displayName) : "U"}
            </button>
       
        <div className="m-2">
            <p className="textt-base font-semibold">{user?.displayName}</p>
            <p className="text-blue-500 text-sm ">{user?.email}</p>
        </div>
    </div>
    <ul className="cursor-pointer flex flex-col gap-4 border-b-2 border-gray-300 py-4 font-semibold text-gray-700">
        <li>Support</li>
        <li>API Documentation</li>
        <li>Webinars</li>
        <li>Linkify Terms</li>
    </ul>
    <div >
        <button onClick={Logout} className="cursor-pointer font-semibold text-gray-700">Sign out </button>
    </div>
    </div>
    </>)
}