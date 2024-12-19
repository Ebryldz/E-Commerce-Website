import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../css/Product.css';
import '../css/ProductDetails.css'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProduct } from '../redux/slices/productSlice';
import { FaTurkishLiraSign } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { calculateBasket } from '../redux/slices/basketSlice';
import { addToBasket } from '../redux/slices/basketSlice';

export default function ProductDetails() {

    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product);
    const { price, image, title, description } = selectedProduct;
    const [count, setCount] = useState(0);


    const dispatch = useDispatch();

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const addBasket = () => {
        const payload = {
            id,
            price,
            image,
            title,
            description,
            count
        }

        dispatch(addToBasket(payload));
        dispatch(calculateBasket());
    }


    useEffect(() => {
        getProductById();

    }, [])

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product));
            }
        })

    }

    return (
        <div className='details-product'>
            <div style={{ marginRight: '40px' }}>
                <img src={image} width={300} height={500} alt='' />
            </div>
            <div>
                <h1 style={{ fontFamily: 'arial' }}>{title}</h1>
                <p style={{ fontFamily: 'arial', fontSize: '20px' }}>{description}</p>
                <h1 className='price-styles'>{price}<FaTurkishLiraSign style={{ height: '40px' }} /></h1>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <CiCirclePlus onClick={increment} className='plus-minus-button' /> <span style={{ fontSize: '35px' }}>{count}</span>
                    <CiCircleMinus onClick={decrement} className='plus-minus-button' />
                </div>

                <div>
                    <button onClick={addBasket} className='add-button'>add to cart</button>
                </div>

            </div>



        </div >
    )
}
