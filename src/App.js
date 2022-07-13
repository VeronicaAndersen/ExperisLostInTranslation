import './App.css';
import Login from './View/Login';
import Translation from './View/Translation';
import Profile from './View/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className = "header">
        <h1>Lost in Translation</h1>
      </header>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/translation' element={<Translation />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
