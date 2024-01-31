import React, {useState, useEffect} from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const {id} = useParams()
  
  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:8000/books/${id}`)
    .then((response) => {
      setAuthor(response.data.data.author)
      setPublishYear(response.data.data.publishYear)
      setTitle(response.data.data.title)
      setLoading(false)
    })
    .catch((err) => {
      setLoading(false)
      alert("there is an error editing.")
      console.log(err)
    })
  }, [])

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    }
    setLoading(true);
    axios.put(`http://localhost:8000/books/${id}`, data)
    .then(() => {
      setLoading(false);
      navigate('/Hero')
    })
    .catch((err) => {
      setLoading(false)
      alert('an error happened. Please Check console')
      console.log(err)
    })
  }

  return (
      <div>
      <NavBar/>
      <BackButton />
      <h1 className="text-3xl my-4">Edit Book</h1>
      {loading ? <Spinner /> : ''}
      <div className="flex flex-col border-2 border-blue-400 rounded-xl w-[300px] p-4 mx-auto">
        <div className='my-4'>
          <label className="text-xl mr-4 text-gray-400">Title</label>
          <input 
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-400 px-4 py-2 w-full"
          />
        </div>
        <div className='my-4'>
          <label className="text-xl mr-4 text-gray-400">Author</label>
          <input 
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-400 px-4 py-2 w-full"
          />
        </div>
        <div className='my-4'>
          <label className="text-xl mr-4 text-gray-400">Publish Year</label>
          <input 
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-400 px-4 py-2 w-full"
          />
        </div>
        <button className="p-2 bg-blue-400 m-8" onClick={handleEditBook}>Submit</button>
      </div>
    </div>
  )
}

export default EditBook