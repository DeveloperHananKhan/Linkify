
import { signInWithPopup, GoogleAuthProvider ,signOut} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useUser } from "../store/userStore";
import { useLinkStore } from "../store/useLink";
import {auth }from "../backEnd/Firebase"


const provider = new GoogleAuthProvider();

  

export const useAuthHandlers = () =>{

const { user, setUser } = useUser()
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

    const token = credential.accessToken;
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
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
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
  });
  }
return {login,Logout}
  }
  


