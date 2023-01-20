
import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Login from './Auth/Login';
import Register from './Auth/Register';
import Dashboard from './Component/Dashboard/Dashboard';
import Card from './Component/Card/Card';
import Burger from './Component/Recipes/Burger1/Burger';
import MutterPanner from './Component/Recipes/burger/MutterPanner/MutterPanner';
import Pizza from './Component/Recipes/Pizza/Pizza';
import Nonveg from './Component/Category/NonVeg/Nonveg';
import Fastfood from './Component/Category/Fastfood/Fastfood'
import Vegfood from './Component/Category/Vegfood/Vegfood';


function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
       
          <Route path='/' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/burger' element={<Burger/>}/> 
          <Route path='/mutter' element ={<MutterPanner/>}/>
          <Route path='/pizza' element={<Pizza/>} />
          <Route path='/nonveg' element={<Nonveg/>}/>
          <Route path='/ffood' element={<Fastfood/>}/>
          <Route path='/veg' element={<Vegfood/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
