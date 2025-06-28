import React from 'react';
import { useMediaQuery } from 'react-responsive';
// 로고 파일 경로는 실제 프로젝트에 맞게 수정해주세요.
// import logoSIKAF from '/path/to/logo-sikaf.png';
// import logoBOM from '/path/to/logo-bom.png';

export default function DateList() {
    const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 900px)' });

    const tableStyle = {
        marginTop: 20,
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: isMobile ? 10 : isDesktop ? 15 : 12,
    };
    const cellStyle = {
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
    const listStyle = {
        listStyleType: 'none',
        margin: 0,
        paddingLeft: '20px',
    };

    return (
        <table style={tableStyle}>
            <tbody>
            <tr>
                <td style={{ ...cellStyle, fontWeight: 'bold' }}>사생대회</td>
                <td style={cellStyle}>13:00~16:30</td>
                <td style={cellStyle}>
                    <a
                        href="https://docs.google.com/forms/d/1FDjI8pcQH-wtZxeerKIrla7Z5c82RpK8B6Z0F8xB4F4/edit"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={linkStyle}
                    >
                        사전신청 링크 (Google Forms)
                    </a>
                </td>
            </tr>
            <tr>
                <td style={{ ...cellStyle, fontWeight: 'bold' }}>
                    나라사랑 전통놀이 체험부스
                </td>
                <td style={cellStyle}>10:00~17:00</td>
                <td style={cellStyle}>
                    <ul style={listStyle}>
                        <li>- 딱지치기</li>
                        <li>- 제기차기</li>
                        <li>- 무궁화꽃이 피었습니다</li>
                        <li>- 하늘땅 등</li>
                    </ul>
                    🤩 우리 전통놀이를 체험하며 즐겁게 역사도 배우는 시간!
                </td>
            </tr>
            <tr>
                <td style={{ ...cellStyle, fontWeight: 'bold' }}>
                    나라사랑 아트 체험 부스
                </td>
                <td style={cellStyle}>10:00~17:00</td>
                <td style={cellStyle}>
                    <ul style={listStyle}>
                        <li>- 페이스 페인팅</li>
                        <li>- 즉석 포토존</li>
                        <li>- 태극기 소망 나무</li>
                        <li>- 도장찍기</li>
                    </ul>
                    😍 다양한 활동으로 나라사랑을 체험해보세요!
                </td>
            </tr>
            <tr>
                <td style={{ ...cellStyle, fontWeight: 'bold' }}>
                    광복 80주년 기념즉석 포토존
                </td>
                <td style={cellStyle}>10:00~17:00</td>
                <td style={cellStyle}>
                    광화문광장에서 특별한 하루를 사진으로 간직하세요.
                    <ul style={listStyle}>
                        <li>- 현장에서 즉석 촬영 및 인화 제공</li>
                        <li>- 광복 80주년 기념 타이틀 및 메시지가 인쇄된 한정 포토프레임</li>
                        <li>- 친구, 가족, 동료와 함께 뜻깊은 순간을 남겨보세요!</li>
                        <li>- SNS 공유 이벤트도 함께 진행됩니다 🎁</li>
                    </ul>
                    ※ 사진은 무료로 제공되며, 수량은 한정될 수 있습니다.
                </td>
            </tr>
            </tbody>
        </table>
    );
}