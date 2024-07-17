import React from 'react'
import { Products } from '../Assets/products';
import { RiStarSFill } from 'react-icons/ri';
import { BsPlusCircle } from 'react-icons/bs';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';



function Shop () {
  
  const [category,setcategory]=useState('sofa')
  const [filteredProducts,setFilteredproducts] = useState([])
  const [search]= useState('')
  useEffect(() => {
    const filteredProducts = Products.filter(product =>(category ===''|| product.category===category)&& product.productName.toLowerCase().includes(search.toLowerCase()));
    setFilteredproducts(filteredProducts);

  }, [category,search]);
  // const filteredProducts = products.filter(product => product.category === "sofa");
  //   console.log(filteredProducts);
  const handleFilter = (value) => {
    if (value.length >= 2) {
      const filteredProducts = Products.filter(product => 
        product.category.toLowerCase().startsWith(value.toLowerCase().slice(0, 2))
      );
      setFilteredproducts(filteredProducts);
    } else {
      setcategory(value);
    }
  };
    return(
      
    <div>
      <div  className='Main'>
      <img src="https://www.jiomart.com/images/product/original/rvwl506j0h/rylan-plastic-non-ticking-classic-digital-wall-clock-8-x-3-8-x-5-centimeters-product-images-orvwl506j0h-p601439831-3-202305130013.jpg?im=Resize=(1000,1000)"
          style={{marginBottom:'40px',height:'280px',width:'100%'}} alt=''/>
      <div class="content">
      <h1 style={{marginTop:'110px',marginLeft:'5%'}}>Product</h1>
      </div>  
          
      </div>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
<select onChange={e=> handleFilter(e.target.value)} style={{backgroundColor:' rgb(6,6,59)',color:'white',marginLeft:'30px',height:'40px'}}>
<option value='Filter by Category' class="btn">Filter by Category</option>
<option value="sofa">sofa</option>
<option value="chair">chair</option>
<option value="wireless">wireless</option>
<option value="mobile">mobile</option>
<option value="watch">watch</option>
</select>

<input type="items" placeholder="  Search"  onChange={e=> handleFilter(e.target.value, 'Search')} style={{marginLeft:'500px',borderRadius:'50px',width:'50%'}}></input>

        
         <div className="container">
             <div className="row">
           {
              filteredProducts.map((item,index)=>(
              <div className="col-md-4 mb-2 ">
              <div className="card shopCard">
              <div className="body" >
            
              <Link to={`/Productdetails/${item.id}`}>
           <img src={item.imgUrl} style={{width:'100%',height:'350px'}} alt=''/>
           </Link>
          <h3>{item.productName} </h3>
          <h6 className="bigdiscountfivestar" style={{color:"orange",marginLeft:"1px"}} > {
          [...Array(5)].map(star => {
           return <RiStarSFill size={25}/>
               })} </h6>
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

export default Shop

