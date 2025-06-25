import Footers from "../components/Footers";
import {useMediaQuery} from "react-responsive";


export default function Awards() {
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

                    <div style={{fontSize : isMobile ? 35 :(isDesktop ?50 : 45), fontWeight : 800}}>시상안내</div>
                    <div style={{paddingTop :isMobile ? 20 :  35, fontSize : isMobile ? 15 : (isDesktop ? 20 : 17), lineHeight : 1.5}}>
                        2025. 7. 12 SAT <br/>
                        광화문 광장 놀이마당 일대
                    </div>
                </div>
            </div>
            <div style={{ color: 'black', backgroundColor: 'white', padding:isMobile ?'30px 20px 35px 20px' : '60px 60px 35px 60px'}}>


               <div> 약도 주려나?</div>
               <div>기존 이미지 그대로 ㄱ?</div>

                <img src="/map.png"  width={'100%'} alt=""/>
            </div>


            <Footers/>
        </>
    );
}