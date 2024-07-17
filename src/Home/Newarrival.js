import React from "react";
import { Products } from "../Assets/products";
import { RiStarSFill } from "react-icons/ri";
import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

function Newarrival(){

const filteredProducts = Products.filter(product => product.category === "mobile" || product.category === "wireless");
console.log(filteredProducts);


    return(
        <div>
           <div className="container">
             <div className="row">
             <h2 className='mb-2' style={{marginTop:'50px'}}>New Arrivals </h2>

             {
                filteredProducts.map((item)=>(
                    <div className="col-md-4 mb-2 ">
                        <div className="card arrivaleCard">
                        <div className="hope " >
                            <Link  to={`/Productdetails/${item.id}`}>
                            <img src={item.imgUrl}  style={{height:'300px',width:'300px'}} alt=""></img>
                            </Link>
                            <h3 style={{marginRight:"20px"}}>{item.productName} </h3>
                            <h6 className="bigdiscountfivestar" style={{color:"orange",marginLeft:"1px"}} > {
                                   [...Array(5)].map(star => {
                                     return <RiStarSFill size={25}/>
                                      })}
                            </h6>
                              <h3 style={{color:"black"}}>{item.price}</h3>
                              <h4 type="submit"style={{marginLeft:'300px'}}><BsPlusCircle/></h4> 

                         </div>
                         </div>
                    </div>     
                ))        
             }               
            
            
            
            
            
            
            </div>
            
            </div>  
        </div>
     )
 }
 export default Newarrival