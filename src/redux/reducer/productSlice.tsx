import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';
import { log } from 'console';
import { DispatchType } from '../store';


export interface ProductModel {
    id: number;
    name: string;
    alias: string;
    price: number;
    description: string;
    size: string;
    shortDescription: string;
    quantity: number;
    deleted: boolean;
    categories: string;
    relatedProducts: string;
    feature: boolean;
    image: string;
}

export type ProductState = {
    listProduct: ProductModel[]
}

const initialState: ProductState = {
    listProduct: [
        {
            "id": 1,
            "name": "Adidas Prophere",
            "alias": "adidas-prophere",
            "price": 350,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "size": "[36,37,38,39,40,41,42]",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 995,
            "deleted": false,
            "categories": "[{\"id\":\"ADIDAS\",\"category\":\"ADIDAS\"},{\"id\":\"MEN\",\"category\":\"MEN\"},{\"id\":\"WOMEN\",\"category\":\"WOMEN\"}]",
            "relatedProducts": "[2,3,5]",
            "feature": true,
            "image": "https://shop.cyberlearn.vn/images/adidas-prophere.png"
        }
    ]
}

const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        getProduct: (state: ProductState, action: PayloadAction<ProductModel[]>) => {
            state.listProduct = action.payload
        }
    }
});

export const { getProduct } = productSlice.actions

export default productSlice.reducer


export const callApiProductReducer = () => {
    return async (dispatch: DispatchType) => {
        try {
            const result = await axios({
                url: 'https://shop.cyberlearn.vn/api/Product',
                method: 'GET'
            })

            const content: ProductModel[] = result.data.content
            const action = getProduct(content)
            dispatch(action)

        } catch (err) {
            console.log(err);

        }
    }
}