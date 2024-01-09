import React from 'react'
import { data } from '../common/data'
import './Catalog.css'

import { ReactComponent as CakeImg } from '../common/img/cake.svg'
import { Link } from 'react-router-dom'

const Catalog = () => {
  return (
    <div className="catalog_wrapper">
      {
        data.map(item => {
          return (
            <div key={item.id} className='catalog_item'>
              <CakeImg width="60px" />
              <h3>{item.name} · {item.price}₽</h3>
              <button className="btn_order">Добавить</button>
            </div>
          )
        })
      }
      <Link to='/order'>
        <button className="see_order">Посмотреть заказ</button>
      </Link>
    </div>
  )
}

export default Catalog