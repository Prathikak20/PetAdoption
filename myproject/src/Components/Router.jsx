import React, { useEffect, useState } from 'react'
import {BrowserRouter,Route,Routes, json} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Registration from './Registration'
import Sidebar from './Sidebar'
import Viewpet from './Viewpet'
import Addpet from './Addpet'
import Customer from './Customer'
import Update from './Update'

export default function Router() {
  const [User,setUser]=useState()
  const[count,setCount]=useState(false)
  useEffect(()=>{

    let initvalue=JSON.parse(localStorage.getItem('Admin'))
    setUser(initvalue)
  },[count])

  // console.log(User,'user')
  return (
    <div>
     <BrowserRouter>
     {User=="Admin" && <Sidebar setCount={setCount} count={count}/>}
     {/* {<Sidebar/>} */}
     <Routes>
      <Route exact path='/' element={<Home/>}/>
     
      <Route exact path='/Register' element={<Registration/>}/>
      <Route exact path='/Login' element={<Login setCount={setCount} count={count}/>}/>
      {/* <Route exact path='/Sidebar' element={<Sidebar/>}/> */}

      <Route exact path='/viewPet' element={<Viewpet/>}/>
      <Route exact path='/addPet' element={<Addpet/>}/>
      <Route exact path='/user' element={<Customer/>}/>
      <Route exact path="/Update/:id" element={<Update/>}/>
    
     </Routes>
     </BrowserRouter>
       
    </div>
  )
}
