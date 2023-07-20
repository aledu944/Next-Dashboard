'use client'
import { ProductCard } from "./ProductCard";
import { useProducts } from "../hooks/useProducts";


export const ProductsListClient = () => {
    
    const { products, isLoading } = useProducts();

    if (isLoading) {
        return (
            <div className="flex items-center justify-center">
                <h2>Cargando...</h2>
            </div>
        )
    }
    return (
        <div className="product__list">
            {
                products?.map( product => (
                    <ProductCard key={ product.id } product={ product } />
                ))
            }
        </div>
    )
}
