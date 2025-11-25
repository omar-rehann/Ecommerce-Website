import "../Styles/all.css"

function Products(props){
    return(
       
        <>
        <div className="row">
            <div className="col-md-4">
                <div className="product details_box">
            <div className="image">
                <img src={props.img} className="w-100" alt="" />
            </div>
            <div className="matrial">
                <h3>{props.matrial}</h3>
                <h3>{props.name}</h3>


            </div>
            <div className="review">
                <div className="icon">
                    <i className={props.icon}></i>
                    <i className={props.icon}></i>
                </div>

            </div>
            
            <div className="buy d-felx justify-content-bewtween">
                <h5>{props.price}</h5>
                <div className="buy">
                    <i className={`${props.icon_buy} add_to_card`}></i>
                </div>

            </div>
        </div>
            </div>
        </div>
        </>
    )
}
export default Products