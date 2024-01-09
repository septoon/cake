import React, { useState } from 'react';
import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom'

import Catalog from './components/Catalog';
import Order from './components/Order/Order';

function App() {
  const [cartItem, setCartItem] = useState({
    items: [],
    totalCount: 0,
    totalPrice: 0
  })
  return (
    <div className="App">
      {/* <Catalog /> */}
      <Routes>
        <Route exact path='/' element={ <Catalog/> } />
        <Route path='/order' element={ <Order/> } />
      </Routes>

      <NavLink to='/order'>
        <button className="see_order">Посмотреть заказ</button>
      </NavLink>
    </div>
  );
}

export default App;
