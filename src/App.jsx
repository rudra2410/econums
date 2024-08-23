import React from 'react'
import Navbar from './Component/Navbar'
import Main_Navbar from './Component/Main_Nabar'
import Home_page from './Pages/Home_page'
import { BrowserRouter , Routes , Route } from 'react-router-dom'


const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Main_Navbar />
        <Routes>
          <Route path='/' element={<Home_page/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App

