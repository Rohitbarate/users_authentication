import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <Router basename='/'>
    <Routes >
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
    </Routes>
    </Router>
  );
}

export default App;
