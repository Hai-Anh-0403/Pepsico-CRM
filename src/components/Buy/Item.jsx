import "./Buy.css"
const Item = ({ title, price, img }) => {
    return (
        <div className="item">
            <img src={img} alt="Pepsi Lon 320ml" />
            <div>
                <strong>{title}</strong>
                <p>{price}</p>
            </div>
        </div>
    );
}
export default Item;