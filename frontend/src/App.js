
import './App.css';
 import Signup from './components/Signup';
import Login from './components/Login';
import Main from './components/Main';
import Blogs from './components/Blogs';
import AddBlog from './components/AddBlog';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <Routes>
        <Route path={'/'} element={<Login/>}> </Route>
        <Route path={'/sign'} element={<Signup/>}> </Route>
        <Route path={'/blogs'} element={<Main child={<Blogs/>}/>}></Route>
        <Route path={'/add'} element={<Main child={<AddBlog/>}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
