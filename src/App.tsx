
import {  Route, Routes } from 'react-router-dom'
import './App.css'

import { Home } from './Pages/Home'
import { SignUp } from './Pages/SignUp'
import { UserNav } from './UserComponents/userNav'
import { LogIn } from './Pages/logIn'
import { UserHome } from './UserComponents/userHome'
import {  UserLinksTable } from './UserComponents/Link'


function App() {
 

  return (
    <>
    <Routes>
      
      <Route path ='/'  element={<Home />} />
      <Route path ='/signup'  element={<SignUp />} />
       <Route path ='/login'  element={<LogIn />} /> 
       <Route path='/dashboard' element={<UserNav/>}>
         <Route index element={<UserHome />} /> 
        <Route  path="home" element={<UserHome />} />
        <Route  path="link" element={< UserLinksTable/>}/>
        </Route>
        
      </Routes>
    </>
  )
}

export default App
