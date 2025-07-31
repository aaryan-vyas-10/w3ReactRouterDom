import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Product = () => {
  const [products, steProdcut] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        steProdcut(data);
        // console.log("data : ",data);
        // console.log("product : ",product);
      }
      catch (error) {
        console.log("fetching product data : ", error);
      }
    }
    fetchProductData();
  }, []);

  return (
    <div className='p-6'>
      <h2 className='text-4xl text-white text-center font-bold mb-4'>All Products</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
        {products.map(product => (
          <Link to={`/product/${product.id}`} key={product.id} className='bg-white rounded shadow-md p-7 hover:shadow-lg transitions'>
            <img src={product.image} alt={product.title} className='h-78 font-semibold mb-3 w-full truncate object-fill rounded' />
            <h3 className='text-lg font-semibold mb-2 truncate text-black'>{product.title}</h3>
            <p className='text-yellow-600 font-bold text-2xl'>${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Product
