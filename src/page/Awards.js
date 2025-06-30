import Footers from "../components/Footers";
import {useMediaQuery} from "react-responsive";
import {Button, Input, message} from "antd";

import subImage from '../resources/image/sub_Image.jpg';
import React from "react";
export default function Awards() {
    const isMobile = useMediaQuery({query: '(max-width: 500px)'});
    const isDesktop = useMediaQuery({query: '(min-width: 900px)'});


    const style = {
        backgroundImage: `url(${subImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundAttachment: 'fixed',

        color: 'white'
    };

    return (<>
            <div style={{...style, height: isMobile ? 190 : (isDesktop ? 200 : 190), display : 'flex', alignItems : 'center', marginTop :isDesktop ? 80 : 70}}>
                <div>
                    <img src="/charactor2.svg" width={isMobile ? 80 : 100} style={{paddingBottom : 15, paddingLeft : 30}} alt="Character" />
                </div>
                <div style={{padding: isMobile ? '100px 20px' : '130px 60px'}}>

                    <div style={{fontSize: isMobile ? 35 : (isDesktop ? 50 : 45), fontWeight: 800}}>수상작발표</div>
                    <div style={{
                        paddingTop: isMobile ? 10 : 35,
                        fontSize: isMobile ? 15 : (isDesktop ? 20 : 17),
                        lineHeight: 1.5
                    }}>
                        2025. 7. 12 SAT | 광화문 광장 놀이마당 일대(세종대왕상 앞)
                    </div>
                </div>
            </div>
            <div style={{
                textAlign: 'center',
                color: 'black',
                backgroundColor: 'white',
                padding: isMobile ? '30px 0px 35px 0px' : '60px 60px 35px 60px'
            }}>


                <div style={{fontWeight: 'bold', lineHeight: 1.5}}>
                    <div style={{fontSize: isMobile ? 16 : 35}}>2025 서울국제어린이청소년아트페어 미술공모전</div>
                    <div style={{fontSize : isMobile ? 12 : ''}} >SEOUL INTERNATIONAL KIDS ART FAIR</div>
                </div>

                <div
                    style={{
                        margin: '50px auto 0px auto',
                        display: 'grid',
                        paddingTop: 0,

                        gridTemplateColumns: isMobile ? '40px 1fr' : '80px 1fr',  // 두 번째 칸을 1fr로 바꿔도 좋습니다
                        width: isMobile ? '90%' :  800,
                        justifyContent: "center",
                        alignItems: 'center',
                        gap: isMobile ? 10 : 20,

                    }}
                >
                    <div style={{fontSize : isMobile ? 13 :18, fontWeight : 700}}>이름</div>
                    <div>
                        <Input
                            size={isMobile ? 'middle' : 'large'}
                            placeHolder={'이름을 입력해주세요'}
                            style={{flex: 1, boxSizing: 'border-box', fontSize : isMobile ? 13 :18}}
                        />
                    </div>

                    <div style={{fontSize : isMobile ? 13 :18, fontWeight : 700}}>연락처</div>
                    <div
                        style={{
                            display: 'flex',
                            width: '100%',      // 부모 칸 전체를 100%로 차지
                            gap: '8px'           // 입력칸 사이 여백 (원하지 않으면 제거)
                        }}
                    >
                        <Input
                            size={isMobile ? 'middle' : 'large'}
                            placeHolder={'010'}
                            style={{flex: 1, boxSizing: 'border-box',  fontSize : isMobile ? 13 :18}}
                        />
                        <Input
                            size={isMobile ? 'middle' : 'large'}
                            style={{flex: 1, boxSizing: 'border-box',  fontSize : isMobile ? 13 :18}}
                        />
                        <Input
                            size={isMobile ? 'middle' : 'large'}
                            style={{flex: 1, boxSizing: 'border-box',  fontSize : isMobile ? 13 :18}}
                        />
                    </div>
                </div>

            </div>

            <div style={{display: 'flex', justifyContent: 'center', padding: 30}}>
                <Button size={'large'} style={{fontSize: 18, fontWeight: 700, width: 150}} type={'primary'}
                        onClick={() => {
                           alert('준비중입니다')
                        }}
                >수상확인</Button>
            </div>

            <Footers/>
        </>
    );
}