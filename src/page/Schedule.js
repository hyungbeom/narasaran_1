import Footers from "../components/Footers";
import {useMediaQuery} from "react-responsive";
import DateList from "../components/DateList";
import subImage from "../resources/image/sub_image2.png";

export default function Schedule() {
    const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
    const isDesktop = useMediaQuery({ query: "(min-width: 900px)" });

    const style = {
        backgroundImage: `url(/subtitle/subtitle1.jpg)`,
        backgroundSize: '100% auto',              // 가로 100%, 세로 자동
        backgroundRepeat: 'no-repeat',            // 반복 없음
        backgroundPosition: 'bottom center',         // 상단 중앙 정렬
        backgroundAttachment: 'scroll',           // (fixed 원하면 변경)
        color: 'black'
    };

    return (
        <>
            <div style={{ height : isMobile ? 120 : (isDesktop ? 200 : 190),display : 'flex', alignItems : 'center',   marginTop : isDesktop ? 80 : 70,...style}}>
                <div style={{paddingTop:isMobile ? 0 : 0, display : 'flex', alignItems : 'center'}}>
                    <img src="/charactor1.svg" width={isMobile ? 80 : 150} alt=""/>
                </div>
                <div style={{padding: isMobile ? '100px 20px' : '120px 60px'}}>
                    <div style={{fontSize : isMobile ? 35 :(isDesktop ?50 : 45), fontWeight : 800}}>일정안내</div>
                    <div style={{paddingTop :isMobile ? 10 :  20, fontSize : isMobile ? 15 : (isDesktop ? 20 : 17), lineHeight : 1.5}}>
                        2025. 7. 12 SAT
                        <br />
                        광화문 광장 놀이마당 일대(세종대왕상 앞)
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