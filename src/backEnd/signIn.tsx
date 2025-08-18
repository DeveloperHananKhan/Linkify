
import { signInWithPopup, GoogleAuthProvider ,signOut} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useUser } from "../store/userStore";
import { useLinkStore } from "../store/useLink";
import {auth }from "../backEnd/Firebase"


const provider = new GoogleAuthProvider();

  

export const useAuthHandlers = () =>{

const {  setUser } = useUser()
const  {fetchLinks} = useLinkStore()
const navigate =useNavigate()

 const login = async() =>{
await signInWithPopup(auth, provider)
  .then(async(result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
   
    const credential = GoogleAuthProvider.credentialFromResult(result);
      if (!credential) {
      throw new Error("No credential returned from Google sign-in.");
    }

   
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    setUser(user)
    console.log("Logged in user:", user);
     localStorage.setItem("user", JSON.stringify(user));
      await fetchLinks(user.uid)
     navigate("/dashboard/home")
    // ...
  }).catch((error) => {
   console.log('there is error',error)
    // ...
  });}

    const Logout = async()=> {
  await signOut(auth).then(() => {
    // Sign-out successful.
    setUser(null)
    localStorage.removeItem('user')
  navigate("/")
  }).catch((error) => {
    // An error happened.
    console.log(error)
  });
  }
return {login,Logout}
  }
  


