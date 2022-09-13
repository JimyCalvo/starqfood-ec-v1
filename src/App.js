
import { Route, Routes } from 'react-router-dom';
import Register from './Page/Register.page';
import RegisterLocal from './Page/Register.Local.page';
import NotFound from './Page/NotFound.page';
import Home from './Page/Home.page';
import Login from './Page/Login.page';

function App() {
  return (
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path='/' element={<Home />} />
      <Route path='/Register' element={<Register />} />
      <Route path='/Register/Local' element={<RegisterLocal/>}/>
      <Route path='/Login' element={<Login/>}/>
    </Routes>
  );
}

export default App;
