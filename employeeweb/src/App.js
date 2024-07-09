import Header from './pages/header/Header';
import './App.css';
import { Route, Routes } from 'react-router';
import Dashboard from './pages/dashboard/Dashboard';
import NoMatch from './pages/noMatch/NoMatch';
import PostUser from './pages/employee/PostUser';


function App() {
  return (
 
   <>
    <Header />
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/employee' element={<PostUser/>}/>
      <Route path='*' element={<NoMatch/>}/>
    </Routes>
   </>

  );
}

export default App;
