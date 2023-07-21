import { Product, ProductsResponse } from "@/src/products";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
    params: { slug: string }
}

const getProductData = async (slug: string): Promise<Product> => {
    try {
        // TODO? GET STATIC PROPS
        const product = await fetch(`https://store.innovacode.online/api/products/${slug}`, {
            next: { revalidate: 86400 }
        }).then(res => res.json());

        return product;
    } catch (error) {
        notFound();
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {

    try {
        const { data: product } = await getProductData(params.slug);

        return {
            title: product.name,
            description: product.description
        }

    } catch (error) {
        return {
            title: 'Producto',
            description: 'Lorem Ipsun'
        }
    }
}

//! En build time
export async function generateStaticParams() {
    const { data }: ProductsResponse = await fetch('https://store.innovacode.online/api/products')
        .then(res => res.json() )

    return data.map(product => ({
        slug: product.slug
    }));
}

export default async function ProductPage({ params }: Props) {
    
    const { data: product } = await getProductData(params.slug);
    const baseUrl = 'https://store.innovacode.online/'

    return (
        <>
            <h2 className="text-3xl mb-4">Detalles del producto</h2>
            <div className="product__container">
                <div>
                    <h1>{ product.name }</h1>
                    <p className="mb-5">{ product.category.name }</p>

                    
                    <h2 className="mb-1">Descripcion:</h2>
                    <p className="text-slate-500 text-justify mb-5">{ product.description }</p>

                    <h2 className="mb-1">Precio:</h2>
                    <p className="text-slate-500 text-justify mb-5">{ product.price }$</p>

                    <button className="btn-primary hover:shadow-md">Agregar a carrito</button>
                </div>
                <Image
                    className="max-w-xl"
                    alt={ product.name }
                    src={ baseUrl + product.images[0].url }
                    width={858}
                    height={858}
                />
            </div>
        </>

    );
}