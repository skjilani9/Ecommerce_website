import React, { useEffect } from "react";
import { HiArrowDown } from "react-icons/hi";
import "./Home.css";
import ProductCard from './Product'
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from '../../actions/productAction'
import { useSelector, useDispatch } from 'react-redux'
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom"; 



const Home = () => {
  const navigate = useNavigate()
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(state => state.products)

  const seeproduct = ()=>{
    navigate("/products")
  }

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors())
    }
    dispatch(getProduct());
  }, [dispatch, alert, error])


  return (
    <>
      {loading ? <Loader /> : <>
        <MetaData title={"Home Page"} />
        <div className="banner">
          <p>Welcome to Home Page</p>
          <h1>FIND AMAZING PRODUCTS BELOW</h1>

          <a href="#container">
            <button>
              Scroll <HiArrowDown />
            </button>
          </a>
        </div>
        <h2 className="homeHeading">Featured Products</h2>
        <div className="container" id="container">
          {products && products.map(product => (
            <ProductCard product={product} />
          ))}
        </div>
        <div className="all-btn">
          <button onClick={seeproduct}>see all products</button>
        </div>


      </>}
    </>
  );
};

export default Home;