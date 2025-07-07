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


const MENUS = [{title: 'SIKAF 소개', link: '/introduce/program'}, {title: '공모전 신청', link: '/exhibition'}, {title: '공모전 안내', link:'/guidelines'}, {title: '갤러리', link:'/gallery'},{title: '고객센터', link:'/prepare'},];
const SUBMENU = [
    [{title: 'SIKAF 소개', link: '/introduce/program', depth : 0}, {title: '일정안내', link: '/introduce/schedule', depth : 0}],
    [{title: 'SIKAF 2025', link: '/exhibition', depth : 1}, {title: '수상작 발표 2025', link: '/awards', depth : 1},{title: '오시는길', link: '/map', depth : 1}],
    [{title: '모집요강', link: '/guidelines', depth : 2}],
    [{title: '갤러리', link: '/gallery', depth : 3}],
    [{title: '공지사항', link: '/prepare', depth : 4}, {title: '언론보도', link: 'https://www.ibabynews.com/news/articleView.html?idxno=134859', depth : 4}, {title: 'Q&A', link: '/qna', depth : 4}]
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
                    <img src="/logo.svg" alt="logo" width={110} style={{paddingRight: 0}}/>
                    <span style={{fontSize: 11, fontWeight: 700, marginLeft: 8, color: isMobile ? 'white' : 'black'}}>

                        <div style={{letterSpacing : 0.9}}>
                            서울국제어린이청소년아트페어
                        </div>
                        <div style={{fontSize: 8, fontWeight: 600, letterSpacing : -0.38}}>
                           SEOUL INTERNATIONAL KIDS&YOUTH
                        </div>
                   </span>
                </div>

                {/* — 메인 메뉴 */}
                {isMobile ? <></> : <MenuColumnContainer
                    onMouseLeave={() => setHoverIdx(null)}
                >
                    {MENUS.map(({title, link}, i) => (
                        <MenuItem
                            key={title}
                            ref={el => (menuRefs.current[i] = el)}
                            // hover가 있으면 hoverIdx, 없으면 activeIdx
                            className={i === (hoverIdx ?? activeIdx) ? 'active' : ''}
                            onClick={() => {

                                if(link === '/prepare') {
                                    return alert('준비중입니다');
                                }
                                setActiveIdx(i);
                                navigate(link);
                            }}
                            onMouseEnter={() => setHoverIdx(i)}
                        >
                            {title}
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
                                         setHoverIdx(null);
                                         if (v.link === '/prepare') {
                                             return alert('준비중입니다.')
                                         }

                                         if(v.title === '언론보도'){
                                            return      window.open(v.link, "_blank");
                                         }
                                         setActiveIdx(v.depth)
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