import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from '../components/Products/Products'
import ProductDetail from '../components/ProductDetails/ProductDetail'


const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Products />} />
                    <Route path='/product/:id' element={<ProductDetail />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router