import React from 'react'
import { Link } from 'react-router-dom'
import './external.css'


export default function Home() {
  return (
    
<center>
      <div className='profile'>
<Link to="Register"><img src='https://img.freepik.com/premium-vector/avatar-young-smart-business-woman_851009-121.jpg' height="300px" alt="admin"></img></Link>
        <h1 className='admin'>Admin</h1>
        <Link to="user"><img src='https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg' height="300px" alt="user"></img></Link>
        <h1 className='user'>User</h1>
    </div>
    </center>
  

  )
}
