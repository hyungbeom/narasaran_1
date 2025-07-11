import Footers from "../components/Footers";
import {useMediaQuery} from "react-responsive";
import DateList from "../components/DateList";
import subImage from "../resources/image/sub_image2.png";

export default function Notice() {
    const isMobile = useMediaQuery({query: "(max-width: 500px)"});
    const isDesktop = useMediaQuery({query: "(min-width: 900px)"});

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
            <div style={{
                height: isMobile ? 120 : (isDesktop ? 200 : 190),
                display: 'flex',
                alignItems: 'center',
                marginTop: isDesktop ? 80 : 70, ...style
            }}>
                <div style={{paddingTop: isMobile ? 0 : 0, display: 'flex', alignItems: 'center'}}>
                    <img src="/charactor1.svg" width={isMobile ? 80 : 150} alt=""/>
                </div>
                <div style={{padding: isMobile ? '100px 20px' : '120px 60px'}}>
                    <div style={{fontSize: isMobile ? 35 : (isDesktop ? 50 : 45), fontWeight: 800}}>일정안내</div>
                    <div style={{
                        paddingTop: isMobile ? 10 : 20,
                        fontSize: isMobile ? 15 : (isDesktop ? 20 : 17),
                        lineHeight: 1.5
                    }}>
                        2025. 7. 12 SAT
                        <br/>
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

                <div
                    style={{
                        fontSize: isMobile ? 25 : isDesktop ? 35 : 30,
                        fontWeight: 800,
                        paddingTop: 0,
                    }}
                >
                    공지사항
                </div>
                <div
                    style={{
                        paddingTop: isMobile ? 20 : 35,
                        fontSize: isMobile ? 15 : isDesktop ? 20 : 17,
                        lineHeight: 1.5,
                        fontWeight: 700,
                    }}
                >
                    행사 시간, 장소 변경안내
                </div>
            </div>


            <div style={{width: '100%', maxWidth: 1000, paddingLeft: isDesktop ? 45 : 0, paddingBottom: 50, margin : '0px auto'}}>

                <div style={{maxWidth: 1000, border: '1px solid lightGray', textAlign: 'center', padding: 0}}>
                    <div style={{fontSize: 20, fontWeight: 800}}>
                        광복 80주년 기념 「나라사랑 어린이·청소년 아트 페스티벌」에 신청해 주셔서 감사합니다
                    </div>

                    <div style={{fontSize: 20, fontWeight: 800, paddingTop: 10}}>
                        당일 폭염이 예상됨에 따라, 참가 아동의 안전을 고려해 행사 운영 시간과 사생대회 장소가 아래와 같이 변경되었으니 꼭 확인해 주세요!
                    </div>


                    <div style={{paddingTop: 20}}>
                        <span style={{fontWeight: 700}}> 행사일정</span> (변경됨) <br/>

                        <span style={{fontWeight: 700}}>일시</span>: 2025년 7월 12일(토) <br/>
                        <span style={{fontWeight: 700}}>운영시간</span>: 오후 1시 ~ 5시 <br/>
                        <span style={{fontWeight: 700}}>12:30~13:30 </span> 사전접수 (광화문광장 놀이마당 접수부스) <br/>
                        <span style={{fontWeight: 700}}>13:30~14:00 </span>개막식 및 주제 발표 (세종대왕 동상 앞) <br/>
                        <span style={{fontWeight: 700}}>14:00~17:00 </span> 사생대회 <br/>
                        <span style={{fontWeight: 700}}>14:00~17:00 </span> 사생대회 <br/>
                        <div style={{height: 20}}/>

                        <span style={{fontWeight: 700}}>세종문화회관 1층 라운지 일대</span>
                        <br/>
                        <span style={{fontWeight: 700}}>세종 충무공  이야기공간 일대 (지하 1층)</span>
                        <br/>
                        <span style={{fontWeight: 700}}>작품 제출 마감</span>: 오후 5시까지 종합 안내소 <br/>
                        <span style={{fontWeight: 700}}>준비물</span>: 화판, 돗자리, 미술도구, 모자, 물 등 <br/>
                        <span style={{fontWeight: 700}}>폭염유의</span>: 야외 이동 시 온열질환 예방에 유의해주세요. <br/>
                    </div>
                    <div style={{height: 30}}/>
                    <div style={{fontSize : 13, fontWeight : 600}}>
                        우리가 함께 그리는 대한민국의 기억” 함께 만들어 주세요!<br/>
                        감사합니다.<br/>
                        -SIKAF 운영팀 드림-
                    </div>
                </div>
            </div>
            <div style={{width: '100%', float: 'right'}}>
                <Footers/>
            </div>
        </>
    );
}