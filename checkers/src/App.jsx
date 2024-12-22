import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import EntryPage from './views/EntryPage'
import GamePage from './views/GamePage'
import ResultPage from './views/ResultPage'

function App() {

  return (
    <>
      <Link to={"/login"}>login</Link>
      <br></br>
      <Link to={"/game-page"}>game-page</Link>
      <br></br>
      <Link to={"/results"}>results</Link>
      <br></br>

      <Routes>
        <Route path='login' element={<EntryPage />} />
        <Route path='game-page' element={<GamePage />} />
        <Route path='results' element={<ResultPage />} />
      </Routes>
    </>
  )
}

export default App
