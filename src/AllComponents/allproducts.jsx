import { useEffect, useState } from "react";
import "../Styles/all.css"
import "../Styles/product.css"
function AllProducts(){
    
    const [alldata,setalldata]=useState([]);
     useEffect(() => {
        let products = localStorage.getItem("cart");
        if(products){
            setalldata(JSON.parse(products));
        } else {
            setalldata([]); 
        }

    }, []); 
    function handledeleteitem(i){
        let updatedata=alldata.filter((_,indexx)=> indexx !==i)
        setalldata(updatedata);
        localStorage.setItem('cart',JSON.stringify(updatedata))
    }
    
    return(
        <>
        <div className="allproducts">
            <div className="backgroundd">
                <div className="text text-center my-4">
    <h2 className="fw-bold"># Your All Products</h2>
    <p className="">Explore Your Selected Styles</p>

    <p className="mt-3">
        Browse a curated collection of trendy products crafted to match your unique style.  
        Choose your favorites and enjoy a seamless shopping experience.
    </p>

    <p>
        From casual outfits to standout pieces, everything here is designed to complement your fashion journey.
    </p>
</div>

            </div>
        </div>
        <div className="structuree">
            <div class="container mt-3">
  <table class="table table-hover align-middle">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name Product</th>
        <th>Matrial Product</th>
        <th>Shape Product</th>
        <th>Star Product</th>
        <th>Price Product</th>
        <td>-</td>



      </tr>
    </thead>
  <tbody>
    {alldata.map((e, index) => (
        <tr key={index}>
            <td>{index+1}</td>
            <td>{e.name}</td>
            <td>{e.matrial}</td>
            <td><img src={e.img} alt="" /></td>
            <td>
                {
                    e.icon.map((ico,i)=>{
                       return <i className={ico} key={i} style={{ color: "gold" }}></i>
                    })
                }
            </td>

            <td>{e.price}</td>
            <td><i className="fa-solid fa-trash delete" onClick={()=>handledeleteitem(index)} ></i></td>
        </tr>
    ))}
</tbody>


  </table>
</div>

        </div>
        </>
    )
}
export default AllProducts