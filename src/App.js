import './App.css';
import {
  Routes,Route,Link
} from 'react-router-dom'
import Home from './Home'
import Courses from './Courses';
import New from './New';
import Old from './Old';
import Nomatch from './Nomatch';
import './form.css'
import './Courses.css'
import { AuthProvider } from './Auth';
function App() {
  return (
    <div>
      <AuthProvider>
      <nav className='navbar'>
        <Link to="/" className='link'>Home</Link> 
        <Link to="courses" className='link'>Courses</Link>
      </nav>
      <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='courses' element={<Courses />}>
          <Route path='newcourse' element={<New/>}></Route>
          <Route path='oldcourse' element={<Old/>}></Route>
        </Route>
        <Route path="*" element={<Nomatch/>}/>
      </Routes>
      </div>
      </AuthProvider>
    </div>
  );
}

export default App;
