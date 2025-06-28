import Footers from "../components/Footers";
import {useMediaQuery} from "react-responsive";
import DateList from "../components/DateList";
import subImage from "../resources/image/sub_image2.png";

export default function Schedule() {
    const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 900px)' });


    const style = {
        backgroundImage: `url(${subImage})`,
        backgroundSize: '100% auto',    // ← 너비 100%, 높이는 자동
        // backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundAttachment: 'fixed',

        color: 'white'
    };

    return (<>
            <div style={{...style, height : isMobile ? 190 : (isDesktop ? 280 : 300)}}>
                <div style={{padding: isMobile ? '100px 20px' : '130px 60px'}}>

                    <div style={{fontSize : isMobile ? 35 :(isDesktop ?50 : 45), fontWeight : 800}}>일정안내</div>
                    <div style={{paddingTop :isMobile ? 10 :  35, fontSize : isMobile ? 15 : (isDesktop ? 20 : 17), lineHeight : 1.5}}>
                        2025. 7. 12 SAT
                        광화문 광장 놀이마당 일대
                    </div>
                </div>
            </div>
            <div style={{ color: 'black', backgroundColor: 'white', padding:isMobile ?'30px 20px 35px 20px' : '60px 60px 35px 60px'}}>

                <div style={{fontSize : 13, fontWeight : 800}}>
                    <div>행사시간 : 10:00 - 19:00</div>
                    <div>사생대회 : 13:00 - 16:30</div>
                </div>

                <div style={{fontSize :isMobile ? 25 : (isDesktop ? 35 : 30), fontWeight : 800, paddingTop : 30}}>프로그램 안내</div>
                <div style={{paddingTop : isMobile ? 20 : 35, fontSize : isMobile ? 15 :  (isDesktop ? 20 : 17), lineHeight : 1.5, fontWeight : 700}}>
                    2025 광복 80주년 기념<br/>
                    어린이·청소년 나라사랑 아트페스티벌
                </div>
            </div>
            <div style={{
                color: 'black',
                backgroundColor: 'white',
                padding: isMobile ? '0px 20px 200px 20px' : '0px 60px 200px 60px',
                lineHeight: 1.8,
                fontSize: isMobile ? 12 : (isDesktop ? 18 : 15)
            }}>
                <DateList/>
            </div>

            <Footers/>
        </>
    );
}