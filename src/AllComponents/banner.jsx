import "../Styles/all.css"
import b1 from "../img/banner/b19.jpg"
import b2 from "../img/banner/b20.jpg"
import b3 from "../img/banner/b10.jpg"
import b4 from "../img/banner/b18.jpg"

function Banner(){
    return(
        <>
        <div className="banner">
            <div className="row m-2 g-2">
                <div className="col-md-6">
                    <div className="image position-relative">
                        <img src={b1} className="w-100 rounded" alt="" />
                         <div class="text text-light ms-2 position-absolute top-50 start-0 translate-middle-y">
                                <h2>Crazy Deal</h2>
                                <h1>Buy 1 Get 1 Free</h1>
                                <p>Discover our exclusive offer and double your purchase today!</p>
                                <button class="btn btn-outline-light">Learn More</button>
                            </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="image position-relative">
                        <img src={b2} className="w-100 rounded" alt="" />
                         <div class="text position-absolute top-50 start-0 translate-middle-y text-light ms-2">
                                <h2>Upcoming Session</h2>
                                <h1>Buy 1 Get 1 Free</h1>
                                <p>Explore our latest collection and enjoy this limited-time offer.</p>
                                <button class="btn btn-outline-light">Shop Collection</button>
                            </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="image position-relative">
                        <img src={b3} className="w-100 rounded" alt="" />
                         <div class="text position-absolute top-50 start-0 translate-middle-y text-light ms-2">
                                <h2>Sesaon Sales </h2>
                                <h1>Buy 1 Get 1 Free</h1>
                                <p>Explore our latest collection and enjoy this limited-time offer.</p>
                                <button class="btn btn-outline-light">Shop Collection</button>
                            </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="image position-relative">
                        <img src={b4} className="w-100 rounded" alt="" />
                         <div class="text position-absolute top-50 start-0 translate-middle-y text-light ms-2">
                                <h2>New Footer Collection  </h2>
                                <h1>Discover The Latest With Your Limit</h1>
                                <p>Explore our latest collection and enjoy this limited-time offer.</p>
                                <button class="btn btn-outline-light">Shop Collection</button>
                            </div>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}
export default  Banner