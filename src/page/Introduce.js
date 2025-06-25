import Footers from "../components/Footers";
import {useMediaQuery} from "react-responsive";


export default function Introduce() {
    const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 900px)' });


    const style = {
        backgroundImage: `url('/sub_image.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundAttachment: 'fixed',

        color: 'white'
    };

    return (<>
            <div style={{...style, height : isMobile ? 230 : (isDesktop ? 325 : 300)}}>
                <div style={{padding: isMobile ? '100px 20px' : '130px 60px'}}>

                    <div style={{fontSize : isMobile ? 35 :(isDesktop ?50 : 45), fontWeight : 800}}>프로그램소개</div>
                    <div style={{paddingTop :isMobile ? 20 :  35, fontSize : isMobile ? 15 : (isDesktop ? 20 : 17), lineHeight : 1.5}}>
                        2025. 7. 12 SAT <br/>
                        광화문 광장 놀이마당 일대
                    </div>
                </div>
            </div>
            <div style={{ color: 'black', backgroundColor: 'white', padding:isMobile ?'30px 20px 35px 20px' : '60px 60px 35px 60px'}}>

                <div style={{fontSize :isMobile ? 25 : (isDesktop ? 35 : 30), fontWeight : 800}}>소개</div>
                <div style={{paddingTop : isMobile ? 20 : 35, fontSize : isMobile ? 15 :  (isDesktop ? 20 : 17), lineHeight : 1.5, fontWeight : 700}}>
                    2025 광복 80주년 기념<br/>
                    어린이·청소년 나라사랑 아트페스티벌
                </div>
            </div>
            <div style={{ color: 'black', backgroundColor: 'white', padding: isMobile ? '0px 20px 200px 20px' : '0px 60px 200px 60px', lineHeight : 1.8, fontSize : isMobile ?  12 : (isDesktop ? 18 : 15)}}>

                우리가 함께 그리는 대한민국의 기억<br/>
                2025년은 대한민국 <span style={{fontWeight : 800}}>광복 80주년</span>을 맞이하는 뜻깊은 해입니다.<br/>서울시와 함께하는 <span style={{fontWeight : 800}}>‘나라사랑 아트페스티벌’</span>은 어린이와 청소년들이 예술을 통해 광복의 의미를 체험하고,<br/>나라를 위해 헌신한 독립운동가들의 정신을 되새기며 대한민국의 미래를 스스로 그려보는 자리입니다.<br/>
                그림으로 표현하는 사생대회, 독립운동가에게 전하는 영상 메시지,<br/>전통놀이 체험 부스와 태극기 아트 등 다양한 콘텐츠를 통해<br/>역사와 문화를 즐겁고 창의적으로 배워가는 시간을 마련했습니다.
                이 축제는 단순한 예술 경연을 넘어,<br/>대한민국의 역사와 문화에 대한 자긍심을 키우고<br/>전 세계와 소통할 수 있는 글로벌 리더로의 성장을 돕는 발판이 될 것입니다.

            </div>

            <Footers/>
        </>
    );
}