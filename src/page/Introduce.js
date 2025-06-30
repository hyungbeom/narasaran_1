import Footers from "../components/Footers";
import {useMediaQuery} from "react-responsive";
import subImage from "../resources/image/sub_Image.jpg";


export default function Introduce() {
    const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 900px)' });


    const style = {
        backgroundImage: `url(${subImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundAttachment: 'fixed',

        color: 'white'
    };

    return (<>
            <div style={{ height : isMobile ? 190 : (isDesktop ? 280 : 300), display : 'flex'}}>
                <div style={{paddingTop: isMobile ? 100 : 100}}>
                    <img src="/charactor1.svg" width={150} alt=""/>
                </div>
                <div style={{padding: isMobile ? '100px 20px' : '120px 60px'}}>
                    <div style={{fontSize : isMobile ? 35 :(isDesktop ?50 : 45), fontWeight : 800}}>SIKAF 소개</div>
                    <div style={{paddingTop :isMobile ? 10 :  20, fontSize : isMobile ? 15 : (isDesktop ? 20 : 17), lineHeight : 1.5}}>
                        {/*하단 타이틀 멘트없나용? <br/>*/}
                        Seoul International Kids & Youth Art Fair
                    </div>
                </div>

            </div>
            <div style={{ color: 'black', ...style, padding:isMobile ?'30px 20px 35px 20px' : '30px 60px 35px 60px'}}>

                <div style={{paddingTop : isMobile ? 20 : 35, fontSize : isMobile ? 15 :  (isDesktop ? 20 : 17), lineHeight :isMobile ? 1.7 : 2, fontWeight : 700}}>

                    <div style={{fontSize : 24, fontWeight : 800}}>
                        SIKAF는
                    </div>


                    <div style={{fontSize :isMobile ? 15 : 20, fontWeight : 500}}>
                        SIKAF(Seoul International Kids & Youth Art Fair)는 어린이·청소년이 스스로의 목소리와 색채로 세상을 물들여 나가는 무대입니다. <br/>
                        서울 곳곳의 예술 공간이 하나로 연결되어, 참가자들은 전시된 작품 너머로 자신만의 이야기를 자유롭게 전하며 창작의 기쁨을 만끽합니다.
                    </div>

                    <div style={{fontSize : 24, fontWeight : 800, paddingTop : 20}}>
                        창의의 장을 넘어
                    </div>

                    <div style={{fontSize : isMobile ? 15 : 20, fontWeight : 500}}>
                        단순한 ‘관람’이 아닌 ‘교감’의 장을 지향합니다. 신진 아티스트로서 첫 발을 내딛는 어린 손끝에서부터,<br/>
                        세계 각지에서 모인 또래 예술가들과의 교류를 통해 영감을 주고받는 순간까지—SIKAF는 모든 과정이 예술 교육의 현장입니다.<br/>
                        각 작품에 깃든 사연과 감성이 관객과 호흡하며, 새로운 예술적 가능성이 피어납니다.
                    </div>




                    <div style={{fontSize : 24, fontWeight : 800, paddingTop : 20}}>
                        미래를 여는 약속
                    </div>

                    <div style={{fontSize : isMobile ? 15 : 20, fontWeight : 500}}>
                        K-ART의 새 지평을 열어갈 차세대 예술 인재를 발굴하고 육성하는 것은 SIKAF의 핵심 미션입니다. <br/>
                        창작의 불꽃을 지핀 어린 아티스트들이 세계 무대에서 더 큰 날개를 펼칠 수 있도록, 글로벌 파트너 네트워크와 연계된 다양한 후속 지원 프로그램을 마련하고 있습니다. <br/>
                        이를 통해 서울은 물론 대한민국이 청년 예술가들의 도전과 성취를 응원하는 진정한 ‘예술의 수도’로 거듭날 것입니다.
                    </div>



                    <div style={{fontSize : 15, padding : '50px 0px'}}>

                        -SIKAF-
                    </div>
                </div>
            </div>

            <Footers/>
        </>
    );
}