import React, {useState} from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteBook = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const {id} = useParams()
  const handleDeleteBook = () => {
    setLoading(true)
    axios.delete(`http://localhost:8000/books/${id}`)
    .then(() => {
      setLoading(false);
      navigate('/Hero')
    })
    .catch((err) => {
      setLoading(false)
      alert("there is an error deleting. please try again")
      console.log(err)
    })
  }

  return (
    <div className="p-4">
      <BackButton />
      {loading ? <Spinner /> : ""}
      <div className="my-6 flex flex-col items-center border-2 border-blue-400 rounded-xl w-[300px] p-8 mx-auto">
        <h3 className="text-2xl">Are you sure you want to delete this book</h3>
      
        <button className="p-4 bg-green-500 text-white m-8 w-full" onClick={handleDeleteBook}>Delete</button>  
      </div>
    </div>
  )
}

export default DeleteBook