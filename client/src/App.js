import { Routes, Route} from 'react-router-dom'
import Checkout from './pages/Checkout';
import FoodPage from './pages/FoodPage';
import Home from './pages/Home';
import Login from './pages/Login';
import RestaurantHome from './pages/RestaurantHome';
import Signup from './pages/Signup';
function App() {
  return (
    <div>
     
        <Routes>
          <Route index element={<Home/>}/>
          <Route path ='/restauranthome' element={<RestaurantHome/>}/>
          <Route path ='/foodpage' element={<FoodPage/>}/>
          <Route path ='/login' element={<Login/>}/>
          <Route path ='/signup' element={<Signup/>}/>
          <Route path ='/checkout' element={<Checkout/>}/>
        </Routes>

    </div>
  );
}

export default App;
