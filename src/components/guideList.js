import React from 'react';
import { useMediaQuery } from 'react-responsive';
// 로고 파일 경로는 실제 프로젝트에 맞게 수정해주세요.
// import logoSIKAF from '/path/to/logo-sikaf.png';
// import logoBOM from '/path/to/logo-bom.png';

export default function GuideList() {
    const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 900px)' });

    const tableStyle = {
        marginTop : 20,
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: isMobile ? 10 : isDesktop ? 15 : 12,
    };
    const thTdStyle = {
        border: '1px solid #e3e3e3',
        padding: '15px',
        borderLeft : 'none',
        borderRight : 'none',
        verticalAlign: 'top',
        textAlign: 'left',
    };
    const linkStyle = {
        color: 'blue',
        textDecoration: 'underline',
    };

    return (
        <table style={tableStyle}>
            <tbody>
            <tr>
                <td style={{...thTdStyle, fontWeight : 'bold'}}>행사명</td>
                <td style={thTdStyle}>
                    2025 광복 80주년 기념 나라사랑 어린이·청소년 아트 페스티벌 사생대회
                </td>
            </tr>
            <tr>
                <td style={{...thTdStyle, fontWeight : 'bold'}}>행사일시</td>
                <td style={thTdStyle}>2025.7.12(토) 12:00-17:00</td>
            </tr>
            <tr>
                <td style={{...thTdStyle, fontWeight : 'bold'}}>행사 슬로건</td>
                <td style={thTdStyle}>기억을 담아 내일을 그리다</td>
            </tr>
            <tr>
                <td style={{...thTdStyle, fontWeight : 'bold'}}>참가자격</td>
                <td style={thTdStyle}>
                    국내 초·중·고교 재학생 또는 이와 동등한 자격의 소유자 및 동일 연령 청소년
                </td>
            </tr>
            <tr>
                <td style={{...thTdStyle, fontWeight : 'bold'}}>참가방법</td>
                <td style={thTdStyle}>
                    <a
                        href="https://docs.google.com/forms/d/1FDjI8pcQH-wtZxeerKIrla7Z5c82RpK8B6Z0F8xB4F4/edit"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{...linkStyle, fontWeight : 'bold'}}
                    >
                        사전접수 바로가기
                    </a>
                </td>
            </tr>
            <tr>
                <td style={{...thTdStyle, fontWeight : 'bold'}}>작품주제</td>
                <td style={thTdStyle}>현장 발표</td>
            </tr>
            <tr>
                <td style={{...thTdStyle, fontWeight : 'bold'}}>재료</td>
                <td style={thTdStyle}>제한없음</td>
            </tr>
            <tr>
                <td style={{...thTdStyle, fontWeight : 'bold'}}>작품크기</td>
                <td style={thTdStyle}>초등학생 8절 / 중·고등학생 5절</td>
            </tr>
            <tr>
                <td style={{...thTdStyle, fontWeight : 'bold'}}>작품접수</td>
                <td style={thTdStyle}>현장 제출</td>
            </tr>
            <tr>
                <td style={{...thTdStyle, fontWeight : 'bold'}}>작품공모료</td>
                <td style={thTdStyle}>무료</td>
            </tr>
            <tr>
                <td style={{...thTdStyle, fontWeight : 'bold'}}>심사결과발표</td>
                <td style={thTdStyle}>7월 말 SIKAF 사이트 게시 및 개별 연락</td>
            </tr>
            <tr>
                <td style={{...thTdStyle, fontWeight : 'bold'}}>시상</td>
                <td style={thTdStyle}>대상: 서울시장상 초·중·고 각 1명</td>
            </tr>
            <tr>
                <td style={{...thTdStyle, fontWeight : 'bold'}}>공모참가자특전</td>
                <td style={thTdStyle}>대상 수상자들은 프랑스 루브르 미술관 전시 연계</td>
            </tr>
            <tr>
                <td style={{...thTdStyle, paddingTop : 35, fontWeight : 'bold'}}>주최/주관</td>
                <td style={{...thTdStyle, display : 'flex', alignItems : 'center', gap : 20}}>
                    <img
                        src={'https://sikaf.co.kr/logo.svg'}
                        alt="SIKAF 추진위원회"
                        style={{ height: 40, marginRight: 8, verticalAlign: 'middle' }}
                    />
                    <div style={{backgroundColor : 'black', padding : 10, borderRadius : 5}}>
                    <img
                        src={'https://sikaf.co.kr/bom.png'}
                        alt="비오앰"
                        style={{ height: 40, verticalAlign: 'middle' }}
                    />
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    );
}