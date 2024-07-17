import React from "react";
import { BsBagFill } from "react-icons/bs";



const Footer = () => {
    return (
        <>
          <div className="Foot" style={{display:'flex',justifyContent:'space-evenly',backgroundColor:'rgb(6,6,59)',color:'White'}}>
            <div>
            <h4 style={{marginTop:'50px'}}><BsBagFill/>Mart</h4><br></br>
            <p>Lorem ipsum dolor sit amet,</p>
            <p>consectetur adipiscing elit.</p>
            <p>Auctor libero id et, in</p>
            <p>grravida.Sit diam duis</p>
            <p>maueis nulla cursus.Erat et</p>
            <p>lectus vel ut sollicitudin elit</p>
            <p>at  amet.</p>
            </div>

            <div>
            <h4 style={{marginTop:'50px'}}>About Us</h4><br></br>
            <p>Careers</p>
            <p>Our Stores</p>
            <p>Our Cares</p>
            <p>terms & Conditions</p>
            <p>Privacy Policy</p>
            </div>

            <div>
            <h4 style={{marginTop:'50px'}}>Customer care</h4><br></br>  
            <p>Help Center</p>
            <p>How To Buy</p>
            <p>Track Your Order</p>
            <p>Corporate & Bulk</p>
            <p>Purchasing</p>
            <p>Returns & Refunds</p>
            </div>

            <div>
              <h4 style={{marginTop:'50px'}}>Contact Us</h4><br></br>
              <p>70 Washington Square</p>
              <p>South,New York,NY 10012,</p>
              <p>United States</p><br></br>
              <p>Email:example@gmail.com</p><br></br>
              <p>phone:+1 1123456780</p>
            </div>



          </div>
        </>
    )
}
export default Footer