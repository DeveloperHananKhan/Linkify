import { create } from "zustand";


type UserData = {
uid: string,
email:string | null,
displayName?:string | null,
}
interface UserSate {
    user: UserData |  null;
    setUser: (user :UserData | null ) => void 
}

export const useUser = create<UserSate>((set)=>({
user: JSON.parse(localStorage.getItem("user") || "null"),
setUser: (user)=>{

    if(user){
        localStorage.setItem("user",JSON.stringify(user))
    }else{
        localStorage.removeItem("user")
    }
    set({user});
},


}));




interface ModalStore {
  isOpen: boolean;
  toggle: () => void;
}


export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));