import Footers from "../components/Footers";
import {useMediaQuery} from "react-responsive";
import React, {useState} from "react";
import ZoomImage from "../components/ZoomImage";
import Search from "antd/es/input/Search";
import {Pagination} from "antd";
import subImage from "../resources/image/sub_Image.jpg";

export default function Gallery() {
    const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 900px)' });
    const [hover, setHover] = useState(false);

    const style = {
        backgroundImage: `url(${subImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundAttachment: 'fixed',

        color: 'white'
    };

    return (<>
            <div style={{...style, height : isMobile ? 190 : (isDesktop ? 200 : 190), display : 'flex', alignItems : 'center', marginTop : isDesktop ? 80 : 70}}>
                <div>
                    <img src="/charactor4.svg" width={isMobile ? 60 : 100} style={{paddingBottom : 15, paddingLeft : 30}} alt="Character" />
                </div>
                <div style={{padding: isMobile ? '100px 20px' : '120px 60px'}}>

                    <div style={{fontSize : isMobile ? 35 :(isDesktop ?50 : 45), fontWeight : 800}}>갤러리</div>
                    <div style={{paddingTop :isMobile ? 10 :  35, fontSize : isMobile ? 15 : (isDesktop ? 20 : 17), lineHeight : 1.5}}>
                        {/*하단 타이틀 멘트없나용? <br/>*/}
                        작은 터치가 만든 큰 이야기
                    </div>
                </div>
            </div>


            <div style={{ maxWidth : 1390,margin : '0px auto', color: 'black', padding:isMobile ?'30px 0px 35px 0px' : '30px 100px 35px 100px'}}>

                <div style={{textAlign : 'left', paddingTop : 20, paddingLeft : 5, fontSize : isMobile ? 12 : 15}}>
                    <span style={{fontWeight : 'bold'}}>작품 수</span> : 12개
                </div>

                <div style={{display : 'flex',flexShrink: 0, flexWrap: 'wrap',  justifyContent: 'center', paddingTop : isMobile ? 20 : 35, fontSize : isMobile ? 15 :  (isDesktop ? 20 : 17), lineHeight : 2, fontWeight : 700, gap : 50}}>
                    {[1,2,3,4,5,6,7,8,9,10,11,12].map((v, idx) =>{
                        return <ZoomImage v={idx} src={'https://sikaf.co.kr/prepare.jpg'}/>
                    })}
                </div>
                <div style={{display : 'flex', justifyContent : 'center', padding : "80px 15px 0px 15px"}}>
                    <Search
                        placeholder="검색어를 입력해주세요"
                        allowClear
                        enterButton="검색하기"
                        size="middle"
                        style={{width : 500}}
                        // onSearch={onSearch}
                    />
                </div>
                <div style={{display : 'flex', justifyContent : 'center', paddingTop : 30}}>
                <Pagination defaultCurrent={1} total={50} />
                </div>
            </div>

            <Footers/>
        </>
    );
}