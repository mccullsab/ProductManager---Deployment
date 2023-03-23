import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';


const CreateAndDashboard = () => {
    const nav = useNavigate();

    const [formErrors, setFormErrors] = useState([]);

    const [productList, setProductList] = useState([])

    const removeFromDom = (productToDelete) => {
        setProductList(productList.filter((product) => product._id !== productToDelete))
    }

    const createProduct = (newProduct) => {
        axios
            .post('http://localhost:8000/api/products', newProduct)
            .then((results) => {
                console.log(results);
                setProductList([...productList,results.data.product])
                nav('/products');
            })
            .catch((err) => {
                // console.log(err)
                const errorResponse = err.response.data.error.errors
                const errorArr = []
                for(const key in errorResponse){
                    // console.log(errorResponse[key].message)
                    errorArr.push(errorResponse[key].message)
                    setFormErrors(errorArr);
                }
            })
    };

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then((res) => {
                setProductList(res.data.products)
                console.log(res)
            })
            .catch((err) => console.log(err));
    }, [])

    return (
        <div>
            <div className=''>
                <h2>Product Manager</h2>
                <ProductForm useForm={createProduct} product ={{ title: '', price: 0, description: '' }}/>
                {formErrors && formErrors.map((val, i) => 
                <p className='text-danger'>{val}</p>)}
            </div>
            <h1>All Products:</h1>
            <table className='table'>
                <tbody>
                    {productList.map((product, indx) => (
                        <tr key={indx}>
                            <td>Name: <Link to={`/products/${product._id}`}><span>{product.title}</span></Link></td>
                            <td>
                            <Link to={`/products/${product._id}/edit`}>Edit</Link> |
                            <DeleteButton productId = {product._id} successCallback = {() => removeFromDom(product._id)}/>
                            </td>
                        </tr>
                    ))};
                </tbody>
            </table>
        </div>
    )
}

export default CreateAndDashboard;