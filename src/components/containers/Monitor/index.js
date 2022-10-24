import { Route, Routes } from "react-router-dom"
import InputPage from "../Input Page/Index"
import ResultPage from "../../Result Page"
import styles from "./styles.css"



export default function Monitor(){
    

    return(
        <>
            <div className="monitor">
                <div className="screen">
                    <Routes>
                        <Route path="/" element={<InputPage />} />
                        <Route path="/result" element={<ResultPage />} />
                    </Routes>
                </div>
            </div>
            <div className="support"></div>
        </>
    )
}