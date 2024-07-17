import React from "react";
import { SliderData } from "../Assets/products";

const Sliderdata = () => {


  return (
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {SliderData.map((value, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            <div className="container">
              <div className="row" >
                <div className="col-md-6" style={{paddingTop:"10%"}}>
                  <div className="">
                    <h2 style={{ color: "black" }}>{value.title}</h2>
                    <p style={{ color: "black" }}>{value.desc}</p>
                    <button style={{ marginBottom: '10px' }}>Visit Collections</button>
                  </div>
                </div>
                <div className="col-md-6" >
                  <img src={value.cover} alt="Slide" style={{height:'100%'}}/>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>





            </div>
          </div>
        ))}
      </div>
  
    </div>
  );
};

export default Sliderdata;
