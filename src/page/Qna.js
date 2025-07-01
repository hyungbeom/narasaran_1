import Footers from "../components/Footers";
import {useMediaQuery} from "react-responsive";

import subImage from '../resources/image/sub_Image.jpg';
import React from "react";
import {Button, Table} from "antd";
import TableUnit from "../components/TableUnit";



export default function Qna() {
    const isMobile = useMediaQuery({query: '(max-width: 500px)'});
    const isDesktop = useMediaQuery({query: '(min-width: 900px)'});



    const dataSource = [
        {
            key: '1',
            title: '2025 광복80주년기념 나라사랑 사생대회 관련 질문',
            status: false,
            date: '2025-07-01',
            id : '0001'
        }
    ];

    const columns = [
        {
            title: '제목',
            dataIndex: 'title',
            key: 'title',
            render : (v, src)=>{
                return <TableUnit value={v} src={src}/>
            }
        },
        {
            title: '상태',
            dataIndex: 'age',
            key: 'age',
            render : v=> <>{!v ? <Button size={'small'} type={'primary'} style={{fontSize : isMobile ? 11 : 12}}>공개</Button> : <Button size={'small'} danger style={{fontSize : isMobile ? 11 : 12}}>비공개</Button>}</>
        },
        {
            title: '등록일',
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

                    <div style={{fontSize : isMobile ? 35 :(isDesktop ?50 : 45), fontWeight : 800}}>고객센터</div>
                    <div style={{paddingTop :isMobile ? 10 :  35, fontSize : isMobile ? 12 : (isDesktop ? 20 : 17), lineHeight : 1.5}}>
                        {/*하단 타이틀 멘트없나용? <br/>*/}
                        궁금한 사항들을 질의응답해보세요
                    </div>
                </div>
            </div>

            <div style={{
                color: 'black',
                backgroundColor: 'white',
                padding: isMobile ? '30px 0px' : '60px 150px 35px 150px'
            }}>

                <Table size={'small'}  dataSource={dataSource} columns={columns}  />
            </div>


            <Footers/>
        </>
    );
}