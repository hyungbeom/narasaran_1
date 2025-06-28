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

function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
        .test(navigator.userAgent);
}

export default function Sub3() {

    const isMobile = useMediaQuery({query: '(max-width: 500px)'});
    const isDesktop = useMediaQuery({query: '(min-width: 900px)'});
    const [current, setCurrent] = useState(0);

    const isLandscape = useMediaQuery({ query: '(orientation: landscape)' });
    const [mobileDevice, setMobileDevice] = useState(false);


    useEffect(() => {
        setMobileDevice(isMobileDevice());
    }, []);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            {/* 1) 메인 콘텐츠 영역 */}
            <div
                style={{
                    flex: 1,
                    position: 'relative',
                    width: '100%',
                    overflow: 'hidden',
                }}
            >


                <div
                    style={{
                        height: `calc(100dvh - ${isLandscape && mobileDevice ? 100 :(isMobile ? 227 : 290)}px)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            backgroundColor: 'black',
                            width: '100%',
                            padding: !isDesktop ? 50 : 80,
                            color: 'white',
                            gap: !isDesktop ? 30 : 80,
                            fontSize: !isDesktop ? 12 : 30,
                            fontWeight: 800,
                        }}
                    >
                        <div
                            style={{
                                textAlign: 'center',
                                width: '100%',
                                fontSize: 25,
                                paddingTop: isLandscape && mobileDevice ? 30 : 0,
                            }}
                        >
                            PRODUCT BY
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: !isDesktop ? 20 : 30,
                            }}
                        >
                            <div>주최</div>
                            <img
                                src="https://sikaf.co.kr/logo.svg"
                                height={!isDesktop ? 30 : 50}
                                alt="SIKAF 추진위원회"
                            />
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: !isDesktop ? 20 : 30,
                            }}
                        >
                            <div>주관</div>
                            <img
                                src="https://sikaf.co.kr/bom.png"
                                height={!isDesktop ? 30 : 50}
                                alt="비오앰"
                            />
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: !isDesktop ? 20 : 30,
                            }}
                        >
                            <div>후원</div>
                            <img
                                src="https://sikaf.co.kr/seoul.svg"
                                height={isMobile ? 30 : 50}
                                alt="서울시"
                            />
                        </div>

                        {isLandscape && mobileDevice ? <div
                            style={{
                                // position: 'relative',
                                position: 'absolute', bottom: 0,
                                width: '100vw',
                                display: 'flex',
                                // height : 150,

                                backgroundColor: '#2D2D2D',
                                // padding: '20px 100px',
                                justifyContent: 'space-between',
                                color: 'white',
                            }}
                        >
                            <div style={{color: 'white', padding: 5}}>
                                <div style={{fontSize: 10, fontWeight: 800}}>INFO & CONTACT</div>

                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <div>
                                        <div style={{
                                            fontSize: 11,
                                            display: 'flex',
                                            alignItems: 'center',
                                            paddingTop: 5,
                                            gap: 3
                                        }}>
                                            <img src="https://sikaf.co.kr/icon/Calendar.svg" alt="" width={15}/> 25년 7월
                                            12일
                                        </div>
                                        <div style={{
                                            fontSize: 11,
                                            display: 'flex',
                                            alignItems: 'center',
                                            paddingTop: 5,
                                            gap: 3
                                        }}>
                                            <img src="https://sikaf.co.kr/icon/Delivery Time.svg" alt=""
                                                 width={15}/> 12:00 -
                                            17:00
                                        </div>
                                        <div style={{
                                            fontSize: 11,
                                            display: 'flex',
                                            alignItems: 'center',
                                            paddingTop: 5,
                                            gap: 3
                                        }}>
                                            <img src="https://sikaf.co.kr/icon/Address.svg" alt="" width={15}/> 광화문 광장
                                            놀이마당 일대
                                        </div>
                                    </div>


                                    <div>
                                        <div style={{
                                            fontSize: 11,
                                            display: 'flex',
                                            alignItems: 'center',
                                            paddingTop: 5,
                                            gap: 3
                                        }}>
                                            <img src="https://sikaf.co.kr/icon/Email.svg" alt=""
                                                 width={15}/> sikafofficial
                                        </div>
                                        <div style={{
                                            fontSize: 11,
                                            display: 'flex',
                                            alignItems: 'center',
                                            paddingTop: 5,
                                            gap: 3
                                        }}>
                                            <img src="https://sikaf.co.kr/icon/Instagram.svg" alt=""
                                                 width={15}/> sikaf_official
                                        </div>

                                    </div>

                                </div>
                                <div style={{fontSize: 8, padding: 3}}>
                                    All contents provided by SIKAF are copyrighted works protected by copyright law.
                                    <br/>
                                    © SIKAF. All rights reserved.
                                </div>
                            </div>
                        </div> : <></> }
                        </div>


                </div>
            </div>

            {/* 2) 겹치지 않는 하단 푸터 */}

            {isLandscape && mobileDevice  ? <></> :<Footers/>}

        </div>
    );
}