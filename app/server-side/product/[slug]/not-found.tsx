import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex items-center justify-center">
            <h1>No se encontro el producto</h1>
            <Link href='/server-side' className='btn-primaty max-w-min'>Ver listado de productos</Link>
        </div>
    );
}