import { useState, createContext } from "react";

import Monitor from "./components/containers/Monitor";

import styles from "./styles.css"

export const WeightContext = createContext()
export const CodeContext = createContext()

function App() {

  const [weight, setWeight] = useState("")
  const [code, setCode] = useState("")

  return (
    <WeightContext.Provider value={[weight, setWeight]}>
    <CodeContext.Provider value={[code, setCode]}>
      <Monitor />
    </CodeContext.Provider>
    </WeightContext.Provider>
  );
}

export default App;
