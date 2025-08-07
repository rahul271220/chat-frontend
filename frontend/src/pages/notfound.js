// src/pages/NotFound.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
const NotFound = () => {

  const { items, loading, error } = useSelector((state) => state.products);
  const [productList,setProduct] =  useState(null);

  useEffect(() => {
    console.log(items)
    setProduct(items);
    return () => {
      // clearProducts()
    }
  }, [items]);
  return (
    <div className="p-4 text-center">
      <h2 className="text-3xl font-bold text-red-600">404 - Page Not Found</h2>
      <p className="mt-4">The page you are looking for does not exist.</p>
      <div>
                {
                    productList && productList.map((item)=> {
                        return (
                            <div key={item.id} style={{
                                'marginTop': '10px',
                                'border': '1px solid red',
                                'borderRadius': '8px',
                                'padding': '8px'
                            }}>
                                <p>{item.description}</p>
                                <p>{item.brand}</p>
                            </div>
                        )
                    })
                }
            </div>
    </div>
  );
};

export default NotFound;
