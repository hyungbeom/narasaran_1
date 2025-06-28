// Sub1.jsx
import React, {useState, useEffect} from 'react';
import styled, {keyframes} from 'styled-components';
import ScrollIndicator from './ScrollIndicator';

import Footers from "./Footers";
import {useMediaQuery} from "react-responsive";

// 1) 교체할 이미지 URL 리스트
const IMAGES = [
    '/mainImage2.jpg',
    // …필요한 만큼 추가
];

// 2) zoom 애니메이션: 1.2배 → 1배
const zoomAnim = keyframes`
    from {
        transform: scale(1.5);
    }
    to {
        transform: scale(1);
    }
`;

// 3) 매번 리마운트되며 애니메이션 재생되는 배경 컴포넌트
const ZoomBackground = styled.div`
    position: absolute;
    inset: 0;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    /* 교체될 때마다 zoomAnim 1s 재생 */
    animation: ${zoomAnim} 1s ease-out;
`;



export default function Sub3() {

    const isMobile = useMediaQuery({query: '(max-width: 500px)'});
    const isDesktop = useMediaQuery({query: '(min-width: 900px)'});
    const [current, setCurrent] = useState(0);


    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
            }}
        >

            <div style={{height: `calc(100dvh - ${isMobile ? 227 : 290}px)`}}>
                <div style={{display : 'flex', alignItems : 'center',   height: '100%', justifyContent : 'center',flexWrap: 'wrap'}}>


                    <div style={{
                        // paddingTop: 80,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor : 'black',
                        width : '100vw',
                        flexWrap: 'wrap',
                        padding : !isDesktop ? 50 : 80,

                        color : 'white',

                        gap: !isDesktop ? 30 :  80,
                        fontSize: !isDesktop ? 12 : 30,
                        fontWeight: 800,

                    }}>


                        <div style={{
                            textAlign : 'center',
                            width : '100%',
                            fontSize : 25
                        }}>
                            PRODUCT BY
                        </div>
                        <div style={{display : 'flex', alignItems : 'center', gap :!isDesktop ? 20 :  30}}>
                            <div>
                                주최
                            </div>

                            <img src="https://sikaf.co.kr/logo.svg" height={!isDesktop ? 30 : 50} alt=""/>
                        </div>

                        <div style={{display : 'flex', alignItems : 'center', gap : !isDesktop ? 20 : 30}}>
                            <div>
                                주관
                            </div>
                            <img src="https://sikaf.co.kr/bom.png" height={!isDesktop ? 30 : 50} alt=""/>

                        </div>
                        <div style={{display : 'flex', alignItems : 'center', gap : !isDesktop ? 20 : 30}}>
                            <div>
                                후원
                            </div>
                            <img src="https://sikaf.co.kr/seoul.svg" height={isMobile ? 30 : 50} alt=""/>
                        </div>

                    </div>
                </div>
            </div>
            <Footers/>
        </div>
    );
}