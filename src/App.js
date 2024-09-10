import {BrowserRouter,Routes,Router,Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Dashboard from './dashboard/Dashboard';
import Login from '../src/pages/login'
import Signup from '../src/pages/signup'
import  Blog from '../src/components/blog'
function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Blog/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>

      <Route path='/login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
