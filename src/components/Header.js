import {
    Dropdown,
    HeaderContainer,
    MenuColumnContainer,
    MenuItem,
    SubmenuWrapper,
    SubmenuColumn,
    Underline
} from "../resources/styled/headerStyled";
import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useMediaQuery} from "react-responsive";
import Sidebar from "./Sidebar";


const MENUS = ['SIKAF 소개', '갤러리', '장소', '공모전 안내', '공모전 신청', '고객센터'];
const SUBMENU = [
    [{title: 'SIKAF 소개', link: '/introduce/program'}, {title: '일정안내', link: '/introduce/schedule'}],
    [{title: '갤러리', link: '/gallery'}],
    [{title: '오시는길', link: '/map'}],
    [{title: 'SIKAF 2025', link: '/exhibition'}, {title: '수상작 발표 2025', link: '/awards'}],
    [{title: '모집요강', link: '/guidelines'}],
    [{title: '공지사항', link: '/prepare'}, {title: '언론보도', link: '/prepare'}, {title: 'QAF', link: '/prepare'}]
];

export default function Header() {
    const isMobile = useMediaQuery({query: '(max-width: 1000px)'});
    const isDesktop = useMediaQuery({query: '(min-width: 1300px)'});

    const [open, setOpen] = useState(false);

    const navigate = useNavigate();
    // ▶ activeIdx를 null로 시작: 클릭 전엔 “선택 메뉴” 없음
    const [activeIdx, setActiveIdx] = useState(null);
    // ▶ hoverIdx 하나로 메인·서브 둘 다 처리
    const [hoverIdx, setHoverIdx] = useState(null);
    const [indicator, setIndicator] = useState({left: 0, width: 0});
    const menuRefs = useRef([]);


    // body scroll 막기
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    // ▶ hover 또는 active 기준으로 언더라인 위치 갱신
    useEffect(() => {
        const idx = hoverIdx !== null ? hoverIdx : activeIdx;
        if (idx === null) return;
        const el = menuRefs.current[idx];
        if (!el) return;
        setIndicator({left: el.offsetLeft, width: el.clientWidth});
    }, [activeIdx, hoverIdx]);

    // ▶ dropdown 오픈 여부는 hoverIdx만으로 판단
    const isOpen = hoverIdx !== null;


    return (
        <>
            <HeaderContainer style={{
                paddingTop: isMobile ? 10 : 0,
                display: 'flex',
                height: isMobile ? 60 : 80,
                backgroundColor: isMobile ? 'black' : 'white'
            }}>
                {/* — 로고 & 타이틀 */}
                <div style={{
                    width: 400,
                    display: isDesktop ? 'flex' : '',
                    alignItems: 'center',
                    paddingLeft: 20,
                    cursor: 'pointer'
                }}
                     onClick={() => {
                         navigate('/')
                     }}
                >
                    <img src="https://sikaf.co.kr/logo.svg" alt="logo" width={80} style={{paddingRight: 8}}/>
                    <span style={{fontSize: 11, fontWeight: 700, marginLeft: 8, color: isMobile ? 'white' : 'black'}}>

                        <div>
                            서울국제청소년아트페어2025
                        </div>
                        <div style={{fontSize: 9}}>
                           SEOUL INTERNATIONAL KIDS ART FAIR
                        </div>
                   </span>
                </div>

                {/* — 메인 메뉴 */}
                {isMobile ? <></> : <MenuColumnContainer
                    onMouseLeave={() => setHoverIdx(null)}
                >
                    {MENUS.map((label, i) => (
                        <MenuItem
                            key={label}
                            ref={el => (menuRefs.current[i] = el)}
                            // hover가 있으면 hoverIdx, 없으면 activeIdx
                            className={i === (hoverIdx ?? activeIdx) ? 'active' : ''}
                            onClick={() => setActiveIdx(i)}
                            onMouseEnter={() => setHoverIdx(i)}
                        >
                            {label}
                        </MenuItem>
                    ))}

                    {/* hoverIdx 또는 activeIdx가 있을 때만 */}
                    {(hoverIdx !== null || activeIdx !== null) && (
                        <Underline left={indicator.left} width={indicator.width}/>
                    )}
                </MenuColumnContainer>}

                {/* — 언어 토글 */}
                <div style={{width: isMobile ? 50 : 400, textAlign: 'right', paddingRight: 20}}>
                    {isMobile ? <img src={"https://sikaf.co.kr/icon/Menu.svg"} alt="" style={{cursor: 'pointer', marginTop: -10}}
                                     onClick={() => {
                                         setOpen(v => !v)
                                     }}
                    /> : <></>}
                </div>
            </HeaderContainer>

            {/* — 서브메뉴 */}
            {isMobile ? <></> : <Dropdown
                isOpen={isOpen}
                // dropdown 자체에서는 hoverIdx를 바꾸지 않음
                onMouseEnter={() => {
                }}
                onMouseLeave={() => setHoverIdx(null)}
            >
                <SubmenuWrapper>
                    {SUBMENU.map((col, colIdx) => (
                        <SubmenuColumn
                            key={colIdx}
                            onMouseEnter={() => setHoverIdx(colIdx)}
                            onMouseLeave={() => setHoverIdx(null)}
                        >
                            {col.map(v => (
                                <div key={v.title}
                                     onClick={() => {
                                         setHoverIdx(null)
                                         if (v.link === '/prepare') {
                                             return alert('준비중입니다.')
                                         }
                                         navigate(v.link);
                                     }}
                                >{v.title}</div>
                            ))}
                        </SubmenuColumn>
                    ))}
                </SubmenuWrapper>
            </Dropdown>}


            {/* 반투명 블랙 오버레이 */}
            {open && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0, left: 0,
                        width: '100dvw', height: '100dvh',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',  // 반투명 검정
                        zIndex: 1399,
                        pointerEvents: 'auto',
                    }}
                    onClick={() => setOpen(false)}          // 클릭하면 닫기
                    onWheel={e => e.preventDefault()}
                    onTouchMove={e => e.preventDefault()}
                />
            )}

            <Sidebar open={open} setOpen={setOpen}/>
        </>
    );
}