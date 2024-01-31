import React from 'react'
import {BiArrowBack} from 'react-icons/bi'
import { useParams, useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'

const SignIn = () => {
const back = useNavigate()
//onClick={() => back(-1)}
  return (
    <div>
    <NavBar />
    <div className="w-full h-full top-[90px] bg-slate-600">

      <div className="flex justify-center items-center h-full">
        <form className="max-w-[300px] w-full mx-auto bg-gray-400 rounded my-10 p-8">
          <BiArrowBack onClick={() => back(-1)} className="text-white cursor-pointer text-[20px]" />
          <h2 className="text-2xl font-bold text-center py-8 text-white">Books Club Sign Up</h2>
          <div className="flex flex-col mb-4">
            <label className="text-white mb-2">Email:</label>
            <input className="border rounded bg-gray-100 p-2" type="text" placeholder="email"></input>
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-white mb-2">Username:</label>
            <input className="border rounded bg-gray-100 p-2" type="text" placeholder="username"></input>
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-2">Password:</label>
            <input className="border rounded bg-gray-100 p-2" type="password" placeholder="password"></input>
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-2">Confirm Password:</label>
            <input className="border rounded bg-gray-100 p-2" type="password" placeholder="confirm password"></input>
          </div>
          <button className="w-full py-3 mt-8 hover:bg-blue-900 bg-blue-500 rounded duration-300 text-white cursor-pointer">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default SignIn