import { ProductsData, ProductsList, ProductsResponse } from "@/src/products";


const getAllProducts =  async (): Promise<ProductsData[]> => {

    //TODO: GET SERVER SIDE PROPS
    const { data }: ProductsResponse = await fetch('https://store.innovacode.online/api/products', 
        { cache:'no-store' }
    )
    .then(res => res.json() )
    console.log(data);
    return data;
}

export default async function ServerSidePage() {
    const products = await getAllProducts();
    return (
        <>
            <h1 className="mb-5">Productos SSR</h1>
            <ProductsList products={ products } />
        </>
    );
}