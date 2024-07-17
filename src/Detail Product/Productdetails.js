

import React from 'react'
import { RiStarSFill } from 'react-icons/ri';
import { useParams } from 'react-router-dom';
import { add } from '../Cart/Cartslice';
import { Products } from '../Assets/products';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsPlusCircle } from 'react-icons/bs';




const Productdetails = () => {

    const { id } = useParams()
    // const Productdetails = Products.find((item) => item.id === id)

    const dispatch = useDispatch()
    const details = Products.find((item) => item.id === id)
    const similarProducts = Products.filter((item) => item.category === details.category && item.id !== details.id)
    // const similarProducts = Products.filter((item) => item === Productdetails&& item.id !== Productdetails.id)

    const handleAdd = (item) => {
        dispatch(add(item))
        console.log(add)
    }






    return (

        <div>
            <div className='Main'>
                <img src="https://www.jiomart.com/images/product/original/rvwl506j0h/rylan-plastic-non-ticking-classic-digital-wall-clock-8-x-3-8-x-5-centimeters-product-images-orvwl506j0h-p601439831-3-202305130013.jpg?im=Resize=(1000,1000)"
                    style={{ marginBottom: '40px', height: '280px', width: '100%' }} alt='' />
                <div class="content">
                    <h1 style={{ marginTop: '110px', marginLeft: '5%' }}>Stone And Beam Westview</h1>
                </div>
            </div>
            <div class="row">
                {/* { */}
                {/* Products.map((Products) =>( */}

                {/* <> */}

                <div class="col-md-4">
                    <img src={details.imgUrl} alt='' className='w-90' style={{ width: '500px', height: '300px' }} />
                </div>
                <div class="col-md-6">
                    <h2>{details.productName}</h2>
                    <div class="rating">
                        <section style={{ display: "flex", marginLeft: "24%" }}>
                            {[...Array(5)].map(() =>
                                (<RiStarSFill size={25} className='my-2' style={{ color: 'orange' }} />))}
                            <p className='m-2'>{details.avgRating} ratings </p>
                        </section>
                    </div>
                    <section style={{ display: "flex", marginLeft: "24%" }}>
                        <h3 class="price">{details.price}</h3>
                        <p class="m-2">{details.category}</p>
                    </section>
                    <p class="description" style={{ marginLeft: '24%' }}>{details.shortDesc}</p>
                    <div style={{ marginRight: '26%' }}>
                        <div class="mb-3">
                            <input type="number" />
                        </div>
                        {/* <Link  to={`/Cart/${details.id}`}> */}  
                        <button type="submit" class="btn"
                            onClick={() => { handleAdd(similarProducts) }} style={{ marginRight: '15%', backgroundColor: "rgb(6,6,59)", color: "white" }}
                        >Add to Cart</button>
                        {/* </Link> */}
                    </div>
                </div>

                {/* </> */}
                {/* )) */}
                {/* } */}
            </div>


            <section style={{ display: "flex" }}>
                <h4>Description</h4>
                <h6 className='m-2'>Reviews(1)</h6>
            </section>
            <p>{details.description}</p>

            <div className='container'>
                <h2>You might also like</h2>
                <div className='row'>
                    {similarProducts.map((item, index) => (
                        <div key={index} className='col-md-4 my-3'>
                            <div className='card p-3'>
                                <Link to={`/Productdetails/${item.id}`}>
                                    <img src={item.imgUrl} alt='' className='w-100' />
                                </Link>
                                <h4 style={{ color: "black" }}>{item.productName}</h4>
                                <section style={{ color: 'orange' }}>
                                    {[...Array(5)].map((star, index) =>
                                        (<RiStarSFill size={25} className='my-2' />))}
                                </section>
                                <h3 style={{ color: "black" }}>{item.price}</h3>
                                <h4 type="submit" style={{ marginLeft: '300px' }}><BsPlusCircle /></h4>

                            </div>
                        </div>))}
                </div>
            </div>
        </div>



    )
}

export default Productdetails