import React from 'react'
import {Link} from 'react-router-dom'
import NavBar from '../components/NavBar'

const Login = () => {
  return (
    <div>
    <NavBar />
    <div className="w-full h-full top-[90px] bg-slate-600">
      <div className="flex justify-center items-center h-full">
          <form className="max-w-[300px] w-full h-full mx-auto my-10 p-8 bg-gray-400 rounded">
            <h2 className="text-2xl font-bold text-center py-8 text-white">Login to Books Club</h2>
            <div className="flex flex-col mb-4">
              <label className="mb-2 text-white">Username:</label>
              <input
                className="rounded border bg-gray-100 p-2"
                type="text"
                placeholder="Username"
              ></input>
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-white">Password:</label>
              <input
                className="rounded border bg-gray-100 p-2"
                type="password"
                placeholder="password"
              ></input>
            </div>
            <button className="rounded w-full py-3 mt-8 hover:bg-blue-900 duration-300 relative bg-blue-500 text-white cursor-pointer">
              Sign in
            </button>
            <p className="text-white">
              <input className="mr-2" type="checkbox"></input>Remember this account
            </p>
            <p className="text-white">
              <span className="text-blue-500 cursor-pointer">
                <Link to="/SignIn">Sign up</Link>
              </span>{' '}
              to become a member
            </p>
          </form>
      </div>
    </div>
  </div>
  )
}

export default Login