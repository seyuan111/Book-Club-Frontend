import './App.css';
import {Routes, Route} from 'react-router-dom'
import Hero from './pages/Hero'
import CreateBook from './pages/CreateBook'
import ShowBook from './pages/ShowBook'
import EditBook from './pages/EditBook'
import DeleteBook from './pages/DeleteBook'
import Home from './pages/Home'
import Login from './pages/Login'
import SignIn from './pages/SignIn'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Hero" element={<Hero />}></Route>
      <Route path="/books/create" element={<CreateBook />}></Route>
      <Route path="/books/details/:id" element={<ShowBook />}></Route>
      <Route path="/books/edit/:id" element={<EditBook />}></Route>
      <Route path="/books/delete/:id" element={<DeleteBook />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/SignIn" element={<SignIn />}></Route>
    </Routes>
  );
}

export default App;
