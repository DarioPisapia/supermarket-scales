import styles from "./styles.css"
import { useContext, useState } from "react"
import { WeightContext, CodeContext } from "../../App"
const productList = require("../../products.json")

export default function ResultPage(){
    const [weight] = useContext(WeightContext)
    const [code] = useContext(CodeContext)
    
    let product = ""
    
    productList.map(p => {
        if(code === p["code"]){
            product = p        
        }
    })
    
    const hadleStampa = () => {
        alert("fatto, funziona")
    }

    return(
        <>
            <h1 className="productName">{product["product"]}</h1>
            <div className="price">{`${(product["price"] * weight).toFixed(2)} €`}</div>
            <button className="stampa" onClick={hadleStampa}>Stampa</button>
        </>
    )
}