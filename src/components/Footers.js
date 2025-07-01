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
                                    <span style={{fontWeight : 700}}>회사명 :</span> BOM(주식회사 비오앰)
                                </div>
                                <div style={{
                                    fontSize: 11,
                                    display: 'flex',
                                    alignItems: 'center',
                                    paddingTop: 5,
                                    gap: 3
                                }}>
                                    <span style={{fontWeight : 700}}>대표이사 :</span> 신유린
                                </div>
                                <div style={{
                                    fontSize: 11,
                                    display: 'flex',
                                    alignItems: 'center',
                                    paddingTop: 5,
                                    gap: 3
                                }}>
                                    <span style={{fontWeight : 700}}>주소 :</span> 서울시 강남구 논현동 36-11 3층
                                </div>
                                <div style={{
                                    fontSize: 11,
                                    display: 'flex',
                                    alignItems: 'center',
                                    paddingTop: 5,
                                    paddingBottom: 50, gap: 3
                                }}>
                                    <span style={{fontWeight : 700}}>이메일 :</span>  sikafofficial@gmail.com
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
                                height: 180,
                                display: 'flex',
                                backgroundColor: '#2D2D2D',
                                padding: '20px 100px',
                                justifyContent: 'space-between',
                                color: 'white',
                            }}
                        >
                            {/* INFO & CONTACT */}
                            <div>
                                <div style={{fontSize: 20, fontWeight: 800}}>INFORMATION</div>
                                <div style={{fontSize: 12, display: 'flex', alignItems: 'center', paddingTop: 20}}>
                                    <span style={{fontWeight : 700}}>회사명 :</span> BOM(주식회사 비오앰)
                                </div>
                                <div style={{fontSize: 12, display: 'flex', alignItems: 'center', paddingTop: 8}}>
                                    <span style={{fontWeight : 700}}>대표이사 :</span> 신유린
                                </div>
                                <div style={{fontSize: 12, display: 'flex', alignItems: 'center', paddingTop: 8}}>
                                    <span style={{fontWeight : 700}}>주소 :</span> 서울시 강남구 논현동 36-11 3층
                                </div>
                                {/*<div style={{fontSize: 12, display: 'flex', alignItems: 'center', paddingTop: 8}}>*/}
                                {/*    <span style={{fontWeight : 700}}>사업자등록번호 :</span> ??????????*/}
                                {/*</div>*/}

                                {/*<div style={{fontSize: 12, display: 'flex', alignItems: 'center', paddingTop: 8}}>*/}
                                {/*    <span style={{fontWeight : 700}}>전화번호 :</span> 02.6956.7050*/}
                                {/*</div>*/}
                                <div style={{fontSize: 12, display: 'flex', alignItems: 'center', paddingTop: 8}}>
                                    <span style={{fontWeight : 700}}>이메일 :</span> sikafofficial@gmail.com
                                </div>



                                <div style={{fontSize: 10, paddingTop : 20}}>
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