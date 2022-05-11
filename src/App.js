
import './App.css';
// import Footer from './Footer';
import Home from './components/Home';
import React, { useState} from 'react'
import { BrowserRouter as Router,  Route ,Routes} from "react-router-dom";
import Product from './components/Product';
import Products from './components/Products';

import {CardProvider} from './components/CardContext';




const App=()=>{
const [data , setData] = useState('');
  return(

<Router>

  <CardProvider>
    <div>
<Routes>

  <Route exact path="/" element={<Home/>}></Route>
  <Route path = "/product" element={<Product/>}></Route>
    <Route path = "/products" element={<Products/>}></Route>

  
  </Routes>

      
      


    </div>
    </CardProvider>
</Router>

  );
}
 

export default App;
