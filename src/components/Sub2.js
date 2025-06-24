// Sub1.jsx
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import ScrollIndicator from './ScrollIndicator';
import {useMediaQuery} from "react-responsive";


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
export default function Sub2() {

    const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 700px)' });


    const [current, setCurrent] = useState(0);
    const [mobile, setMobile] = useState(false);

    const IMAGES = [
        !mobile ? '/mainImage2.jpg' : '/mobile_main2.jpg',
        // …필요한 만큼 추가
    ];

    useEffect(() => {
        setMobile(isMobileDevice());
    }, []);



    return (
        <div
            style={{
                position: 'relative',
                // width: '100%',
                height: '100%',
                overflow: 'hidden',
                /* Flex 컨테이너로 만들어서 자식 세로 중앙 정렬 */
                display: 'flex',
                alignItems: 'center',
            }}
        >
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
                <div style={{ fontSize: isMobile ? 22 : (isDesktop ? 42 : 38) }}>우리가 함께 그리는 대한민국의 기억</div>
                <div style={{ fontSize: isMobile ? 22 : (isDesktop ? 30 : 27) }}>예술로 기억하고<br/> 참여로 미래를 여는 축제 </div>
                {isMobile ? <></> : <div style={{paddingTop: 45, fontSize: (isDesktop ? 35 : 27)}}>
                    2025년, 광복 80주년을 기념하여 열리는<br/>
                    나라사랑 어린이-청소년 아트페스티벌은<br/>
                    예술을 통해 대한민국의 역사와 정신을 되새기고,
                </div>}
                {isMobile ?
                    <div style={{fontSize: 30, paddingTop: 65}}>
                        아이들과 시민이 함께 <br/> 만들어가는  문화예술 <br/> 축제 입니다.
                    </div>
                    :
                    <div style={{fontSize:  (isDesktop ? 50 : 45), paddingTop: 65}}>
                    아이들과 시민이 함께 만들어가는 <br/> 문화예술 축제 입니다.
                </div>}


            </div>

            {/* 스크롤 유도 인디케이터 */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '100px',
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
                <img src={!mobile ? "/mouse.svg" : '/icon/hand.svg'} width={!mobile ? 16 : 25} alt="Scroll icon" />
                <div style={{ fontSize: 10, marginTop: 8 }}>{!mobile ? 'S C R O L L' :
                    <span> S W I P E <br/>D O W N</span>}</div>
                <ScrollIndicator />
            </div>
        </div>
    );
}