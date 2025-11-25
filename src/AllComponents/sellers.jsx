import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../Styles/all.css"
import swal from 'sweetalert';

import { best_selleres } from '../data/threepart';
function Sellers() {
   function addtolocalstorage(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
swal({
  title: "Good job!",
  text: "Sucsses Add To Cards",
  icon: "success",
  button: "Okay",
});}
    return (
       
        <>
            <div className="sellers mt-5">
                <div className="container text-center">
                <h3 className='fw-bold'>Best Sellers</h3>
                <p className='gray'>Summer Collection New Modern Design</p>
            </div>

            <div className="container">
                <div className="row">

                    {best_selleres.map((e, index) => {
                        return (
                            <div className="col-md-4 mb-4" key={e.id}>
                                <div className="product details_box p-3 shadow-sm rounded">
                                    
                                    <div className="image mb-2">
                                        <img src={e.img} className="w-100" alt="" />
                                    </div>

                                    <div className="matrial text-start">
                                        <h4>{e.matrial}</h4>
                                                                                <h4>{e.name}</h4>

                                    </div>

                                    <div className="review my-2 text-start">
                                        <i className={`${e.icon[0]} gold`}></i>
                                        <i className={`${e.icon[1]} gold`}></i>
                                        <i className={`${e.icon[2]} gold`}></i>
                                        <i className={`${e.icon[3]} gold`}></i>


                                    </div>
<hr />
                                    <div className="buy d-flex justify-content-between align-items-center">
                                        <h5>{e.price}</h5>
                                        <div className="buy_icon">
                                            <i className={`${e.icon_buy} color icon_add `}  onClick={()=>addtolocalstorage(e)}></i>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
            </div>
        </>
    );
}

export default Sellers;
