import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'

import ProductForm from '../components/ProductForm';

const UpdatePage = () => {
    const nav = useNavigate();
    const { id } = useParams();
    const [oneProduct, setOneProduct] = useState({});
    
    const [formErrors, setFormErrors] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                const product = res.data.product
                // console.log(res);
                // for (var i=0; i < 1000000000; i++){
                //     let x = i*i;
                // }
                setOneProduct(product);
            })
            .catch((err) => console.log(err))
    }, [])

    const updateProduct = (productToUpdate) => {
        axios
            .put(`http://localhost:8000/api/products/${id}`, productToUpdate)
            .then((results) => {
                console.log(results)
                nav(`/products/${id}`);
            })
            .catch((err) => {
                // console.log(err)
                const errorResponse = err.response.data.error.errors
                const errorArr = []
                for(const key in errorResponse){
                    errorArr.push(errorResponse[key].message)
                    setFormErrors(errorArr);
                }
            })
    };


    return (
        <div>
            <h2>Update</h2>
            {/* { oneProduct.title !== undefined && */}
            <ProductForm useForm={updateProduct} product={oneProduct} />
            {formErrors && formErrors.map((val, i) => 
                <p className='text-danger'>{val}</p>)}
            {/* } */}
        </div>
    )
}

export default UpdatePage;