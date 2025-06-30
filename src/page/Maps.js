import Footers from "../components/Footers";
import {useMediaQuery} from "react-responsive";
import React, {useEffect, useRef, useState} from "react";
import {Map, MapMarker, useKakaoLoader} from 'react-kakao-maps-sdk';
import subImage from "../resources/image/sub_Image.jpg";

const busCategories = [
    {
        name: '광역버스',
        color: '#d8432a',
        buses: [
            '1000', '1100', '1200', '1900', '9701', '9703', 'M7106', 'M7129',
            '9714', '9709', '9710', '9710-1', 'G7111', 'M7111', 'M7154', '1004',
            '8600', '8601', 'G6005', 'M7119', '5000A', '5000B', '5005', '5500-2',
            '9000', '9000-1', '9200', '9401'
        ]
    },
    {
        name: '간선버스',
        color: '#2690ee',
        buses: [
            '101', '103', '109', '150', '160', '260', '270', '271', '273', '370',
            '401', '406', '470', '600', '601', '602', '606', '700', '702A', '702B',
            '704', '707', '708', '720', '721', '741', 'N26', 'N37', 'N51', 'N75'
        ]
    },
    {
        name: '자선버스',
        color: '#277b12',
        buses: ['1020', '1711', '7016', '7018', '7019', '7022', '7212'],
    },
    {
        name: '순환버스',
        color: '#986b01',
        buses: ['01(KT광화문지사 앞)'],
    },
    {
        name: '공항버스',
        color: '#1d71aa',
        buses: ['6002'],
    }
];


const trainCategories = [
    {
        name: '3호선',
        color: '#ec610a',
        buses: ['경복궁역 하차 > 6번출구 정부중앙청사, 광화문 방향'],
    },
    {
        name: '5호선',
        color: '#7a24c6',
        buses: ['광화문역 하차 > 해치마당 연결통로, 7번출구 광장숲 방향'],
    }
];


export default function Maps() {

    const [loading, error] = useKakaoLoader({
        appkey: 'a0e5d26a869b9d18462ef5c825504410',
        libraries: ['services', 'clusterer']
    });

    const isMobile = useMediaQuery({query: '(max-width: 500px)'});
    const isDesktop = useMediaQuery({query: '(min-width: 900px)'});

    const [info, setInfo] = useState('bus');
    const [mapView, setMapView] = useState('kakao');
    const controlsAdded = useRef(false);  // ← 한 번만 추가됐는지 체크

    const [zoomLevel, setZoomLevel] = useState(null);
    const mapRef = useRef(null);


    const style = {
        backgroundImage: `url(${subImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundAttachment: 'fixed',
        color: 'white'
    };

    useEffect(() => {
        if (mapView === 'simple') {
            controlsAdded.current = false;
        }
    }, [mapView])

    return (<>
            <div style={{...style, height: isMobile ? 140 : (isDesktop ? 200 : 190), display : 'flex', alignItems : 'center', marginTop : isDesktop ? 80 : 70}}>
                <div>
                    <img src="/charactor2.svg" width={isMobile ? 80 : 100} style={{paddingBottom : 15, paddingLeft : 30}} alt="Character" />
                </div>
                <div style={{padding: isMobile ? '100px 20px' : '130px 60px'}}>

                    <div style={{fontSize: isMobile ? 35 : (isDesktop ? 50 : 45), fontWeight: 800}}>오시는길</div>
                    <div style={{
                        paddingTop: isMobile ? 10 : 35,
                        fontSize: isMobile ? 12 : (isDesktop ? 20 : 17),
                        lineHeight: 1.5
                    }}>
                        {isMobile ? <> 2025. 7. 12 SAT <br/> 광화문 광장 놀이마당 일대(세종대왕상
                            앞)</> : '2025. 7. 12 SAT  광화문 광장 놀이마당 일대(세종대왕상 앞)'}
                    </div>
                </div>
            </div>


            <div style={{
                color: 'black',
                backgroundColor: 'white',
                display: 'flex',
                flexWrap : 'wrap',
                gap: 50,
                padding: isMobile ? '30px 20px 35px 20px' : '60px 60px 35px 60px'
            }}>

                <div>
                    <div style={{
                        fontSize: 12,
                        width: isMobile ? "100%"  : 400
                    }}>
                        <div style={{
                            display: 'flex',
                            textAlign: 'center',
                            justifyContent: 'center',
                            gap: 20,
                        }}>
                            <div style={{width: 60, opacity: info === 'bus' ? 1 : 0.5, cursor: 'pointer'}}
                                 onClick={() => setInfo('bus')}>
                                <img src="https://sikaf.co.kr/Bus.svg" width={40} alt=""/>
                                <div>버스</div>
                            </div>
                            <div style={{width: 60, opacity: info === 'train' ? 1 : 0.5, cursor: 'pointer'}}
                                 onClick={() => setInfo('train')}>
                                <img src="https://sikaf.co.kr/Train.svg" width={40} alt=""/>
                                <div>지하철</div>
                            </div>
                        </div>

                        <div style={{paddingTop: 20}}>
                            {info === 'bus' ?
                                <div>

                                    <div style={{fontSize: 20, fontWeight: 800, padding: '20px 0px'}}>버스로 오시는방법</div>

                                    {busCategories.map(({name, buses, color, colorClass}) => (
                                        <div key={name} style={{paddingTop: 20}}>
          <span style={{
              fontSize: 15,
              fontWeight: 800,
              color: 'white',
              backgroundColor: color,
              padding: '3px 12px',
              borderRadius: 20
          }}>
            {name}
          </span>
                                            <div style={{display : 'flex', flexShrink: 0,flexWrap : 'wrap', width : '100%', paddingTop : 10, }}>
                                                <span
                                                    style={{fontSize: 14, fontWeight: 600}}>   {buses.join(', ')}</span>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                                :
                                <div>
                                    <div style={{fontSize: 20, fontWeight: 800, padding: '20px 0px'}}>지하철로 오시는방법</div>
                                    {trainCategories.map(({name, buses, color, colorClass}) => (
                                        <div key={name} style={{paddingTop: 20}}>
          <span style={{
              fontSize: 15,
              fontWeight: 800,
              color: 'white',
              backgroundColor: color,
              padding: '3px 12px',
              borderRadius: 20
          }}>
            {name}
          </span>
                                            <p>
                                                <span
                                                    style={{fontSize: 15, fontWeight: 600}}>   {buses.join(', ')}</span>
                                            </p>
                                        </div>
                                    ))}

                                </div>
                            }
                        </div>
                    </div>
                </div>


                <div>
                    <div style={{display: 'flex', gap: 20, fontWeight: 'bold', cursor: 'pointer'}}>
                        <div style={{opacity: mapView === 'kakao' ? 1 : 0.5, cursor: 'pointer'}}
                             onClick={() => setMapView('kakao')}>카카오맵
                        </div>
                        <div style={{opacity: mapView === 'simple' ? 1 : 0.5}}
                             onClick={() => setMapView('simple')}>약도
                        </div>

                    </div>

                    <div style={{ marginTop: 20, border: '1px solid lightGray', padding: 20 }}>
                        {mapView === 'simple' ? (
                            <img src="https://sikaf.co.kr/map.svg" width={isMobile ? '100%' :  800} alt="약도" />
                        ) : (
                            <div style={{ position: 'relative', width: '100%', height: 500 }}>


                                <Map
                                    center={{ lat: 37.57291910825706, lng: 126.97690724242149}}
                                    level={2}
                                    style={{ width:  `calc(100vw - ${isMobile ? 80 : 700}px)`, height: '100%' }}
                                    onCreate={map => {
                                        mapRef.current = map;


                                        // 이미 추가했으면 바로 레벨만 세팅하고 종료
                                        if (controlsAdded.current) {
                                            setZoomLevel(map.getLevel());
                                            return;
                                        }

                                        const kakao = window.kakao;

                                        // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
                                        const mapTypeControl = new kakao.maps.MapTypeControl();
                                        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
                                        // 확대/축소 컨트롤 추가
                                          const zoomControl = new kakao.maps.ZoomControl();
                                          map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
                                        // 초기 레벨 설정
                                        setZoomLevel(map.getLevel());

                                        // zoom_changed 이벤트 리스너 등록
                                        kakao.maps.event.addListener(map, 'zoom_changed', () => {
                                            setZoomLevel(map.getLevel());
                                        });
                                        controlsAdded.current = true;  // ← 다시 안 추가하도록 플래그 설정
                                    }}
                                >



                                    <MapMarker position={{ lat: 37.57291910825706, lng: 126.97690724242149 }} image={{src: 'https://sikaf.co.kr/icon/marker.png', size : {width : 60, height : 60}}}>
                                        {/*<div style={{ textAlign: 'center' }}>광화문 광장 놀이마당</div>*/}
                                    </MapMarker>
                                </Map>
                            </div>
                        )}
                    </div>
                </div>

            </div>


            <Footers/>
        </>
    );
}