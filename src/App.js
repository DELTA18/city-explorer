import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {Home} from "./pages/Home";
import {Login} from './pages/Login';
import {Signup} from './pages/Signup';
import Destinations from './pages/Destinations';
import Thingstodo from './pages/Thingstodo';
import Foodanddine from './pages/Foodanddine';

import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path='/destinations' element={ <Destinations/> } />
          <Route path='/thingstodo' element={ <Thingstodo/> } />
          <Route path='/foodanddining' element={ <Foodanddine/> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
