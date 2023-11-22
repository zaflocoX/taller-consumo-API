import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../productCard/ProductCard'
import axios from 'axios'

const ProductDetail = () => {
    let { id } = useParams()
    const [productDetails, setProductDetails] = useState({})
    useEffect (() =>{
        axios.get(`https://fakestoreapi.com/products/${id}`).then((result) =>{
            setProductDetails(result.data)
        })   
    }, []) 
    return (
        <div className="productDetailsInfo">
            <h1>Informacion del producto {id}</h1>
            {productDetails && 
                <ProductCard 
                    id = {productDetails.id}
                    title = {productDetails.title}
                    image={productDetails.image}
                    price={productDetails.price}
                    description={productDetails.description}
                
                />
            }


        </div>
    )
}

export default ProductDetail