import React from "react";
import { BiSolidUser } from "react-icons/bi";
import { IoCart } from "react-icons/io5";



const Header = () => {
    return (
      <>
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
                  <div class="container-fluid">
                     <img src="https://www.achieversit.com/assets/images/logo-white.png" alt="AchieversIT Software Training Institute in Bangalore"></img>
                      <ul class="navbar-nav">
                          <li class="nav-item">
                              <a class="nav-link active" aria-current="page" href='/home'>Home</a>
                          </li>
                          <li class="nav-item">
                              
                              <a class="nav-link active" aria-current="page" href='/shop'>Shop</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link active" aria-current="page" href="/cart">Cart</a>
                          </li>
                          <li>
                            <a class="nav-link active" aria-current="page" href="/BiSolidUser"><BiSolidUser/></a>
                          </li>
                          <li>
                          <a class="nav-link active" aria-current="page" href="/cart"><IoCart /></a> 
                          </li>
                      </ul>
                  </div>  
              </nav>
 </>
    )
}
export default Header