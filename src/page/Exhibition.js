import Footers from "../components/Footers";
import {useMediaQuery} from "react-responsive";
import React, {useState} from "react";
import ZoomImage from "../components/ZoomImage";
import subImage from "../resources/image/sub_Image.jpg";

export default function Exhibition() {
    const isMobile = useMediaQuery({query: '(max-width: 500px)'});
    const isDesktop = useMediaQuery({query: '(min-width: 900px)'});
    const [hover, setHover] = useState(false);

    const style = {
        backgroundImage: `url(${subImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundAttachment: 'fixed',

        color: 'white'
    };

    return (<>
            <div style={{...style, height: isMobile ? 190 : (isDesktop ? 200 : 190), display : 'flex', alignItems : 'center', marginTop : isDesktop ? 80 : 70}}>
                <div>
                    <img src="/charactor2.svg" width={isMobile ? 80 : 100} style={{paddingBottom : 15, paddingLeft : 30}} alt="Character" />
                </div>
                <div style={{padding: isMobile ? '100px 20px' : '120px 60px'}}>
                    <div style={{fontSize: isMobile ? 35 : (isDesktop ? 50 : 45), fontWeight: 800}}>공모전 안내</div>
                    <div style={{
                        paddingTop: isMobile ? 5 : 15,
                        fontSize: isMobile ? 15 : (isDesktop ? 20 : 17),
                        lineHeight: 1.5
                    }}>
                        {/*하단 타이틀 멘트없나용? <br/>*/}
                        2025. 7. 12 SAT
                        <br />
                        광화문 광장 놀이마당 일대(세종대왕상 앞)
                    </div>
                </div>
            </div>
            <div style={{paddingTop: isMobile ? 20 : 100, display: 'flex', justifyContent: 'center'}}>

                <img src="https://sikaf.co.kr/poster.png" style={{
                    maxWidth: 700,
                    width: '100%',
                    border: '1px solid lightGray'
                }} alt=""/>

            </div>

            <div style={{
                paddingTop: isMobile ? 30 : 100,
                textAlign: 'center',
                fontSize: isMobile ? 12 : 20,
                fontWeight: 600,
                lineHeight: 2.2
            }}>
                제1회 서울 국제 어린이·청소년 아트 페스티벌은
                전 세계 미래세대를 대상으로 <br/> 예술을 통한 창의성과 표현력을 확장시키는 글로벌 문화예술 플랫폼입니다. <br/>
                본 페스티벌은 예술 활동을 매개로 한 융합적 콘텐츠와 참여형 프로그램을 통해 <br/>어린이·청소년이 스스로의 가능성을 발견하고, <br/>다양한 문화적 감수성을 경험할 수 있도록
                기획되었습니다. <br/> 나아가 국제 교류와 예술교육을 연계하여,
                미래를 이끌 글로벌 인재로의 <br/> 성장을 지원하는 문화예술 생태계의 새로운 허브로 자리매김하고자 합니다.


            </div>

            <div
                style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: isMobile ? 30 : 100}}>
                <a
                    href="https://docs.google.com/forms/d/1FDjI8pcQH-wtZxeerKIrla7Z5c82RpK8B6Z0F8xB4F4/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        width={isMobile ? 130 : (isDesktop ? 280 : 250)}
                        src="https://sikaf.co.kr/joinButton_dark.svg"
                        alt="참가신청 버튼"
                        style={{cursor: 'pointer'}}
                    />
                </a>
            </div>

            <Footers/>
        </>
    );
}