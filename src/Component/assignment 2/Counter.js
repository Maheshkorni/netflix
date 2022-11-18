import { useState } from "react"
import "./Counter.css"
const Counter =() =>
{
    const [count, countupdater]= useState(0);
    
    
    return (
        <div>
        <div className="Card">
        Counter
        <h1 className="card_count">{count}</h1>
        </div>
        <div className="Buttons">
        <button className="Countbutton" onClick={()=>{countupdater(count+1)}}>Count</button>
        <button className="Resetbutton" onClick={()=>{countupdater(0)}}>Reset</button>
        </div>
        </div>

    )
}
export default Counter;