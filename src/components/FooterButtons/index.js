import styles from "./styles.css"
import { WeightContext } from "../../App"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

export default function FooterButtons( ) {  
    const [weight, setWeight] = useContext(WeightContext)
    const navigate = useNavigate()


    const handleWeight = () => {
        const num = ((Math.random()*10)+0.001).toFixed(3)
        setWeight(num)
    }

    const handleNext = () => {
        weight!=="" && navigate("/result")
    }
    
        return(
            <div className="footer">
                <button onClick={handleWeight}>Pesa</button>
                <button onClick={handleNext}>Avanti</button>
            </div>
        )
}


