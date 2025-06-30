import Footers from "../components/Footers";
import {useMediaQuery} from "react-responsive";
import DateList from "../components/DateList";
import subImage from "../resources/image/sub_image2.png";

export default function Schedule() {
    const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
    const isDesktop = useMediaQuery({ query: "(min-width: 900px)" });

    // wrapper: position relative 로 컨테이너 설정
    const wrapperStyle = {
        position: "relative",
        height: isMobile ? 200 : isDesktop ? 280 : 300,
        overflow: "hidden",
    };

    // bgStyle: absolute 로 뒤에 배치, 여기만 밝기 필터 적용
    const bgStyle = {
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${subImage})`,
        backgroundSize: "100% auto",
        backgroundPosition: "top center",
        backgroundAttachment: "fixed",
        filter: "brightness(4)",
        zIndex: 0,
    };

    // contentStyle: relative + zIndex 로 배경 위에 렌더링
    const contentStyle = {
        position: "relative",
        zIndex: 1,
        display: "flex",
        color: "white",
    };

    return (
        <>
            {/* 밝기 적용된 배경과 콘텐츠를 겹치는 래퍼 */}
            <div style={wrapperStyle}>
                <div style={bgStyle} />

                <div style={contentStyle}>
                    <div style={{display : 'flex', alignItems : 'center'}}>
                        {/* 이 img 는 밝기 필터 영향을 받지 않음 */}
                        <img src="/charactor1.svg" width={isMobile ? 90 : 150} style={{paddingBottom : 15, paddingLeft : 20}} alt="Character" />
                    </div>
                    <div style={{ padding: isMobile ? "100px 20px" : "130px 60px", color : 'white' }}>
                        <div
                            style={{
                                fontSize: isMobile ? 35 : isDesktop ? 45 : 40,
                                fontWeight: 800,
                            }}
                        >
                            일정안내
                        </div>
                        <div
                            style={{
                                paddingTop: isMobile ? 5 : 15,
                                fontSize: isMobile ? 12 : isDesktop ? 18 : 15,
                                lineHeight: 1.5,
                            }}
                        >
                            2025. 7. 12 SAT
                            <br />
                            광화문 광장 놀이마당 일대(세종대왕상 앞)
                        </div>
                    </div>
                </div>
            </div>

            {/* 하단 내용 */}
            <div
                style={{
                    color: "black",
                    backgroundColor: "white",
                    padding: isMobile ? "30px 20px 35px" : "60px 60px 35px",
                }}
            >
                <div style={{ fontSize: 13, fontWeight: 800 }}>
                    <div>행사시간 : 10:00 - 19:00</div>
                    <div>사생대회 : 13:00 - 16:30</div>
                </div>

                <div
                    style={{
                        fontSize: isMobile ? 25 : isDesktop ? 35 : 30,
                        fontWeight: 800,
                        paddingTop: 30,
                    }}
                >
                    프로그램 안내
                </div>
                <div
                    style={{
                        paddingTop: isMobile ? 20 : 35,
                        fontSize: isMobile ? 15 : isDesktop ? 20 : 17,
                        lineHeight: 1.5,
                        fontWeight: 700,
                    }}
                >
                    2025 광복 80주년 기념
                    <br />
                    어린이·청소년 나라사랑 아트페스티벌
                </div>
            </div>

            {/* 날짜 리스트 */}
            <div
                style={{
                    color: "black",
                    backgroundColor: "white",
                    padding: isMobile ? "0px 20px 200px" : "0px 60px 200px",
                    lineHeight: 1.8,
                    fontSize: isMobile ? 12 : isDesktop ? 18 : 15,
                }}
            >
                <DateList />
            </div>

            <Footers />
        </>
    );
}