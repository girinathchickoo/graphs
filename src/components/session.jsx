import React, { useEffect, useState } from "react";




function Session(){

    const [message,setMessage]=useState("")

    useEffect(()=>{
        fetch("http://localhost:3001/",{method:'GET'}).then((m)=> m.json()).then(message=>{setMessage(message)})
    },[])

    return(
       message&&message.map((m,i)=>{return <p key={i}>{m.name}</p>})
       
       
    )
}

export default Session;