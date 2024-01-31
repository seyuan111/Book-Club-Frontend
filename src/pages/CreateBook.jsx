import React, {useState} from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    }
    setLoading(true);
    axios.post('http://localhost:8000/books', data)
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
      <NavBar />
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>
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
        <button className="p-2 bg-blue-400 m-8" onClick={handleSaveBook}>Submit</button>
      </div>
    </div>
  )
}

export default CreateBook