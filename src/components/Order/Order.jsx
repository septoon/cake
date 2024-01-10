import React from 'react'
import './Order.css'
import { NavLink } from 'react-router-dom'

const Order = () => {
  return (
    <div className="order_wrapper">
      <NavLink to="/cake">
        <p> Назад </p>
      </NavLink>

      
    </div>
  )
}

export default Order