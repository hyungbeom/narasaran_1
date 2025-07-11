import React from 'react';
import {useMediaQuery} from 'react-responsive';
// 로고 파일 경로는 실제 프로젝트에 맞게 수정해주세요.
// import logoSIKAF from '/path/to/logo-sikaf.png';
// import logoBOM from '/path/to/logo-bom.png';

export default function GuideList() {
    const isMobile = useMediaQuery({query: '(max-width: 500px)'});
    const isDesktop = useMediaQuery({query: '(min-width: 900px)'});

    const tableStyle = {
        marginTop: 20,
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: isMobile ? 10 : isDesktop ? 15 : 12,
    };
    const thTdStyle = {
        border: '1px solid #e3e3e3',
        padding: '15px',
        borderLeft: 'none',
        borderRight: 'none',
        verticalAlign: 'top',
        textAlign: 'left',
    };
    const linkStyle = {
        color: 'blue',
        textDecoration: 'underline',
    };

    const dataList = [
        {awards : '대상<br/>서울시장상', count : 3, reward : '프랑스루브르 국제전  (2026.1 예정) + 상장'},
        {awards : '금상<br/>서울시의회 <br/>의장상', count : 4, reward : '상장'},
        {awards : '은상', count : 15, reward : '상장'},
        {awards : '동상', count : 30, reward : '상장'},
        {awards : '최우수상', count : 50, reward : '상장'},
        {awards : '우수상', count : 100, reward : '상장'},
        {awards : '입선', count : '-', reward : '상장'},

    ]

    return (
        <table style={tableStyle}>
            <tbody>
            <tr>
                <td style={{...thTdStyle, fontWeight: 'bold'}}>행사명</td>
                <td style={thTdStyle}>
                    2025 광복 80주년 기념 나라사랑 어린이·청소년 아트 페스티벌 사생대회
                </td>
            </tr>
            <tr>
                <td style={{...thTdStyle, fontWeight: 'bold'}}>행사일시</td>
                <td style={thTdStyle}>2025.7.12(토) 13:00-17:00</td>
            </tr>
            <tr>
                <td style={{...thTdStyle, fontWeight: 'bold'}}>행사 슬로건</td>
                <td style={thTdStyle}>기억을 담아 내일을 그리다</td>
            </tr>
            <tr>
                <td style={{...thTdStyle, fontWeight: 'bold'}}>참가자격</td>
                <td style={thTdStyle}>
                    국내 초·중·고교 재학생 또는 이와 동등한 자격의 소유자 및 동일 연령 청소년
                </td>
            </tr>
            <tr>
                <td style={{...thTdStyle, fontWeight: 'bold'}}>참가방법</td>
                <td style={thTdStyle}>
                    <a
                        href="https://docs.google.com/forms/d/1FDjI8pcQH-wtZxeerKIrla7Z5c82RpK8B6Z0F8xB4F4/edit"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{...linkStyle, fontWeight: 'bold'}}
                    >
                        사전접수 바로가기 (현장접수 가능)
                    </a>
                </td>
            </tr>
            <tr>
                <td style={{...thTdStyle, fontWeight: 'bold'}}>작품주제</td>
                <td style={thTdStyle}>현장 발표</td>
            </tr>
            <tr>
                <td style={{...thTdStyle, fontWeight: 'bold'}}>그림 재료 및 도화지 배부</td>
                <td style={thTdStyle}>12시부터 종합안내소에서 본인 확인 후 도화지 배부<br/>
                    유화, 수채화 등 그림재료는 자유, 각자 용품을 챙겨오셔야 합니다.
                </td>
            </tr>
            <tr>
                <td style={{...thTdStyle, fontWeight: 'bold'}}>작품크기</td>
                <td style={thTdStyle}>초등학생 8절 / 중·고등학생 5절</td>
            </tr>
            <tr>
                <td style={{...thTdStyle, fontWeight: 'bold'}}>작품접수</td>
                <td style={thTdStyle}>현장 제출</td>
            </tr>
            <tr>
                <td style={{...thTdStyle, fontWeight: 'bold'}}>작품공모료</td>
                <td style={thTdStyle}>무료</td>
            </tr>
            <tr>
                <td style={{...thTdStyle, fontWeight: 'bold'}}>수상작발표</td>
                <td style={thTdStyle}>7/15(화) 오후 2시 시카프 홈페이지 공지(www.sikaf.co.kr)</td>
            </tr>
            <tr>
                <td style={{...thTdStyle, fontWeight: 'bold'}}>시상내역</td>
                <td style={thTdStyle}>

                    {dataList.map(v=>{
                        return  <div style={{display: 'flex', justifyContent: 'space-between', maxWidth: 350,paddingBottom : 10}}>
                            <div style={{width: isMobile ? 50 : 120, fontWeight : 'bold'}}>
                                {v.awards.split('<br/>').map((line, i) => (
                                    <div key={i}>{line}</div>
                                ))}
                            </div>
                            <div style={{alignItems : 'center', display : 'flex'}}>{v.count}명</div>
                            <div style={{width: 140, textAlign: 'right', display:'flex', justifyContent : 'right', alignItems : 'center'}}>
                                {v.count === 3 ? <span>프랑스루브르 국제전 <br/>  (2026.1 예정) + 상장</span> :   v.reward}
                            </div>
                        </div>
                    })}
                </td>
            </tr>
            <tr>
                <td style={{...thTdStyle, fontWeight: 'bold'}}>공모참 특전</td>
                <td style={thTdStyle}>대상 수상자들은 프랑스 루브르 미술관 전시 연계</td>
            </tr>

            <tr>
                <td style={{...thTdStyle, fontWeight: 'bold', alignItems : 'center', paddingTop : 15}}>시상식</td>
                <td style={thTdStyle}>
                    <div>대상, 금상, 은상, 동상 시상식</div>
                    <div>-7/22(화) 오후3시 서울시의회 의원회관 2층 대회의실</div>
                    <div>(대상자는 개별 문자 연락 예정)</div>
                    <div style={{paddingTop : 10}}>* 최우수상, 우수상, 입선 : 우편전달 예정(7월 말)</div>
                </td>
            </tr>
            <tr>
                <td style={{...thTdStyle, paddingTop: 25, fontWeight: 'bold'}}>주최/주관</td>
                <td style={{...thTdStyle, display: 'flex', alignItems: 'center', gap: 20}}>
                    <div>
                        <img
                            src={'https://sikaf.co.kr/logo.svg'}
                            alt="SIKAF 추진위원회"
                            style={{height: isMobile ? 10 : 40,}}
                        />
                        <span style={{fontWeight: 700}}>추진위원회</span>
                    </div>
                    <div style={{padding: 10, borderRadius: 5}}>
                        <img
                            src={'https://sikaf.co.kr/icon/bom2.png'}
                            alt="비오앰"
                            style={{height: isMobile ? 10 : 40, verticalAlign: 'middle'}}
                        />
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    );
}