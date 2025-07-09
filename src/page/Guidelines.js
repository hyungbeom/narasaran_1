import Footers from "../components/Footers";
import {useMediaQuery} from "react-responsive";
import GuideList from "../components/guideList";
import subImage from "../resources/image/sub_Image.jpg";
import React from "react";

export default function Guidelines() {
    const isMobile = useMediaQuery({query: '(max-width: 500px)'});
    const isDesktop = useMediaQuery({query: '(min-width: 900px)'});


    const style = {
        backgroundImage: `url(/subtitle/subtitle3.jpg)`,
        backgroundSize: '100% auto',              // 가로 100%, 세로 자동
        backgroundRepeat: 'no-repeat',            // 반복 없음
        backgroundPosition: 'bottom center',         // 상단 중앙 정렬
        backgroundAttachment: 'scroll',           // (fixed 원하면 변경)
        color: 'black'
    };

    return (<>
            <div style={{
                ...style,
                height: isMobile ? 140 : (isDesktop ? 200 : 190),
                display: 'flex',
                alignItems: 'center',
                marginTop: isDesktop ? 80 : 70
            }}>
                <div>
                    <img src="/charactor3.svg" width={isMobile ? 80 : 130}
                         style={{paddingBottom:isMobile ? 0 : 15, paddingLeft: isMobile ? 10 : 30}} alt="Character"/>
                </div>
                <div style={{padding: isMobile ? '100px 20px' : '130px 60px'}}>

                    <div style={{fontSize: isMobile ? 35 : (isDesktop ? 50 : 45), fontWeight: 800}}>모집요강</div>
                    <div style={{
                        paddingTop: isMobile ? 10 : 35,
                        fontSize: isMobile ? 12 : (isDesktop ? 20 : 17),
                        lineHeight: 1.5
                    }}>

                        {isMobile ? <> 2025 광복 80주년 기념 <br/> 아트 페스티벌에 여러분들을
                            초대합니다.</> : '2025 광복 80주년 기념  아트 페스티벌에 여러분들을 초대합니다.'}
                    </div>
                </div>
            </div>
            <div style={{
                color: 'black',
                backgroundColor: 'white',
                padding: isMobile ? '30px 20px 35px 20px' : '60px 60px 35px 60px',
                maxWidth: 1500,
                margin: '0px auto'
            }}>

                <div style={{fontSize: isMobile ? 20 : 35, fontWeight: 800, textAlign: 'center'}}>
                    {isMobile ? <>2025 광복 80주년 기념<br/> 나라사랑 어린이·청소년 아트 페스티벌</> : '2025 광복 80주년 기념 나라사랑 어린이·청소년 아트 페스티벌'}
                </div>
                <div style={{
                    textAlign: 'center',
                    fontWeight: 600,
                    paddingTop: isMobile ? 3 : 10,
                    fontSize: isMobile ? 12 : 20
                }}>Seoul International Kids & Youth Art Fair
                </div>
                <div style={{
                    fontSize: isMobile ? 13 : 18,
                    padding: isMobile ? '40px 0px 100px 0px' : '80px 0px 150px 0px',
                    lineHeight: 2,
                    textAlign : 'center'
                }}>


                    나라사랑 어린이·청소년 아트 페스티벌은 예술 활동을 매개로 한 융합적 콘텐츠와 참여형 프로그램을 통해 어린이·청소년이 스스로의 가능성을 발견하고 <br/>
                    다양한 문화적 감수성을 경험할 수 있도록 기획되었습니다. 나아가 국제 교류와 예술교육을 연계하여
                    <br/> 미래를 이끌 글로벌 인재로의 성장을 지원하는 문화예술 생태계의 새로운
                    허브로 자리매김하고자 합니다.
                </div>


                <div style={{fontSize: isMobile ? 15 : 20, fontWeight: 800}}>
                    {isMobile ? <>1. 2025 광복 80주년 기념<br/> 나라사랑 어린이·청소년 아트
                        페스티벌</> : '1. 2025 광복 80주년 기념 나라사랑 어린이·청소년 아트 페스티벌'}
                </div>


                <GuideList/>
            </div>


            <Footers/>
        </>
    );
}