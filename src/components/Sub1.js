// Sub1.jsx
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import ScrollIndicator from './ScrollIndicator';
import {useMediaQuery} from "react-responsive";

// 1) 교체할 이미지 URL 리스트


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

export default function Sub1() {

    const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 700px)' });

    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
    const isLandscape = useMediaQuery({ query: '(orientation: landscape)' });


    const [current, setCurrent] = useState(0);
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        setMobile(isMobileDevice());
    }, []);


    const IMAGES = [
        !mobile ? '/mainImage.jpg' : '/mobile_main.jpg',
        // …필요한 만큼 추가
    ];



    // 4) 3초마다 이미지 순환
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(idx => (idx + 1) % IMAGES.length);
        }, 4500);
        return () => clearInterval(timer);
    }, []);



    return (
        <div
            style={{
                position: 'relative',
                height: '100%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
            }}>
            {/* 5) key를 current로 주면 이미지 교체 때마다 리마운트 */}
            <ZoomBackground key={current} image={IMAGES[current]} />

            {/* 어두운 오버레이 */}
            {/*<div*/}
            {/*    style={{*/}
            {/*        position: 'absolute',*/}
            {/*        inset: 0,*/}
            {/*        backgroundColor: 'rgba(0,0,0,0.45)',*/}
            {/*    }}*/}
            {/*/>*/}

            {/* 중앙 텍스트 */}
            <div
                style={{
                    // width : '100%',
                    fontWeight: 800,
                    position: 'absolute',
                    // top: '45%',
                    // left: '32%',
                    left: '5%',
                    // transform: 'translate(-50%, -50%)',
                    zIndex: 1,
                    color: 'white',
                    textAlign: 'left',

                }}
            >
                <div style={{  paddingTop :isLandscape && mobile ? 30 : 0,  fontSize: isLandscape && mobile ? 15 : (isMobile ? 25 : ( isDesktop ? 40 : 35 ))   }}>광복 80주년 기념</div>
                <div style={{ paddingTop: 10, fontSize: isLandscape && mobile ? 25 :(isMobile ? 33 : (isDesktop ? 70 : 60)), width : '100%' }}>나라사랑 어린이.청소년</div>
                <div style={{ fontSize: isLandscape && mobile ? 22 :(isMobile ? 33 : (isDesktop ? 70 : 60)) }}>아트페스티벌</div>
                <div style={{ fontSize:isLandscape && mobile ? 15 :(isMobile ? 15 : (isDesktop ? 25 : 20)), paddingTop: isLandscape && mobile ? 10 :(isMobile ? 20 : 38) }}>
                    2025. 7. 12 토 12:00~17:00<br/>
                    광화문광장 놀이마당 앞
                </div>

                <a
                    href="https://docs.google.com/forms/d/1FDjI8pcQH-wtZxeerKIrla7Z5c82RpK8B6Z0F8xB4F4/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <img
                        width={isLandscape && mobile ? 100 :(isMobile ? 130 :(isDesktop ? 317 : 250))}
                        src="https://sikaf.co.kr/joinButton.png"
                        alt="참가신청 버튼"
                        style={{ paddingTop: isLandscape && mobile ? 10:(isDesktop ? 38 : 20), cursor: 'pointer' }}
                    />
                </a>
            </div>

            {/* 스크롤 유도 인디케이터 */}
            <div
                style={{
                    position: 'absolute',
                    bottom:isLandscape && mobile ? 60 : 100,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: 'white',
                    zIndex: 1,
                    pointerEvents: 'none',
                }}
            >
                <img src={!mobile ? "https://sikaf.co.kr/mouse.svg" : 'https://sikaf.co.kr/icon/hand.svg'} width={isLandscape && mobile ? 20 :(!mobile ? 16 : 25)} alt="Scroll icon" />
                <div style={{ fontSize: isLandscape && mobile ? 7 :  10, marginTop: 8 }}>{!mobile ? 'S C R O L L' :
                    <span> S W I P E <br/>D O W N</span>}</div>
                <ScrollIndicator />
            </div>
        </div>
    );
}