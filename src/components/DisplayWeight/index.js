import styles from "./styles.css"
import { WeightContext } from "../../App"
import { useState, useContext } from "react"

export default function DisplayWeight (){
    const [weight] = useContext(WeightContext)
    return (
        <>
            <div className="units">kg</div>
            <input className="weigth" value={weight} placeholder="0.000"></input>
        </>
       
    )
}

