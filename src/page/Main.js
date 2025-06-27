import {FloatingButton, FloatingIcon, FloatingText, FullpageContainer, Section} from "../resources/styled/mainStyled";
import {useEffect, useRef, useState} from "react";
import Observer from "../components/Observer";
import Sub1 from "../components/Sub1";
import Sub2 from "../components/Sub2";
import Sub3 from "../components/Sub3";


const PAGES = [Sub1, Sub2, Sub3];
const POPUP_HIDE_KEY = 'hidePopupUntil';

// 간단한 UA 기반 데스크탑 감지 함수
function isDesktop() {
    return !/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
        .test(navigator.userAgent);
}

export default function Main() {
    const [currentPage, setCurrentPage] = useState(0);
    // popup 초기값을 lazy initializer로 PC 기준에 맞춰 결정
    const [popup, setPopup] = useState(() => {
        if (!isDesktop()) {
            // 모바일이면 팝업 로직 적용하지 않고 항상 false
            return false;
        }
        // 데스크탑이면 기존 로직 그대로
        const hideUntil = localStorage.getItem(POPUP_HIDE_KEY);
        return !(hideUntil && Date.now() < Number(hideUntil));
    });

    const containerRef = useRef(null);
    const sectionRefs = useRef([]);

    // 스크롤할 때마다 현재 페이지 업데이트
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const onScroll = () => {
            const idx = Math.round(container.scrollTop / container.clientHeight);
            setCurrentPage(idx);
        };

        container.addEventListener('scroll', onScroll);
        return () => container.removeEventListener('scroll', onScroll);
    }, []);

    // 원하는 페이지로 부드럽게 이동
    const goToPage = (idx) => {
        const container = containerRef.current;
        if (!container) return;
        const top = container.clientHeight * idx;
        container.scrollTo({top, behavior: 'smooth'});
    };




    // “오늘 하루 보지 않기” 클릭 핸들러
    const hideToday = () => {
        // 24시간 후 타임스탬프 계산
        const oneDay = 24 * 60 * 60 * 1000;
        const hideUntil = Date.now() + oneDay;
        localStorage.setItem(POPUP_HIDE_KEY, hideUntil.toString());
        setPopup(false);
    };

    // 닫기(오늘 하루만 X가 아니라 그냥 닫기) 핸들러
    const closePopup = () => {
        setPopup(false);
    };

    // 인스타그램으로 이동시키는 함수
    const goToInstagram = () => {
       const INSTA_ID = 'SIAKF'
        // 모바일 앱에서 바로 열기 시도
        window.location.href = `instagram://user?username=${INSTA_ID}`;
        // 앱이 없을 경우를 대비해 웹 프로필로도 열기 (0.5초 뒤)
        setTimeout(() => {
            window.open(
                `https://www.instagram.com/${INSTA_ID}`,
                "_blank",
                "noopener,noreferrer"
            );
        }, 500);
    };


    const goToEmail = () => {
        const EMAIL_ADDRESS = 'sikafofficial@gmail.com';
        // 메일 앱이 있으면 새 창(또는 기본메일앱)으로 열기
        window.open(`mailto:${EMAIL_ADDRESS}`, '_self');
    };

    return (
        <>

            {popup ? <><div
                style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2000,
                }}
            >
                <div style={{position : 'absolute', right : -15, top : -15, backgroundColor : 'white', padding : 5, borderRadius : 20, border : '1px solid lightGray', cursor : 'pointer'}}
                onClick={()=>{
                    setPopup(false)
                }}
                >
                    <img src="https://sikaf.co.kr/icon/Close.svg" alt=""/>
                </div>
                <img
                    width={500}
                    src="https://sikaf.co.kr/poster.png"
                    alt=""
                />
                <div style={{
                    width: 'calc(100% - 20px)',
                    backgroundColor: 'black',
                    height: 20,
                    color: 'white',
                    marginTop: -2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0px 10px',
                    fontSize: 12,
                    alignItems: 'center',
                    fontWeight: 'bold'
                }}>
                    <div style={{cursor: 'pointer'}} onClick={()=>{
                        hideToday()
                    }}>
                        오늘 하루 보지않기
                    </div>

                    <div style={{cursor: 'pointer'}} onClick={closePopup}>
                        닫기
                    </div>
                </div>
            </div>

            <div style={{backgroundColor : 'black', position : 'fixed', zIndex : 1200, width : '100vw', height : '100vh', opacity : 0.6}}>

            </div>
            </> : <></>}


            {/* 풀페이지 스크롤 컨테이너 */}
            <FullpageContainer ref={containerRef}>
                {PAGES.map((PageComponent, i) => (
                    <Section key={i}>
                        {/* 각 페이지 컴포넌트가 내부에서 레이아웃과 배경을 책임집니다 */}
                        <PageComponent/>
                    </Section>
                ))}
            </FullpageContainer>
            {/* ●/○ Indicator */}
            <Observer
                currentPage={currentPage}
                pageCount={PAGES.length}
                onDotClick={goToPage}
            />


            {/*<FloatingButton bottom={'150px'} bgColor={'#84FC6F'} onClick={() => /!* 카카오톡 채팅 열기 로직 *!/}>*/}
            {/*    <FloatingIcon src="/Phone.svg" alt="카카오톡 문의" />*/}
            {/*    <FloatingText>010-8636-2553</FloatingText>*/}
            {/*</FloatingButton>*/}

            <FloatingButton bottom={'70px'} bgColor={'#1D6FF2'} onClick={goToEmail}>
                <FloatingIcon src="https://sikaf.co.kr/Mail.svg" alt="카카오톡 문의"/>
                <FloatingText>sikafofficial@gmail.com</FloatingText>
            </FloatingButton>


            <FloatingButton bottom={'20px'} bgColor={'#EB5F18'} onClick={goToInstagram}>
                <FloatingIcon src="https://sikaf.co.kr/Instagram.svg" alt="카카오톡 문의"/>
                <FloatingText>ID : SIAKF</FloatingText>
            </FloatingButton>
        </>
    );
}