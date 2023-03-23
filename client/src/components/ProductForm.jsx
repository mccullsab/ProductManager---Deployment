import React, { useState, useEffect } from 'react';

const ProductForm = (props) => {
    const [title, setTitle] = useState(props.product.title)
    const [price, setPrice] = useState(props.product.price)
    const [description, setDescription] = useState(props.product.description)

    const handleSubmit = (e) => {
        e.preventDefault();

        const productInfo = {
            title,
            price,
            description
        };

        props.useForm(productInfo);
    };

    useEffect(() => {
        setTitle(props.product.title);
        setPrice(props.product.price);
        setDescription(props.product.description)
        }, [props.product._id])

    return (
            <form onSubmit={handleSubmit} className='border ml-5 pt-5 px-5 pb-5 mr-5 pr-5'>
                <p>
                    Title:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </p>
                <p>
                    Price:
                    <input
                        type="integer"
                        rows='30'
                        cols='30'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </p>
                <p>
                    Description:
                    <input
                        type="text"
                        rows='30'
                        cols='30'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </p>
                <button className='btn btn-primary'>Submit</button>
            </form>
    )
}

export default ProductForm;