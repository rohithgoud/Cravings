import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Checkout from './pages/Checkout';
import FoodPage from './pages/FoodPage';
import Home from './pages/Home';
import Login from './pages/Login';
import RestaurantHome from './pages/RestaurantHome';
import Signup from './pages/Signup';

function App() {

  const router = createBrowserRouter([
    {
        path : '/',
        element : <Home></Home>},

    {
      path : '/login',
      element : <Login></Login>
  },
  {
    path : '/signup',
    element : <Signup></Signup>
},
{
  path : '/restauranthome',
  element : <RestaurantHome></RestaurantHome>
},
{
  path : '/foodpage',
  element : <FoodPage></FoodPage>
},
{
  path : '/checkout',
  element : <Checkout></Checkout>
},
  
  ])


  return (
    <main>
    <RouterProvider router={router}></RouterProvider>
</main>
  );
}

export default App;
