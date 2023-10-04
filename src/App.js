
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cardetails from './pages/Cardetails';
import Search from './pages/Search';
// import SearchInput from './components/Forms/SearchInput';
// import CreateProduct from './pages/CreateProduct';

function App() {
  return (
   <>

  <Routes>
  <Route path="/page/:page" element={<Cardetails/>} />
        <Route path='/' element={<Cardetails />} />
        <Route path='/search' element={<Search/>} />
      </Routes>
   </>
  );
}

export default App;
