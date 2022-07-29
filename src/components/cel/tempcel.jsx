import React from "react";
import styles from "./tempcel.module.css"


function TempCel(props){
    function boil(){
        if (props.celsius>=100){
            return 'water would boil'
        }else{
            return 'water would not boil'
        }
    }
    function handleCelsius(e,unit){
        console.log(unit)
        props.setTemp(e.target.value,unit)
    }
    return(
        <div>
            <label>
                Temp in c:
            <input type="number" value={props.celsius} onChange={(e)=>{handleCelsius(e,'c')}} />
            </label>
            <p className={styles.pcolor}>{boil()}</p>
        </div>
    )
}

export default TempCel;