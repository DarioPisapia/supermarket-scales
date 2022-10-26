import styles from "./styles.css"
import { useContext } from "react"
import { CodeContext } from "../../App"

export default function Keyboard() {
    const [code, setCode] = useContext(CodeContext)
    const key = [1, 2, 3, 4, 5, 6, 7, 8, 9, "clear", 0, "del"]

    const handleNumber = (e, number) => { 
        if(number==="clear" ){
            setCode("")
        }    
        else if(number==="del"){
            setCode(Math.floor(code/10))
            if (code<10) 
                setCode("")   
            else if(code===0) 
                setCode("")
        }    
        else if(code.length === 3 ){    
        }
        else{
            setCode(code+e.target.value)
        }
        
    }

    return (
        <div className="keyboard">
            <label for="num" className="label">Codice prodotto</label>
            <input className="displayNumber" id="num" value={code}></input>
            <div className="keys">
                {key.map(number => 
                    <button className="key" value={number} onClick={e=>handleNumber(e, number)}>{number}</button>
                )}

            </div>
            
        </div>
    )
}