import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../productCard/ProductCard'

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/').then((result) => {
            setProducts(result.data);
            
        })
    }, [])
    return (
        <main>
            <h1>Lista de productos</h1>
            <section>
                {products && products.map((product) => {
                    return (
                        <ProductCard 
                        key={product.id}
                        id={product.id}
                        title={product.title} 
                        image={product.image}
                        price={product.price} 
                        
                        />
                    )
                })}

            </section>
        </main>
    );
}

export default Home