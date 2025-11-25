import "../Styles/all.css"
import "../Styles/about.css"
import a6 from "../img/about/a6.jpg"
import video from "../img/about/1.mp4"
function About(){
    return(
        <>
        <div className="aboutt">
            <div className="backk">
                <h2>Discover Fashion That Defines You
</h2>
                <h1>Explore Our Exclusive Clothing Collection
</h1>
            </div>
            
        </div>
        <div className="about_content">
                <div className="row  align-items-center m-2 g-2  ">
                    <div className="col-md-6">
                        <div className="image">
                            <img src={a6} className="w-100 rounded" alt="" />
                        </div>

                    </div>
                   <div className="col-md-6">
  <div className="text mt-5">
    <h4>
      <i className="fa-solid fa-shirt"></i> About Our Fashion Journey
    </h4>

    <p>
<i className="fa-solid fa-circle-info" style={{marginRight:"10px"}}></i>
      We are a passionate team dedicated to bringing you the latest trends in clothing, designed to express your unique style.
    </p>

    <p>       <i className="fa-solid fa-circle-info" style={{marginRight:"10px"}}></i>
 Our collections blend comfort, quality, and fashion, offering everything from casual wear to statement pieces for every occasion.</p>

    <p>       <i className="fa-solid fa-circle-info" style={{marginRight:"10px"}}></i>
Join us in exploring a world of fashion that celebrates individuality and creativity.</p>

    <p>       <i className="fa-solid fa-circle-info" style={{marginRight:"10px"}}></i>
Discover our curated selection of clothing that combines modern trends with timeless elegance.</p>

    <p>       <i className="fa-solid fa-circle-info" style={{marginRight:"10px"}}></i>
Our designs are inspired by global fashion movements, ensuring you stay ahead of the style curve.</p>

    <p>     <i className="fa-solid fa-circle-info" style={{marginRight:"10px"}}></i>
We prioritize sustainability, using eco-friendly materials to create clothing that’s kind to the planet.</p>

    <p>      <i className="fa-solid fa-circle-info" style={{marginRight:"10px"}}></i>
Every garment is crafted with precision, reflecting our commitment to quality and durability.</p>
  </div>
</div>

                </div>
            </div>
            <div className="video">
                <div className="row">
                    <div className="col-md-12">
                          <div className="video   postion mx-auto text-center ">
            <div class="row">
                <div className="col-12">
                    <video src={video} type="video/mp4" autoplay loop controls className="w-50 rounded"></video>

                </div>
            </div>
        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About