import "../Styles/all.css"
import "../Styles/card.css"
function Cards(props){
    return(
        <>
        <div className="cards details_box ">
            <div className="image">
                <img src={props.img} alt="" />
            </div>
            <div className="text">
                <h2>{props.text}</h2>
            </div>

        </div>
        </>

    )
}
export default Cards