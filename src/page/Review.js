import Footers from "../components/Footers";
import {useMediaQuery} from "react-responsive";
import subImage from "../resources/image/sub_Image.jpg";

export default function Review() {
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
            <div style={{...style, height : isMobile ? 230 : (isDesktop ? 325 : 300)}}>
                <div style={{padding: isMobile ? '100px 20px' : '130px 60px'}}>

                    <div style={{fontSize : isMobile ? 35 :(isDesktop ?50 : 45), fontWeight : 800}}>리뷰</div>
                    <div style={{paddingTop :isMobile ? 20 :  35, fontSize : isMobile ? 15 : (isDesktop ? 20 : 17), lineHeight : 1.5}}>
                        2025. 7. 12 SAT <br/>
                        광화문 광장 놀이마당 일대
                    </div>
                </div>
            </div>
            <div style={{ color: 'black', backgroundColor: 'white', padding:isMobile ?'30px 20px 35px 20px' : '60px 60px 35px 60px'}}>


                <div>상주세요</div>

            </div>


            <Footers/>
        </>
    );
}