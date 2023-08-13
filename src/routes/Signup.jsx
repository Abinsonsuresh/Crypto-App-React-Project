import React from 'react'
import { AiOutlineMail, AiFillLock } from 'react-icons/ai'
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <>
    <div className='max-w-[700px] mx-auto min-h-[600px] rounded-lg border border-input shadow-2xl px-4 py-20 my-8'>
    <h1 className='text-2xl font-bold text-center'>Sign up</h1>
    <form>
      <div className='my-4'>
        <label>Email</label>
        <div className='my-2 w-full relative rounded-2xl shadow-lg '>
          <input className='bg-primary w-full border border-input rounded-2xl p-2' type='email' placeholder='Enter your Email'></input>
          <AiOutlineMail className='absolute top-3 right-3'/>
        </div>
      </div>

      <div className='my-4'>
        <label>Password</label>
        <div className='my-2 w-full relative rounded-2xl shadow-lg '>
          <input className='bg-primary w-full border border-input rounded-2xl p-2' type='password' placeholder='Enter password'></input>
          <AiFillLock className='absolute top-3 right-3'/>
        </div>
      </div>
      <button className='my-4 rounded-2xl w-full p-2 font-semibold bg-button text-btnText'>Sign up</button>
    </form>
    <p className='my-4'>Already have an account? <Link className='text-blue-600' to='/signin'>Sign in</Link></p>

  </div>
  </>

  )
}

export default Signup