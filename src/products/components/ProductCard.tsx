import Image from "next/image";
import Link from 'next/link';

import { ProductsData } from "../interfaces/products-response"

interface Props{
    product: ProductsData;
}

export const ProductCard = ({ product }: Props) => {
    const baseUrl = 'https://store.innovacode.online/'
    return (
        <div className="product__card">
            <Image
                alt={ product.name }
                src={ baseUrl + product.images[0].url }
                width={858}
                height={858}
            />
            <h3 className="mt-2">{ product.name }</h3>
            <p className="text-slate-500 line-clamp-2">{ product.description }</p>
            <Link 
                className="btn-primary"
                href={`/server-side/product/${ product.slug }`}
            >
                    Ver Producto
            </Link>
        </div>
        
    )
}
