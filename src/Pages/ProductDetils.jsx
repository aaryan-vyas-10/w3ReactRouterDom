import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetils = () => {
  const {id} = useParams();
  const [product, steProdcut] = useState(null);

  useEffect(() => {
    const fetechSingleProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        steProdcut(data);
      }
      catch (error) {
        console.log("fetching singleProduct Data : ", error);
      }
    }
    fetechSingleProduct();
  }, [id]);
  if (!product) return <p className='text-center mt-10 text-white text-4xl font-bold'>Lodding...</p>
  return (
     <div className='flex justify-start items-center py-10 px-4'>
            <div className='max-w-2xl w-full bg-white shadow-lg rounde-lg p-6 rounded-xl cursor-pointer flex flex-col gap-5'>
                <img src={product.image} alt={product.title} className='h-64 mx-auto object-contain mb-6' />
                <h2 className='font-bold text-3xl'>{product.title}</h2>
                <p className='text-gray-600'>{product.description}</p>
                <div className='flex items-start justify-cente flex-col gap-2'>
                    <p className='font-bold text-xl text-black'>Price  <span className='font-bold text-xl text-cyan-700'>: ${product.price}</span> </p>
                    <p className='font-bold text-xl text-black'>Category <span className='font-bold text-xl text-cyan-700'>: {product.category}</span></p>
                    <p className='font-bold text-xl text-black'>Rating <span className='font-bold text-xl text-cyan-700'>: {product.rating.rate}</span></p>
                </div>
            </div>
        </div>
  )
}

export default ProductDetils
