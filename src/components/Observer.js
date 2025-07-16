import React from 'react';
import {useMediaQuery} from "react-responsive";


const sectionList = ['MAIN', 'INTRODUCE',  'MAKING VIDEO', 'PRODUCT BY']

export default function Observer({currentPage, pageCount, onDotClick}) {
    const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 700px)' });

    return (
        <div
            style={{
                position: 'fixed',
                top: '50%',
                right: isDesktop ? 50 : 20,
                transform: 'translateY(-50%)',
                display: 'flex',
                flexDirection: 'column',
                gap: isDesktop ? 18 : 5,
                zIndex: 1000,
                cursor: 'pointer',

            }}
        >
            {Array.from({length: pageCount}).map((_, i) => (
                <div style={{
                    fontSize: 10,
                    lineHeight: 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                    opacity : currentPage === i ? 1 : 0.1
                }}>
                    {isDesktop ? <div onClick={() => onDotClick(i)} style={{
                        backgroundColor: 'lightgray',  // gray(128,128,128)에 alpha=0.5
                        padding: '5px 8px',
                        borderRadius: 20,
                        color: 'black',
                        fontWeight: 800
                    }}>
                        {sectionList[i]}
                    </div> : <></>}
                    <span onClick={() => onDotClick(i)}
                          style={{cursor: 'pointer', color : 'white'}}>
    {currentPage === i ? '●' : '○'}
  </span>
                </div>
            ))}
        </div>
    );
}