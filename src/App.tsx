
import {  Route, Routes } from 'react-router-dom'
import './App.css'

import { Home } from './Pages/Home'
import { SignUp } from '../src/Pages/auth/SignUp'
import { UserNav } from './UserComponents/userNav'
import { LogIn } from '../src/Pages/auth/logIn'
import { UserHome } from './UserComponents/userHome'
import { SerachLinks } from './UserComponents/search/searchLinks'
import { useState } from 'react'

function App() {
 const [query, setQuery] = useState<string>('');

  return (
    <>
    <Routes>
     
      <Route path ='/'  element={<Home />} />
      <Route path ='/signup'  element={<SignUp />} />
       <Route path ='/login'  element={<LogIn />} /> 
       <Route path='/dashboard' element={<UserNav query={query} setQuery={setQuery}/>}>
         <Route index element={<UserHome />} /> 
        <Route  path="home" element={<UserHome />} />
        <Route  path="link" element={<SerachLinks query={query}/>}/>
        </Route>
        
      </Routes>
    </>
  )
}

export default App
