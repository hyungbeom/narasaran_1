import {useState} from "react";
import {useMediaQuery} from "react-responsive";

export default function ZoomImage({ src, v }) {
    const [hover, setHover] = useState(false);

    const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 900px)' });

    return (
        <div
            key={v}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
                position: 'relative',    // ↖️ 자식의 absolute 기준
                cursor: 'pointer',
                width: isMobile ? '100%' : 300,
                height: 300,
                border: '1px solid lightgray',
                borderRadius: isMobile ? 0 : 7,
                overflow: 'hidden',      // ↖️ 자식이 넘치면 잘라내기
            }}
        >
            {/* 1) 이미지 영역 */}
            <div
                style={{
                    width: '100%',
                    height: 250,          // ↖️ 고정 높이
                    overflow: 'hidden',   // ↖️ zoom 시 넘치는 부분 숨기기
                }}
            >
                <img
                    src={src}
                    alt=""
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        transition: 'transform 0.3s ease',
                        transformOrigin: 'center center',
                        transform: hover ? 'scale(1.3)' : 'scale(1)',
                        filter: 'brightness(0.5)',
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff",
                        fontSize: 18,
                        fontWeight: 700,
                        opacity: hover ? 1 : 0,
                        transition: "opacity 0.3s ease",
                        backgroundColor: hover ? "rgba(0, 0, 0, 0.4)" : "transparent",
                    }}
                >
                    행사후 업로드 예정..
                </div>
            </div>

            {/* 2) 캡션 영역 */}
            <div
                style={{
                    position: 'absolute',  // ↖️ wrapper 기준
                    bottom: 0,             // ↖️ 맨 아래에 위치
                    left: 0,
                    width: '100%',
                    height: 50,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 15,
                    // background: 'rgba(0,0,0,0.3)', // 선택: 배경 좀 추가해도 좋아요
                    // color: '#fff',                  // 캡션 글씨
                }}
            >
                SIKAF 2025
            </div>
        </div>
    );
}