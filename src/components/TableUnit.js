import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function TableUnit({value, src}) {

    const navigate = useNavigate();

    const [hover, setHover] = useState(false);

    return <div style={{cursor: 'pointer', color: hover ? 'blue' : 'black'}}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={()=>{
                    navigate(`/board/${src.id}`)
                }}
    >{value}</div>
}