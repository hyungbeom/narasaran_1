import React from 'react';
import {useMediaQuery} from "react-responsive";
import Footers from "./Footers";

export default function Footer() {
    const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 700px)' });

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',  // 헤더 등 제외한 전체 높이,
                backgroundColor : '#2D2D2D'
            }}
        >
            {/* 1. 남은 공간을 모두 채우는 영역 */}
            {isMobile ?
                <div
                    style={{
                        flex: 1,
                        minHeight: 0,   // flex-item 의 최소 높이 강제

                    }}
                >
                    <div
                        style={{
                            flex: 1,
                            minHeight: 0,
                            /* flex 컨테이너로 만들고 가로/세로 중앙 정렬 */
                            display: 'flex',
                            justifyContent: 'center',  // 가로 중앙
                            alignItems: 'center',      // 세로 중앙
                        }}
                    >
                        <img
                            src="/poster.png"
                            alt="포스터"
                            style={{
                                height: 'auto',   // 높이에 맞춰 비율 유지
                                width: '100%',
                                display: 'block', // img 밑 여백 제거
                            }}
                        />
                    </div>

                </div>
                :
                <div
                style={{
                    flex: 1,
                    minHeight: 0,   // flex-item 의 최소 높이 강제
                    // padding: 20,
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        height: '100%',   // 컨테이너 높이에 맞춤
                        width: 'auto',    // 비율 유지하며 자동 계산
                        objectFit: 'cover', // 필요시 잘림 없이 꽉 채우기
                        // display: 'block',   // img 밑 여백 제거
                    }}
                >
                    <img
                        src="/poster.png"
                        alt="포스터"

                    />
                    <div style={{color: 'blue'}}>여기에 내용 넣어요?</div>

                </div>
            </div>}

            <Footers/>


        </div>
    );
}
