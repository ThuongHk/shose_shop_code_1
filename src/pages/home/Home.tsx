import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { callApiProductReducer, ProductModel, ProductState } from '../../redux/reducer/productSlice';
import { DispatchType, RootState } from '../../redux/store';
import ProductItem from '../cards/ProductItem'

type Props = {}

export default function Home({ }: Props) {

  const { listProduct } = useSelector((state: RootState) => state.productSlice)
  const dispatch: DispatchType = useDispatch();
  const callApiProduct = () => {
    const action = callApiProductReducer()
    dispatch(action)
  }

  useEffect(() => {
    callApiProduct()
  }, [])
  return (
    <div className="container">
      <div className="row">

        {listProduct.map((prod: ProductModel) => {
          return <div className="col-4">
            <ProductItem prod={prod} />
          </div>
        })}
      </div>
    </div>
  )
}