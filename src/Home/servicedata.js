import React from "react";
import { serviceData } from "../Assets/products";

 const ServiceData= ()=>{
    
     return(
        <div>
            <div className="container">
             <div className="row" >
               {
                serviceData.map((item,index)=>(  
                    <div className="col-md-3" >
                        <div className="card serviceCard" style={{background:`${item.bg}`}}>
                        <div className="card-body" >
                            <img src={item.icon} alt=""/>
                            <h3>{item.title}</h3>
                            <p>{item.subtitle}</p>
                           
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
 export default ServiceData