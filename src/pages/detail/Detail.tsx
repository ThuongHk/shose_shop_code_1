import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType, RootState } from '../../redux/store'
import ProductItem from '../cards/ProductItem'
import { useParams } from 'react-router-dom'
import { listProductDetail } from '../../redux/reducer/productDetailSlice'

type Props = {}

export default function Detail({}: Props) {
  const { ProductDetail } = useSelector((state: RootState) => state.productDetailSlice)
  console.log(ProductDetail);
  const params = useParams()
  const dispatch:DispatchType = useDispatch()

  const getProductDetailApi = () =>{
    const id:string | undefined = params.id
    const actionAsync = listProductDetail(id as string)
    dispatch(actionAsync)
  }

  useEffect(() => {
  
  getProductDetailApi()
    return () => {
    
    }
  }, [])
  
  console.log(ProductDetail)
  return (
    <div className='container'>
       <div className='row mt-2'>
        <div className='col-4'>
            <img style={{ height: '350px', width: '350px', backgroundColor: 'violet'}} />
        </div>
        <div className='col-8'>
          <h3>{}</h3>
          <p>Lorem ipsum dolor sit amet.The midsole contains 20% more Boost for an amplified Boost feeling.</p>
        </div>
       </div>
       <h3 className='text-center mt-4'>_Realate Product_</h3>
       <div className="row">
        <div className="col-4">
          <ProductItem />
        </div>
        

       </div>
    </div>
  )
}