import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

export default function Sidebar({open, setOpen}) {
    const navigate = useNavigate();
    const [expandedIdx, setExpandedIdx] = useState(null);

    // open이 바뀔 때마다 아코디언도 닫히도록 리셋
    useEffect(() => {
        if (!open) {
            setExpandedIdx(null);
        }
    }, [open]);

    const menuItems = [
        {title: 'Home', link: '/'},
        {
            title: 'SIKAF 소개',
            subMenu: [
                {title: '프로그램 안내', link: '/introduce/program'},
                {title: '일정안내', link: '/introduce/schedule'},
                {title: '공지사항', link: '/notice'}
            ],
        },
        {
            title: '공모전 신청',
            subMenu: [
                {title: 'SIKAF 2025', link: '/exhibition'},
                {title: '수상작 발표 2025', link: '/awards'},
                {title: '오시는길', link: '/map'},
            ],
        },
        {title: '모집요강', link: '/guidelines'},

        {title: '갤러리', link: '/gallery'},
        {
            title: '고객센터',
            subMenu: [
                {title: '언론보도', link: '/broadcast'},
                {title: 'FAQ', link: '/qna'},
            ],
        },
    ];

    const handleClick = (item, idx) => {
        if (item.subMenu) {
            setExpandedIdx(expandedIdx === idx ? null : idx);
        } else {
            navigate(item.link);
            setOpen(false);
        }
    };

    const handleSubClick = (link) => {
        if (link === '/prepare') {
            return alert('준비중입니다.')
        }
        navigate(link);
        setOpen(false);
    };

    return (
        <div
            style={{
                position: 'fixed',
                top: 0, right: 0,
                width: 300,
                height: '100dvh',
                overflowY: 'auto',
                WebkitOverflowScrolling: 'touch',
                backgroundColor: 'white',
                zIndex: 1400,
                fontSize: 12, fontWeight: 800,
                transform: open ? 'translateX(0)' : 'translateX(100%)',
                transition: 'transform 0.3s ease-in-out',
                pointerEvents: open ? 'auto' : 'none',
            }}
        >
            {/* 헤더 */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    height: 65, alignItems: 'center',
                    padding: '0 20px',
                    borderBottom: '1px solid lightgray',
                }}
            >
                <span>MENU</span>
                <img
                    src="https://sikaf.co.kr/icon/Close.svg"
                    alt="닫기"
                    style={{cursor: 'pointer'}}
                    onClick={() => setOpen(false)}
                />
            </div>

            {/* 메뉴 리스트 & 아코디언 */}
            {menuItems.map((item, idx) => (
                <div key={item.title}>
                    {/* 메인 메뉴 */}
                    <div
                        onClick={() => handleClick(item, idx)}
                        style={{
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            height: 54, alignItems: 'center',
                            padding: '0 20px',
                            borderBottom: '1px solid lightgray',
                            backgroundColor: expandedIdx === idx ? '#f5f5f5' : 'transparent',
                        }}
                    >
                        <span>{item.title}</span>
                        <span>
              {item.subMenu
                  ? expandedIdx === idx ? <img src="https://sikaf.co.kr/icon/arrow_up.svg" height={16} alt=""/> :
                      <img src="https://sikaf.co.kr/icon/arrow_down.svg" height={16} alt=""/>
                  : <></>}
            </span>
                    </div>

                    {/* 서브메뉴 패널: max-height 트랜지션 */}
                    {item.subMenu && (
                        <div
                            style={{
                                backgroundColor: '#fafafa',
                                overflow: 'hidden',
                                maxHeight: expandedIdx === idx
                                    ? `${item.subMenu.length * 60}px`
                                    : '0px',
                                transition: 'max-height 0.3s ease',
                            }}
                        >
                            {item.subMenu.map(sub => (
                                <div
                                    key={sub.title}
                                    onClick={() => {


                                            handleSubClick(sub.link)

                                    }}
                                    style={{
                                        cursor: 'pointer',
                                        padding: '12px 40px',
                                        borderBottom: '1px solid lightgray',
                                        fontSize: 11,
                                    }}
                                >
                                    {sub.title}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
