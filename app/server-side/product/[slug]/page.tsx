import { Product, ProductsResponse } from "@/src/products";
import { Metadata } from "next";
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
    return (
        <div>
            <h1>{product.name}</h1>
        </div>
    );
}