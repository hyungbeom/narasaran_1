import {useNavigate, useParams} from "react-router-dom";
import {useMediaQuery} from "react-responsive";
import {Button} from "antd";

export default function Board() {

    const isMobile = useMediaQuery({query: '(max-width: 500px)'});
    const isDesktop = useMediaQuery({query: '(min-width: 900px)'});
    const navigate = useNavigate();
    const {id} = useParams();


    return <>

        <div style={{maxWidth: 1000, margin:  isMobile ? '100px auto' : '225px auto'}}>

            <div style={{textAlign: 'right', color: 'lightgray', fontSize: 13, paddingBottom: 10}}>
                조회수 : -
            </div>
            <div style={{
                height: 30,
                border: '0.5px solid #F5F5F5',
                display: 'flex',
                alignItems: 'center',
                padding: 10,
                gap: 15
            }}>
                <img src="/icon/faq.svg" width={30} alt=""/> <span style={{fontSize: 15, fontWeight: 'bold'}}>2025 광복80주년기념 나라사랑 사생대회 관련 질문</span>
            </div>

            <div style={{
                height: 30,
                border: '0.5px solid #F5F5F5',
                display: 'flex',
                alignItems: 'center',
                gap: 15,
                fontSize: 14,
                padding: '5px 15px',
                justifyContent: 'space-between',
                borderTop: 'none'
            }}>
                <div>
                    <span>작성자 :</span> <span>관리자</span>
                </div>
                <div>
                    <span>등록일 :</span> <span>2025-07-01</span>
                </div>
            </div>
            <div style={{border: '0.5px solid #F5F5F5', gap: 15, fontSize: 13, padding: '5px 15px', borderTop: 'none', lineHeight : 1.6}}>
                <br/>
                Q. 미술학원에서도 단체 접수를 할 수 있나요? <br/>

                네, 본 사생대회는 개인, 단체(교육기관 포함) 모두 응모가 가능합니다.<br/>

                <br/>
                Q. 사전 접수를 해야만 사생대회에 참가할 수 있나요?<br/>

                네, 본 사생대회는 사전접수페이지 를 통한 사전 접수<br/>
                참가자만 참여가 가능합니다.<br/>

                <br/>
                Q. 출품된 작품을 돌려받을 수는 없나요?<br/>

                네, 대회의 원활한 진행을 위해 접수된 작품은 반환되지 않으며, 작품의 소유권은 SIKAF에 있습니다.<br/>
                <br/>
                Q. 사생대회 주제는 언제 알 수 있나요?<br/>

                사생대회 당일 7/12(토) 주제가 발표됩니다.<br/>

                <br/>
                Q. 그림 재료는 각자 준비하는건가요?<br/>

                네, 각자 사생대회에 필요한 미술재료들을 챙겨오시면 됩니다.<br/>
                재료에 제한은 없습니다.<br/>
                <br/>

                Q. 작품은 어떻게 제출해야 하나요?<br/>

                사생대회 당일 7/12(토) 13:30-16:30 대회 종료 후<br/>
                현장에서 제출해주시면 됩니다.<br/>

                <br/>
                Q. 심사기준은 어떻게 되나요?<br/>

                시카프는 작가의 개성이 담긴 작품을 높이 평가합니다.<br/>
                <br/>
                1. 작품의 유니크함 30점<br/>
                - 얼마나 창의적이고 독특한 개성을 가지고 있나?<br/>
                <br/>
                2. 스토리의 상상력 30점<br/>
               -  작품을 생각하게 된 배경과 스토리가 얼마나 공감되는가?<br/>
                &nbsp; 스토리가 얼마나 재미있고 참신한가?<br/>

                <br/>
                3. 작품의 완성도 20점<br/>
                - 작품에 스토리를 충실하게 반영하였는가?<br/>
                &nbsp;  주제에 맞게 그림을 충실하게 완성하였는가?<br/>

                <br/>
                Q. 수상자 발표는 언제인가요?<br/>
                대회 종료후 심사를 거쳐 발표됩니다. 수상자 발표는 7월 말 예정이며,<br/>
                시카프 공식 사이트 및 개별 연락드립니다.<br/>
            </div>
            <div style={{display : 'flex', justifyContent : 'space-between', padding : '20px 0px'}}>
                <Button size={'middle'} type={'primary'}
                onClick={()=>{
                    navigate('/qna')
                }}
                >목록</Button>
            </div>
        </div>
    </>
}