import { ProductsData } from "../interfaces/products-response"
import { ProductCard } from "./ProductCard";


interface Props{
    products: ProductsData[];
}

export const ProductsList = ({ products }: Props) => {
    return (
        <div className="product__list">
            {
                products.map( product => (
                    <ProductCard key={ product.id } product={ product } />
                ))
            }
        </div>
    )
}
