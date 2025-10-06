import React, { useEffect, useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function ProtectRoute({children}) {
    const Navigate = useNavigate()
    const {user} = useContext(AuthContext)

   useEffect (()=>{
    if (!user) {
        Navigate("/signIn")
    }
   },[user,Navigate])
  return children
}
