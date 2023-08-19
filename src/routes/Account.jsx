import React,{useState} from 'react'
import SavedCoin from '../Components/SavedCoin'
import { userAuth } from '../context/AuthContext'
import { Navigate, useNavigate } from 'react-router-dom';


const Account = () => {
  const {user, logout} = userAuth()
  const navigate = useNavigate()
  const handlesignOut =async()=>{
    try{
      await logout()
      navigate('/')
    }
    catch(e){
      console.log(e.message)
    }
  }
if(user)
{
  return (
    <>
    <div className='max-w[1140px] mx-auto'>
      <div className='rounded-div flex justify-between items-center my-8 py-8 '>
        <div>
        <h1 className='text-2xl font-bold'>Account</h1>
          <p className='text-sm'>Welcome {user?.email}</p>
        </div>
      <div>
        <button onClick={handlesignOut} className='px-6 bg-red-500  rounded-lg shadow-lg py-2'>Sign Out</button>
      </div>
      </div>

      <div className='flex justify-between items-center my-12 py-8 rounded-div'>
        <div className='w-full min-h-[300px]'>
          <h1 className='py-4 font-bold text-2xl text-center'>Watchlist</h1>
          <SavedCoin/>
        </div>
      </div>
    </div>
    </>
  )
}
else{
  return <Navigate to='/signin'/>
}
}

export default Account