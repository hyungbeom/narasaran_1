import React, {useEffect, useState} from "react";
import {useMediaQuery} from "react-responsive";


function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
        .test(navigator.userAgent);
}

export default function Footers() {
    const isMobile = useMediaQuery({query: '(max-width: 500px)'});
    const isDesktop = useMediaQuery({query: '(min-width: 700px)'});


    const isLandscape = useMediaQuery({query: '(orientation: landscape)'});
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        setMobile(isMobileDevice());
    }, []);


    return <>
        { (isMobile ?

                    <>

                        {/* 2. 어두운 배경 영역 */}
                        <div
                            style={{
                                display: 'flex',
                                backgroundColor: '#2D2D2D',
                                // padding: '20px 100px',
                                padding: 5,
                                gap: 20,
                                color: 'white',
                            }}
                        >
                            {/* INFO & CONTACT */}
                            <div>
                                <div style={{fontSize: 15, fontWeight: 800}}>INFO & CONTACT</div>
                                <div style={{
                                    fontSize: 11,
                                    display: 'flex',
                                    alignItems: 'center',
                                    paddingTop: 17,
                                    gap: 3
                                }}>
                                    <img src="https://sikaf.co.kr/icon/Calendar.svg" alt="" width={20}/> 25년 7월 12일
                                </div>
                                <div style={{
                                    fontSize: 11,
                                    display: 'flex',
                                    alignItems: 'center',
                                    paddingTop: 5,
                                    gap: 3
                                }}>
                                    <img src="https://sikaf.co.kr/icon/Delivery Time.svg" alt="" width={20}/> 12:00 -
                                    17:00
                                </div>
                                <div style={{
                                    fontSize: 11,
                                    display: 'flex',
                                    alignItems: 'center',
                                    paddingTop: 17,
                                    gap: 3
                                }}>
                                    <img src="https://sikaf.co.kr/icon/Address.svg" alt="" width={20}/> 광화문 광장 놀이마당 일대
                                </div>
                                <div style={{
                                    fontSize: 11,
                                    display: 'flex',
                                    alignItems: 'center',
                                    paddingTop: 5,
                                    gap: 3
                                }}>
                                    <img src="https://sikaf.co.kr/icon/Email.svg" alt="" width={20}/> sikafofficial
                                </div>
                                <div style={{
                                    fontSize: 11,
                                    display: 'flex',
                                    alignItems: 'center',
                                    paddingTop: 5,
                                    paddingBottom: 50, gap: 3
                                }}>
                                    <img src="https://sikaf.co.kr/icon/Instagram.svg" alt="" width={20}/> sikaf_official
                                </div>
                            </div>


                            {/* 빈 공간 */}
                            <div/>
                        </div>

                        {/* 3. 저작권 문구 */}
                        <div
                            style={{

                                marginTop: -30,
                                paddingLeft: 10,
                                fontSize: 8,
                                color: 'white',
                            }}
                        >
                            All contents provided by SIKAF are copyrighted works protected by copyright law.
                            <br/>
                            © SIKAF. All rights reserved.
                        </div>
                    </>

                    :
                    <>

                        {/* 2. 어두운 배경 영역 */}
                        <div
                            style={{
                                height: 250,
                                display: 'flex',
                                backgroundColor: '#2D2D2D',
                                padding: '20px 100px',
                                justifyContent: 'space-between',
                                color: 'white',
                            }}
                        >
                            {/* INFO & CONTACT */}
                            <div>
                                <div style={{fontSize: 20, fontWeight: 800}}>INFO & CONTACT</div>
                                <div style={{fontSize: 13, display: 'flex', alignItems: 'center', paddingTop: 20}}>
                                    <img src="https://sikaf.co.kr/icon/Calendar.svg" alt=""/> 25년 7월 12일
                                </div>
                                <div style={{fontSize: 13, display: 'flex', alignItems: 'center', paddingTop: 7}}>
                                    <img src="https://sikaf.co.kr/icon/Delivery Time.svg" alt=""/> 12:00 - 17:00
                                </div>
                                <div style={{fontSize: 13, display: 'flex', alignItems: 'center', paddingTop: 20}}>
                                    <img src="https://sikaf.co.kr/icon/Address.svg" alt=""/> 광화문 광장 놀이마당 일대
                                </div>
                                <div style={{fontSize: 13, display: 'flex', alignItems: 'center', paddingTop: 7}}>
                                    <img src="https://sikaf.co.kr/icon/Email.svg" alt=""/> sikafofficial
                                </div>
                                <div style={{
                                    fontSize: 13,
                                    display: 'flex',
                                    alignItems: 'center',
                                    paddingTop: 7,
                                    paddingBottom: 20
                                }}>
                                    <img src="https://sikaf.co.kr/icon/Instagram.svg" alt=""/> sikaf_official
                                </div>
                                <div style={{fontSize: 10}}>
                                    All contents provided by SIKAF are copyrighted works protected by copyright law.
                                    <br/>
                                    © SIKAF. All rights reserved.
                                </div>
                            </div>

                            <div style={{color: 'white'}}>

                            </div>

                            <div/>
                        </div>
                    </>
            )}
    </>
}