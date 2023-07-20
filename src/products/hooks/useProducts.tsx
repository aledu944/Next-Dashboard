'use client'
import { useState, useEffect } from 'react';

import axios from 'axios';
import { ProductsData, ProductsResponse } from "../interfaces/products-response";

export const useProducts = () => {

    const [products, setProducts] = useState([] as ProductsData[]);
    const [isLoading, setIsLoading] = useState(false)

    const getAllProducts = async () => {
        try {
            setIsLoading( true );
            const { data: { data } } = await axios.get<ProductsResponse>('https://store.innovacode.online/api/products');
            setProducts( data )
            console.log(products);
            setIsLoading( false );
        } catch (error) {
            
        } finally{
            setIsLoading( false );
        }
    }


    useEffect(() => {
        getAllProducts();
    }, [])
    


    return {
        products,
        isLoading,
    }
}
