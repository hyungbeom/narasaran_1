// Sub1.jsx
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import ScrollIndicator from './ScrollIndicator';
import Footer from "./Footer";
import Footers from "./Footers";

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

            <div style={{height : 'calc(100dvh - 290px)'}}>
                <div style={{paddingTop : 80}}>
                    asdfas
                </div>
            </div>

            <Footers/>
        </div>
    );
}