import './App.css'
import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import AllPlayers from './components/AllPlayers';
import SingleUser from './components/SingleUser';
import AddPlayerForm from './components/AddPlayerForm';

function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>} />
        <Route path='/players' element={<AllPlayers/>} />
        <Route path='/players/:id' element={<SingleUser/>} />
      </Routes>
    </>
  )
}

export default App
