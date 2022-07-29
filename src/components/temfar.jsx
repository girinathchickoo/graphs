import React from "react";


function TempFar(props){
    function boil(){
        if (props.farenheit>=212){
            return 'water would boil'
        }else{
            return 'water would not boil'
        }
    }
    function handleFarenheit(e,unit){
        props.setTemp(e.target.value,unit)
    }
    return(
        <div>
            <label>
                Temp in f:
            <input type="number" value={props.farenheit} onChange={(e)=>{handleFarenheit(e,'f')}} />
            </label>
            <p className="pcolor">{boil()}</p>
        </div>
    )
}

export default TempFar;