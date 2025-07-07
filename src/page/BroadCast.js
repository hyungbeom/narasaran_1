import Footers from "../components/Footers";
import {useMediaQuery} from "react-responsive";

import subImage from '../resources/image/sub_Image.jpg';
import React from "react";
import {Button, Table} from "antd";
import TableUnit from "../components/TableUnit";



export default function BroadCast() {
    const isMobile = useMediaQuery({query: '(max-width: 500px)'});
    const isDesktop = useMediaQuery({query: '(min-width: 900px)'});



    const dataSource = [
        {
            key: '1',
            title: '광복80주년 기념 ‘나라사랑 어린이·청소년 아트 페스티벌’ 개최',
            broad: '서울자치신문',
            date: '2025-07-03',
            link : 'https://www.onseoul.net/news/articleView.html?idxno=40865'
        },
        {
            key: '1',
            title: '광복 80주년 기념, ‘나라사랑 어린이·청소년 아트 페스티벌’ 광화문광장서 개최',
            broad: '베이비뉴스',
            date: '2025-07-03',
            link : 'https://www.ibabynews.com/news/articleView.html?idxno=134859'
        },
        {
            key: '1',
            title: '광복 80주년 기념, ‘나라사랑 어린이·청소년 아트 페스티벌’ 광화문광장서 개최',
            broad: 'MSN',
            date: '2025-07-03',
            link : 'https://www.msn.com/ko-kr/news/other/%EA%B4%91%EB%B3%B5-80%EC%A3%BC%EB%85%84-%EA%B8%B0%EB%85%90-%EB%82%98%EB%9D%BC%EC%82%AC%EB%9E%91-%EC%96%B4%EB%A6%B0%EC%9D%B4-%EC%B2%AD%EC%86%8C%EB%85%84-%EC%95%84%ED%8A%B8-%ED%8E%98%EC%8A%A4%ED%8B%B0%EB%B2%8C-%EA%B4%91%ED%99%94%EB%AC%B8%EA%B4%91%EC%9E%A5%EC%84%9C-%EA%B0%9C%EC%B5%9C/ar-AA1HS8Lx'
        }
    ];

    const columns = [
        {
            title: <div style={{
                fontSize : isMobile ? 11 : 15
            }}>제목</div>,
            dataIndex: 'title',
            key: 'title',
            render : (v, src)=>{
                return <div style={{
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    fontSize : isMobile ? 11 : 15,
                    width: isMobile ? 150 : '100%' // 또는 maxWidth
                }}>{v}</div>
            }
        },
        {
            title: <div style={{
                fontSize : isMobile ? 11 : 15
            }}>언론사</div>,
            dataIndex: 'broad',
            key: 'broad',
            render : v=> <div style={{
                cursor: 'pointer',
                fontSize : isMobile ? 11 : 13
            }}>{v}</div>
        },
        {
            title: <div style={{
                fontSize : isMobile ? 11 : 15
            }}>등록일</div>,
            dataIndex: 'date',
            key: 'date',
            width : 100,
            render : v=> <span style={{fontSize : isMobile ? 11 : 13, color : 'gray'}}>{v}</span>
        },
    ];



    const style = {
        backgroundImage: `url(/subtitle/subtitle5.jpg)`,
        backgroundSize: '100% auto',              // 가로 100%, 세로 자동
        backgroundRepeat: 'no-repeat',            // 반복 없음
        backgroundPosition: 'bottom center',         // 상단 중앙 정렬
        backgroundAttachment: 'scroll',           // (fixed 원하면 변경)
        color: 'black'
    };


    return (<>
            <div style={{...style, height : isMobile ? 140 : (isDesktop ? 200 : 190), display : 'flex', alignItems : 'center', marginTop : isDesktop ? 80 : 70}}>
                <div>
                    <img src="/charactor4.svg" width={isMobile ? 60 : 100} style={{paddingBottom : 15, paddingLeft : 30}} alt="Character" />
                </div>
                <div style={{padding: isMobile ? '100px 20px' : '120px 60px'}}>

                    <div style={{fontSize : isMobile ? 35 :(isDesktop ?50 : 45), fontWeight : 800}}>언론보도</div>
                    <div style={{paddingTop :isMobile ? 10 :  35, fontSize : isMobile ? 12 : (isDesktop ? 20 : 17), lineHeight : 1.5}}>
                       각종 언론 내용들을 확인해보세요
                    </div>
                </div>
            </div>

            <div style={{
                color: 'black',
                backgroundColor: 'white',
                padding: isMobile ? '30px 0px' : '60px 150px 35px 150px'
            }}>

                <Table size={'small'}  dataSource={dataSource} columns={columns}
                       onRow={(record, rowIndex) => {
                           return {
                               onClick: () => {
                                   return window.open(record.link, "_blank");
                               },
                           };
                       }}
                />
            </div>


            <Footers/>
        </>
    );
}