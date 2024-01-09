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
        <Route exact path='/cake/' element={ <Catalog/> } />
        <Route path='/cake/order' element={ <Order/> } />
      </Routes>

      <NavLink to='/cake/order'>
        <button className="see_order">Посмотреть заказ</button>
      </NavLink>
    </div>
  );
}

export default App;
