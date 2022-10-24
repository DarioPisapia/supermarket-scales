import { useState } from "react"
import DisplayWeight from "../../DisplayWeight"
import FooterButtons from "../../FooterButtons"
import Keyboard from "../../Keyboard"
import ProductList from "../../Product List"
import styles from "./styles.css"


export default function InputPage(){
    const [listOpen, setListOpen] = useState(false)

    const handleListOpen = () => {
        setListOpen(!listOpen)
    }

    return(
        <>  
            <p class="title">
                Pesa la tua merce
            </p>
            <button className="list" onClick={handleListOpen}>Codici</button>
            
            <DisplayWeight />
            <Keyboard/>
            <FooterButtons />
            <ProductList listOpen={listOpen} onClick={handleListOpen} />
        </>
    )
}

