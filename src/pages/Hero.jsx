import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import {Link} from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
import BooksTable from '../components/home/BooksTable'
import BooksCard from '../components/home/BooksCard'
import NavBar from '../components/NavBar'

const Hero = () => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [showType, setShowType] = useState('table')
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios('http://localhost:8000/books');
        const fetchedBooks = response.data.data;

        // Sort the books by author
        const sortedBooks = fetchedBooks.sort((a, b) => {
          const authorA = a.author.toLowerCase();
          const authorB = b.author.toLowerCase();
          return sortOrder === 'asc' ? authorA.localeCompare(authorB) : authorB.localeCompare(authorA);
        });

        setBooks(sortedBooks);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [sortOrder]);

  const toggleSortOrder = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <div className="bg-slate-200 w-full h-full">
    <NavBar />
      <div className="mt-4 flex flex-col md:flex-row justify-center items-center gap-x-4">
        <button className="bg-blue-400 hover:bg-slate-500 px-4 py-1 rounded-lg text-white duration-300 mb-2 md:mb-0" onClick={() => setShowType("table")}>
        Table
        </button>
        <button className="bg-blue-400 hover:bg-slate-500 px-4 py-1 rounded-lg text-white duration-300" onClick={() => setShowType("card")}>
        Card
        </button>
      
      </div>
      <div className="bg-slate-200 flex sm:flex-col justify-between items-center">
        <h1 className="text-3xl my-8">Books I have read so far</h1>
        <Link to="/books/create"><MdOutlineAddBox className="text-blue-600 text-3xl" /></Link>
      </div>
      {loading ? <Spinner /> : showType === "table" ? (<BooksTable books={books}/>) : (<BooksCard books={books}/>)}
    </div>
  )
}

export default Hero