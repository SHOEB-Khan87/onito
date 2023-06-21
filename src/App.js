
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FormData from './pages/FormData';
import Users from './pages/Users';
function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route exact key="/" path='/' element={<FormData/>}/>
      <Route exact key="Users" path='/Users' element={<Users/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
