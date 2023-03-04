import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';
import { log } from 'console';
import { DispatchType } from '../store';




export interface ProductDetailModel {
    id: number;
    name: string;
    alias: string;
    price: number;
    feature: boolean;
    description: string;
    size: string[];
    shortDescription: string;
    quantity: number;
    image: string;
    categories: Category[];
    relatedProducts: RelatedProduct[];
}

export interface Category {
    id: string;
    category: string;
}

export interface RelatedProduct {
    id: number;
    name: string;
    alias: string;
    feature: boolean;
    price: number;
    description: string;
    shortDescription: string;
    image: string;
}

export interface ProductDetailState {
    ProductDetail: ProductDetailModel[] | null
}

const initialState: ProductDetailState = {
    ProductDetail: null
}

const productDetailSlice = createSlice({
    name: 'productDetailSlice',
    initialState,
    reducers: {
        listDetailProduct: (state:ProductDetailState, action: PayloadAction<ProductDetailModel[]> ) =>{
            state.ProductDetail = action.payload
        }
    }
});

export const { listDetailProduct } = productDetailSlice.actions

export default productDetailSlice.reducer

export const  listProductDetail = (id:string) =>{
    return async (dispatch: DispatchType) =>{
        try{
             const result = await axios({
                url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`
                
             })

             const content: ProductDetailModel[] = result.data.content
             const action = listDetailProduct(content)
             dispatch(action)
        }catch(err){
            console.log(err)    
        }
    }
}