import React from "react";
import {useMediaQuery} from "react-responsive";

export default function Footers(){
    const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 700px)' });

    return <>
        {isMobile ?

            <>

                {/* 2. 어두운 배경 영역 */}
                <div
                    style={{
                        display: 'flex',
                        backgroundColor: '#2D2D2D',
                        // padding: '20px 100px',
                        padding : 5,
                        gap: 20,
                        color: 'white',
                    }}
                >
                    {/* INFO & CONTACT */}
                    <div>
                        <div style={{ fontSize: 15, fontWeight: 800 }}>INFO & CONTACT</div>
                        <div style={{ fontSize: 11, display: 'flex', alignItems: 'center', paddingTop: 17 }}>
                            <img src="/icon/Calendar.svg" alt="" width={20} /> 25년 7월 12일
                        </div>
                        <div style={{ fontSize: 11, display: 'flex', alignItems: 'center', paddingTop: 5 }}>
                            <img src="/icon/Delivery Time.svg" alt="" width={20}/> 12:00 - 17:00
                        </div>
                        <div style={{ fontSize: 11, display: 'flex', alignItems: 'center', paddingTop: 17 }}>
                            <img src="/icon/Address.svg" alt="" width={20} /> 광화문 광장 놀이마당 일대
                        </div>
                        <div style={{ fontSize: 11, display: 'flex', alignItems: 'center', paddingTop: 5 }}>
                            <img src="/icon/Email.svg" alt="" width={20} /> sikafofficial
                        </div>
                        <div style={{ fontSize: 11, display: 'flex', alignItems: 'center', paddingTop: 5, paddingBottom: 50 }}>
                            <img src="/icon/Instagram.svg" alt=""  width={20}/> sikaf_official
                        </div>
                    </div>

                    {/* 주최·주관·후원 로고 */}
                    <div style={{  fontSize: 11, paddingTop : 45 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                            주최 <img src="/logo.png" alt="주최 로고" width={100} />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 20, paddingTop : 10 }}>
                            주관 <img src="/bom.png" alt="주관 로고"width={100} />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 20, paddingTop : 10 }}>
                            후원 <img src="/seoul.png" alt="후원 로고"width={100} />
                        </div>
                    </div>

                    {/* 빈 공간 */}
                    <div />
                </div>

                {/* 3. 저작권 문구 */}
                <div
                    style={{

                        marginTop: -40,
                        paddingLeft: 10,
                        fontSize: 10,
                        color: 'white',
                    }}
                >
                    All contents provided by SIKAF are copyrighted <br/>works protected by copyright law.
                    <br />
                    © SIKAF. All rights reserved.
                </div>
            </>

            :
            <>

                {/* 2. 어두운 배경 영역 */}
                <div
                    style={{
                        display: 'flex',
                        backgroundColor: '#2D2D2D',
                        padding: '20px 100px',
                        gap: 50,
                        color: 'white',
                    }}
                >
                    {/* INFO & CONTACT */}
                    <div>
                        <div style={{ fontSize: 20, fontWeight: 800 }}>INFO & CONTACT</div>
                        <div style={{ fontSize: 13, display: 'flex', alignItems: 'center', paddingTop: 20 }}>
                            <img src="/icon/Calendar.svg" alt="" /> 25년 7월 12일
                        </div>
                        <div style={{ fontSize: 13, display: 'flex', alignItems: 'center', paddingTop: 7 }}>
                            <img src="/icon/Delivery Time.svg" alt="" /> 12:00 - 17:00
                        </div>
                        <div style={{ fontSize: 13, display: 'flex', alignItems: 'center', paddingTop: 20 }}>
                            <img src="/icon/Address.svg" alt="" /> 광화문 광장 놀이마당 일대
                        </div>
                        <div style={{ fontSize: 13, display: 'flex', alignItems: 'center', paddingTop: 7 }}>
                            <img src="/icon/Email.svg" alt="" /> sikafofficial
                        </div>
                        <div style={{ fontSize: 13, display: 'flex', alignItems: 'center', paddingTop: 7, paddingBottom: 50 }}>
                            <img src="/icon/Instagram.svg" alt="" /> sikaf_official
                        </div>
                    </div>

                    {/* 주최·주관·후원 로고 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 50, fontSize: 17 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            주최 <img src="/logo.png" alt="주최 로고" />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            주관 <img src="/bom.png" alt="주관 로고" />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            후원 <img src="/seoul.png" alt="후원 로고" />
                        </div>
                    </div>

                    {/* 빈 공간 */}
                    <div />
                </div>

                {/* 3. 저작권 문구 */}
                <div
                    style={{

                        marginTop: -40,
                        paddingLeft: 100,
                        fontSize: 10,
                        color: 'white',
                    }}
                >
                    All contents provided by SIKAF are copyrighted works protected by copyright law.
                    <br />
                    © SIKAF. All rights reserved.
                </div>
            </>
        }
    </>
}