import Footers from "../components/Footers";
import {useMediaQuery} from "react-responsive";
import {Button, Input, message} from "antd";

import subImage from '../resources/image/sub_Image.jpg';
import React from "react";

export default function AwardsDetail() {
    const isMobile = useMediaQuery({query: '(max-width: 500px)'});
    const isDesktop = useMediaQuery({query: '(min-width: 900px)'});


    const style = {
        backgroundImage: `url(/subtitle/subtitle2.jpg)`,
        backgroundSize: '100% auto',              // 가로 100%, 세로 자동
        backgroundRepeat: 'no-repeat',            // 반복 없음
        backgroundPosition: 'bottom center',         // 상단 중앙 정렬
        backgroundAttachment: 'scroll',           // (fixed 원하면 변경)
        color: 'black'
    };

    return (<>
            <div style={{
                ...style,
                height: isMobile ? 125 : (isDesktop ? 200 : 190),
                display: 'flex',
                alignItems: 'center',
                marginTop: isDesktop ? 80 : 70
            }}>
                <div>
                    <img src="/charactor2.svg" width={isMobile ? 70 : 100}
                         style={{paddingBottom: isMobile ? 0 : 15, paddingLeft: isMobile ? 20 : 30}} alt="Character"/>
                </div>
                <div style={{padding: isMobile ? '100px 20px' : '130px 60px'}}>

                    <div style={{fontSize: isMobile ? 35 : (isDesktop ? 50 : 45), fontWeight: 800}}>수상작발표</div>
                    <div style={{
                        paddingTop: isMobile ? 10 : 35,
                        fontSize: isMobile ? 12 : (isDesktop ? 20 : 17),
                        lineHeight: 1.5
                    }}>
                        {isMobile ? <> 2025. 7. 12 SAT <br/> 세종문화회관 1층 라운지 일대
                            세종충무공 이야기공간 일대 (지하 1층)</> : ' 세종문화회관 1층 라운지 일대\n' +
                            '세종충무공 이야기공간 일대 (지하 1층)'}
                    </div>
                </div>
            </div>
            <div style={{
                textAlign: 'center',
                color: 'black',
                backgroundColor: 'white',
                padding: isMobile ? '30px 0px 35px 0px' : '60px 60px 35px 60px'
            }}>







            </div>
            <Footers/>
        </>
    );
}