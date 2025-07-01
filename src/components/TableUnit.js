import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useMediaQuery} from "react-responsive";

export default function TableUnit({value, src}) {
    const isMobile = useMediaQuery({query: '(max-width: 500px)'});
    const isDesktop = useMediaQuery({query: '(min-width: 900px)'});

    const navigate = useNavigate();

    const [hover, setHover] = useState(false);

    return <div style={{ fontSize : isMobile? 12 : 14, cursor: 'pointer', color: hover ? 'blue' : 'black'}}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={()=>{
                    navigate(`/board/${src.id}`)
                }}
    >{value}</div>
}