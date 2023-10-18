import {Routes, Route, Outlet} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Korzina from './Pages/Korzina'

function App() {

  return (
    <>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/korzina' element={<Korzina/>}/>
      </Routes>
    </>
  )
}

export default App
