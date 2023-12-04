import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'
import {toast,Toaster} from 'react-hot-toast'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
        toast.error('Logout Successfully');
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 text-xl font-semibold  hover:bg-red-200 rounded-full'
    onClick={logoutHandler}
    >Logout
    <Toaster/>
    </button>
  )
}

export default LogoutBtn