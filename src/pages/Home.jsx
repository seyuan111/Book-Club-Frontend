import React from 'react'
import {Link} from 'react-router-dom'
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <div className="w-full h-screen top-[90px] bg-slate-600">
    <NavBar />
    <div className="w-full h-[80%] text-center flex flex-col items-center justify-center px-4 text-white">
        <h1 className="font-bold text-2xl underline font-QuickSand">The Book Club</h1>
        <h1 className="text-[25px] mt-8 text-white">Want to keep track of what books you have read.</h1>
        <p className="mb-5 font-bold">This is the app where you can keep track of what books you have read</p>
        <div className="text-white flex flex-col sm:flex-row">
            <button className="bg-blue-500 text-white hover:bg-blue-900 rounded px-6 py-2 duration-300"><Link to="/Hero">View Books</Link></button>
            <button className="px-6 py-2 mt-4 bg-red-500 hover:bg-red-900 rounded text-white duration-300 ml-6"><Link to="/books/create">Add Books</Link></button>
        </div>
    </div>

</div>
  )
}

export default Home