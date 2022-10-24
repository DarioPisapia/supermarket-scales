import styles from "./styles.css"
const productList = require("../../products.json")


export default function ProductList ({ listOpen, onClick }) {
    return(
        <div className="productList" style={listOpen?{display: "block"} : {display: "none"}}>
            <button className="closeButton" onClick={onClick}>Chiudi</button>
            <ul className="ul">
                {productList.map(product => 
                <li className="li">{`${product["product"]}: ${product["code"]}`}</li>
                )}
            </ul>
            
        </div>
    )
}
