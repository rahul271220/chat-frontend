import { useEffect, useState } from "react"
import  useApi from './../authApicalls/useApi'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, clearProducts } from "../authApicalls/productsReducer";
import { Navigate, useNavigate } from "react-router-dom";

export default function Dashboard() {
    // const { data, error, isLoading } = useGetProductListQuery();
      
    // const { data, error, loading, fetchData } = useApi(
    //     '/products',
    //     { method: 'GET' },
    //     false // don't call automatically
    //   );

      const dispatch = useDispatch();
      const navigate =useNavigate();
  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    console.log("mounted")
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    console.log(items, 'here')
    setProduct(items);
  }, [items]);

  useEffect(() => {

    return () => {
      dispatch(clearProducts())
    }
  }, [])

      

    const [productList,setProduct] =  useState(null);

    //   useEffect(() => {
    //     if (data) {
    //       console.log('New user data received:', data);
    //       setProduct(data.products);
    //     }
    //   }, [data]);

      useEffect(()=> {
        // fetchData();
      }, [])
    return (
        <div>
            hello to dashboard

            <button onClick={()=> {
              navigate('/not-found');
            }}>Navigte to not found</button>
            <div>
                {
                    items && items.map((item)=> {
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
    )

}