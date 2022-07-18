import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import Login from './View/Login'
import Translation from './View/Translation'
import Profile from './View/Profile'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/translation' element={<Translation />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>

  );
}

export default App
