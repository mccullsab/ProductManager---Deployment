import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'
import DeleteButton from '../components/DeleteButton';

const DetailsPage = () => {
    const [product, setProduct] = useState()
    const { id } = useParams();
    const nav = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                setProduct(res.data.product)
            })
            .catch((err) => console.log(err))
    }, [])

    const goBackToDashboard = () => {
        nav('/products')
    }

    return(
        <div>
            <h2>Info</h2>
            {product && (
                <div>
                    <p>Title: {product.title}</p>
                    <p>Price: {product.price}</p>
                    <p>Description: {product.description}</p>
                    <DeleteButton productId = {product._id} successCallback={goBackToDashboard}/>
                </div>
            )}
        </div>
    )
}

export default DetailsPage;