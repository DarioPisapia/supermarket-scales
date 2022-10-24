import styles from "./styles.css"
import { WeightContext } from "../../App"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CodeContext } from "../../App"

const productList = require("../../products.json")

export default function FooterButtons( ) {  
    const [weight, setWeight] = useContext(WeightContext)
    const navigate = useNavigate()
    const codeList = productList.map(product => product["code"])
    const [code, setCode] = useContext(CodeContext)
    const [error, setError] = useState([false, ""])

    const handleWeight = () => {
        const num = ((Math.random()*10)+0.001).toFixed(3)
        setWeight(num)
    }

    const handleNext = () => {
        if(weight!=="" && codeList.includes(code)){
           navigate("/result") 
        }
        if(weight===""){
            setError([true, "Pesa qualcosa"])
        }   
        if(!(codeList.includes(code))){
            setError([error, "Inserisci un codice corretto"])
        }
    }

    return(
        <>
        <div className="footer" >
            <button onClick={handleWeight}>Pesa</button>
            <p className="error" style={error[0] ? {display:"block"} : {display: "none"}}>
                {error[1]}
            </p>
            <button onClick={handleNext}>Avanti</button>
        </div>
        </>
        
    )
}


