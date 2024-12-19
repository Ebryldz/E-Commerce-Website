import React from 'react'
import '../css/Product.css';
import { FaTurkishLiraSign } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

export default function Product({ product }) {
    const { id, price, image, title, description } = product;
    const navigate = useNavigate();

    return (
        <div className='card'>
            <img className='image' src={image} alt="" />
            <div>
                <p style={{ textAlign: 'center', height: '50px' }}>{title}</p>
                <h3 style={{ textAlign: 'center' }}>{price} <FaTurkishLiraSign style={{ height: '15px' }} /></h3>
            </div>

            <div className='flex-row'>
                <button onClick={() => navigate("/product-details/" + id)} className='detail-button'>Detail</button>
            </div>


        </div>
    )
}
