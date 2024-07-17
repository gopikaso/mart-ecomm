import React, { useState } from "react";
import { discoutProducts } from "../Assets/products";
import { RiStarSFill } from "react-icons/ri";
import { BsPlusCircle } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { Products } from "../Assets/products";
import { add } from "../Cart/Cartslice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";



const Bigdiscount = () => {
  const {id}=useParams()
  const [data, setData] = useState(false)
  const dispatch = useDispatch()
  const Productdetails=Products.find((item)=>item.id===id)

  const filteredProducts = Products.filter(Products => Products.category === "sofa" || Products.category === "mobile" || Products.category === "chair");
  console.log(filteredProducts);


  // function click(item) {
    // dispatch(add(item))
    // toast.success('Product has been added')

  // }
  const handletoadd=(item)=>{
    dispatch(add(item))
    setData(true)
    toast.success('Product has been added to cart' )
  }
  return (

    <div className="container">
      <div className="row">
        <h2 className="mt-4">Big Discount </h2>

        {discoutProducts.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className="card bigDisCard">
              <div className="card">
                <button>{item.discount}</button>
                <Link to={`/Productdetails/${item.id}`}>
                  <img
                    src={item.imgUrl}
                    style={{ height: "300px", width: "300px" }}
                    alt="sda"
                  />
                </Link>
                <h3 style={{ marginRight: "20px" }}>{item.productName} </h3>
                <h6 className="bigdiscountfivestar" style={{ color: "orange", marginLeft: "1px" }}>
                  {[...Array(5)].map((star, index) => (
                    <RiStarSFill size={25} />
                  ))}
                </h6>
                <h3 style={{ color: "black" }}>{item.price}</h3>
                <h4 type="submit" style={{ marginLeft: '300px' }}><BsPlusCircle onClick={() => handletoadd(item)} /></h4>

              </div>




            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Bigdiscount;
