import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'
const ProductCard = ({id, title, price, image, description}) => {
  return (
    <div className="cardPorducts">
        <h2 className="productInfo">
            <Link to={`/product/${id}`}>
             {title}   
            </Link>
        </h2>
        <img className="productImage" src={image} alt="ProductImage" />
        {description && <p>{description}</p>}
        <p>Precio: {price}</p>
    </div>
  )
}

export default ProductCard