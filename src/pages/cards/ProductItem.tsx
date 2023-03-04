import React from 'react'
import { NavLink } from 'react-router-dom'
import { ProductModel } from '../../redux/reducer/productSlice'


type Props = {
  prod?: ProductModel
}

export default function ProductItem({ prod }: Props) {


  return (
    <div className='card mt-2' style={{ width: '300px', height: '400px' }}>
      <div className='card_heade position-relative'>
        <i className="fa fa-heart position-absolute text-danger  end-0 mx=2 mt-1 ml-1"></i>
        <img src={prod?.image ? prod.image : require('../../assets/img/day.png')} alt='ww' style={{ width: '200px', height: 'auto' }} />
      </div>
      <div className='card_body'>
        <h3>{prod?.name ? prod.name : 'Asidat'}</h3>
        <p>{prod?.shortDescription ? prod.shortDescription : 'lorem The midsole contains 20% more Boost for an amplified Boost feeling. hfgdj bnchus kjsfd mch'}</p>
      </div>
      <div className='d-flex justify-content-center'>
        <NavLink className='w-100 h-100 bg-danger text-center' to={`${prod?.id}`}>Buy now</NavLink>
        <h6 className='w-100 h-100 bg-dark text-center text-light'>{prod?.price ? prod.price : '1000$'}</h6>
      </div>
    </div>
  )
}