// Sub1.jsx
import React, {useState, useEffect, useRef} from 'react';
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

export default function Sub4() {

    const isMobile = useMediaQuery({query: '(max-width: 500px)'});
    const isDesktop = useMediaQuery({query: '(min-width: 900px)'});
    const [current, setCurrent] = useState(0);

    const isLandscape = useMediaQuery({ query: '(orientation: landscape)' });
    const [mobileDevice, setMobileDevice] = useState(false);


    useEffect(() => {
        setMobileDevice(isMobileDevice());
    }, []);
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            // 메타데이터 로드 후에 currentTime을 3초로 설정
            const handleLoadedMetadata = () => {
                video.currentTime = 3;
            };

            video.addEventListener('loadedmetadata', handleLoadedMetadata);

            return () => {
                video.removeEventListener('loadedmetadata', handleLoadedMetadata);
            };
        }
    }, []);

    return (
        <div
            style={{
                display: 'flex',
                backgroundColor : 'black',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center', // 세로 중앙
                    alignItems: 'center',     // 가로 중앙
                    minHeight: '100vh',
                }}
            >
                <div style={{fontSize :mobileDevice ? 20 :  30, fontWeight : 800, color : 'white', paddingTop : 50}}>SIKAF에 어린이 청소년 분들을 초대합니다</div>
                <video   ref={videoRef} src="/introduce.mp4" controls width={mobileDevice ? '100%' : "60%"} style={{paddingTop : 40}} />
            </div>
        </div>
    );
}