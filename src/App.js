
import { Provider } from 'react-redux';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
}from "react-router-dom";
import store from './components/redux/store';
import Home from './screens/Home';
import Cart from './screens/Cart';
import OrderScreen from './screens/OrderScreen';


function App() {
  return (
<Router>
<Provider store={store}>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/cart' element={<Cart/>}/>
<Route path='/orderscreen' element={<OrderScreen/>}/>
</Routes>
</Provider>
</Router>
    
  );
}

export default App;
