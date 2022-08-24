import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';

function ViewProduct() {
    const params = useParams();
    console.log(params);
    const [searchParams, setSearchParams]= useSearchParams();
    console.log(...searchParams);

const[productData,setProductData]=useState({})
    useEffect(()=>{
      loadProduct()
    },[])
    let loadProduct = async () => {
      try{
        let product = await axios.get(`https://628209e19fac04c6540df59f.mockapi.io/products/${params.id}`)
      setProductData(product.data)
      } catch(error){
        console.log(error)
      }
     
    }

  return (
    <>
    <h2>{productData.product}</h2>
    <h3>{productData.model}</h3>
    <h3>{productData.company}</h3>
    <h3>{productData.color}</h3>
    <h3>{productData.price}</h3>
    

    </>
  )
}

export default ViewProduct