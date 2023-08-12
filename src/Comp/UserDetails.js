import React, { useContext, useEffect } from 'react'
import noteContext from '../Context/Notes/noteContext'
import {useNavigate} from 'react-router-dom'

const UserDetails = () => {
  const context = useContext(noteContext);
  const { getDetail , details } = context;
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
        getDetail()
    }
    else{
        navigate("/Login");
    }
}, [])

  return (
    <div className='container'>
      
      Name:
      <div >{details.name}</div>
      Email:
      <div >{details.email}</div>
      Password:
      <div >{details.pass}</div>
    </div>
  )
}

export default UserDetails