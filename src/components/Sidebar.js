import {useNavigate} from "react-router-dom";

export default function Sidebar({open, setOpen}) {

    const navigator = useNavigate();
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: 300,
                height: '100vh',
                backgroundColor: 'white',
                zIndex: 1400,
                fontSize: 12,
                fontWeight: 800,

                /* 항상 렌더링하되 transform만 바꾼다 */
                transform: open ? 'translateX(0)' : 'translateX(100%)',
                transition: 'transform 0.3s ease-in-out',

                /* 닫혔을 땐 클릭 막기 */
                pointerEvents: open ? 'auto' : 'none',
            }}
        >
            {/* 헤더 */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    height: 65,
                    alignItems: 'center',
                    padding: '0 20px',
                    borderBottom: '1px solid lightgray',
                }}
            >
                <span>MENU</span>
                <img
                    src="/icon/Close.svg"
                    alt="닫기"
                    style={{cursor: 'pointer'}}
                    onClick={() => setOpen(false)}
                />
            </div>

            {/* 메뉴 리스트 */}
            {[
                {title : 'Home', link : '/'},
                {title : '행사소개&프로그램 안내', link : '/introduce'},
                {title : '장소', link : '/map'},
                {title : '사생대회 시상안내', link : '/rewards'},
                {title : '포토존&리뷰', link : '/photo'},
                {title : '문의&자주 묻는 질문', link : '/qna'},
            ].map(v => (
                <div
                    onClick={()=>{
                        navigator(v.link)
                    }}
                    key={v.title}
                    style={{
                        cursor : 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        height: 54,
                        alignItems: 'center',
                        padding: '0 20px',
                        borderBottom: '1px solid lightgray',
                    }}
                >
                    <span>{v.title}</span>
                    <span>{'>'}</span>
                </div>
            ))}
        </div>
    );
}