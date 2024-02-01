import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import NavBar from '../components/NavBar'

const ShowBook = () => {
  const [book, setBook] = useState({})
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    axios
    .get(`http://localhost:8000/books/${id}`)
    .then((response) =>{
      setBook(response.data.data)
      setLoading(false)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <div>
      <NavBar />
      <br></br>
      <BackButton />
      <h1 className="text-3xl my-6 ml-10">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-blue-400 rounded-xl p-4 m-6">
          <div className="p-4">
            <span className="text-xl mr-4 text-slate-600 font-bold">Title:</span>
            <span>{book.title}</span>
          </div>
          <div className="p-4">
            <span className="text-xl mr-4 text-slate-600 font-bold">Author:</span>
            <span>{book.author}</span>
          </div>
          <div className="p-4">
            <span className="text-xl mr-4 text-slate-600 font-bold">Summary:</span>
            <span>{book.summary}</span>
          </div>
          <div className="p-4">
            <span className="text-xl mr-4 text-slate-600 font-bold">Ratings:</span>
            <span>{book.ratings}</span>
          </div>
          <div className="p-4">
            <span className="text-xl mr-4 text-slate-600 font-bold">Create Time</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="p-4">
            <span className="text-xl mr-4 text-slate-600 font-bold">Update Time</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowBook