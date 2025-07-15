import Footers from "../components/Footers";
import {useMediaQuery} from "react-responsive";
import {Button, Input, message} from "antd";

import subImage from '../resources/image/sub_Image.jpg';
import React, {useState} from "react";
import {InputNumber} from "antd/lib";

export default function Awards() {
    const isMobile = useMediaQuery({query: '(max-width: 500px)'});
    const isDesktop = useMediaQuery({query: '(min-width: 900px)'});

    const [name, setName] = useState('');
    const [numb1, setNumb1] = useState(null);
    const [numb2, setNumb2] = useState('');
    const [numb3, setNumb3] = useState('');
    const [result, setResult] = useState(null);

    const style = {
        backgroundImage: `url(/subtitle/subtitle2.jpg)`,
        backgroundSize: '100% auto',              // 가로 100%, 세로 자동
        backgroundRepeat: 'no-repeat',            // 반복 없음
        backgroundPosition: 'bottom center',         // 상단 중앙 정렬
        backgroundAttachment: 'scroll',           // (fixed 원하면 변경)
        color: 'black'
    };

    const dataList = [

        {
            "awards": "대상",
            "part": "유치부",
            "name": "고서윤",
            "product": "미래의 한강모습",
            "birth": "2019.05.05",
            "phone": "010-6473-8883",
            "address": "서울시 강서구 공항대로583 염창이편한세상 102-1902",
            "school": "유니유치원/서울",
            "email": "soohdlwl@naver.com"
        },
        {
            "awards": "대상",
            "part": "초등부",
            "name": "문민준",
            "product": "광복 이제 우주에서도…",
            "birth": "2015.05.13",
            "phone": "010-5389-7510",
            "address": "서울시 동작구 신대방14길 7-1",
            "school": "문창초등학교 /서울",
            "email": "star-lovely@hanmail.net"
        },
        {
            "awards": "대상",
            "part": "초등부",
            "name": "김예솔",
            "product": "희망의 열매",
            "birth": "2017.09.17",
            "phone": "010-7133-6967",
            "address": "서울시 동대문구 제기로131 101동1604호",
            "school": "서울홍릉초등학교/서울",
            "email": "vavy99@naver.com"
        },
        {
            "awards": "금상",
            "part": "초등부",
            "name": "최설희",
            "product": "수없이 펼쳐진 미래",
            "birth": "2012.12.28",
            "phone": "010-2247-8325",
            "address": "서울특별시 성동구 금호로16길 9-1 301호",
            "school": "서울 무학중학교",
            "email": "kim_sanghee@naver.com"
        },
        {
            "awards": "금상",
            "part": "초등부",
            "name": "최단비",
            "product": "한글 탈춤",
            "birth": "2018.01.16",
            "phone": "010-7367-8511",
            "address": "서울 동대문구 장한로26길37 르메이에르장안타운5차 503호",
            "school": "서울안평초등학교 / 서울동대문",
            "email": "dhs511@nate.com"
        },
        {
            "awards": "금상",
            "part": "초등부",
            "name": "황준엽",
            "product": "미래에서 온 거북선",
            "birth": "2018.04.22",
            "phone": "010-9956-2318",
            "address": "서울특별시 도봉구 마들로 684-19 (도봉동, 서원아파트) 112동 605호",
            "school": "서울 창도초등학교 /도봉구",
            "email": "luck8265@naver.com"
        },
        {
            "awards": "금상",
            "part": "초등부",
            "name": "전지윤",
            "product": "모두가 화합하는 미래 우리나라",
            "birth": "2017.10.02",
            "phone": "010-5342-1334",
            "address": "서울시 송파구 올림픽로 파크리오 204-602",
            "school": "잠실초등학교 (서울시 송파구)",
            "email": "ycatr@naver.com"
        },
        {
            "awards": "은상",
            "part": "유치부",
            "name": "이지안",
            "product": "통일구급대",
            "birth": "2019.06.24",
            "phone": "010-8861-6274",
            "address": "서울시 강동구 양재대로 1650 래미안솔베뉴 107동 1906호",
            "school": "우아한2어린이집",
            "email": "0320dew@gmail.com"
        },
        {
            "awards": "은상",
            "part": "유치부",
            "name": "전상윤",
            "product": "첨단기술로 깨끗한 우리나라",
            "birth": "2019.09.02",
            "phone": "010-3041-9931",
            "address": "서울시 송파구 신천동 잠실파크리오 204동 602호",
            "school": "햇빛유치원",
            "email": "swrains@naver.com"
        },
        {
            "awards": "은상",
            "part": "유치부",
            "name": "이혜율",
            "product": "선서! 나는 자랑스러운 대한민국인 입니다. ",
            "birth": "2020.04.30",
            "phone": "010-8735-4480",
            "address": "배곧1로 27-16 한라2차 비발디캠퍼스 208동3705호",
            "school": "초록유치원/시흥",
            "email": "enjin3838@naver.com"
        },
        {
            "awards": "은상",
            "part": "유치부",
            "name": "김민서",
            "product": "아름다운 우리나라의 미래바다",
            "birth": "2021.01.05",
            "phone": "010-6651-5220",
            "address": "서울 서대문구 수색로 10길 32-5 1층 가호",
            "school": "서대문어린이집",
            "email": "hjmymh@hanmail.net"
        },
        {
            "awards": "은상",
            "part": "초등부",
            "name": "장민제",
            "product": "지키고 싶은 우리나라",
            "birth": "2016.06.09",
            "phone": "010-2744-5654",
            "address": "부산시 남구 문현로 36-2 문현경동리인 2차 202-1603",
            "school": "용소초등학교",
            "email": "hyang7583@naver.com"
        },
        {
            "awards": "은상",
            "part": "초등부",
            "name": "최이안",
            "product": "지키자, 우리 문화유산!",
            "birth": "2016.01.13",
            "phone": "010-9968-6004",
            "address": "서울시 도봉구 해등로 195, 106-1101",
            "school": "창경초등학교 / 서울시 도봉구",
            "email": "day9289@naver.com"
        },
        {
            "awards": "은상",
            "part": "초등부",
            "name": "이주아",
            "product": "자랑스러운 대한민국",
            "birth": "2016.01.05",
            "phone": "010-9944-7527",
            "address": "파주시교하로50,210동2303호",
            "school": "산들초등학교/파주",
            "email": "eun8757@naver.com"
        },
        {
            "awards": "은상",
            "part": "초등부",
            "name": "루이스레이나",
            "product": "우리가 만드는 대한민국",
            "birth": "2017.06.30",
            "phone": "010-3032-6050",
            "address": "서울 성북구 길음로 9길 40 103동201호",
            "school": "서울 미아초등학교",
            "email": "pooh8565@naver.com"
        },
        {
            "awards": "은상",
            "part": "초등부",
            "name": "김수민",
            "product": "스마일! 대한민국",
            "birth": "2016.07.30",
            "phone": "010-2093-0562",
            "address": "서울시 서대문구 홍제동 261-5, 롯데빌라 502호",
            "school": "서울고은초등학교 / 서울",
            "email": "soho2421@nate.com"
        },
        {
            "awards": "은상",
            "part": "초등부",
            "name": "박서연",
            "product": "내가 지키는 대한민국, 내가 만드는 미래",
            "birth": "2017.07.22",
            "phone": "010-3199-2865",
            "address": "서울시 양재대로 1300 올림픽파크포레온 304동 702호",
            "school": "서울위례초 / 강동",
            "email": "bm2865@naver.com"
        },
        {
            "awards": "은상",
            "part": "초등부",
            "name": "백건",
            "product": "우리나라의 미래를 꿈꾸며",
            "birth": "2018.02.19",
            "phone": "010-2278-0768",
            "address": "서울시 은평구 은평로220 녹번e편한캐슬114동 209호",
            "school": "서울은평초등학교",
            "email": "aowjathsu83@naver.com"
        },
        {
            "awards": "은상",
            "part": "초등부",
            "name": "이윤서",
            "product": "대한민국의 미래; 남북통일",
            "birth": "2016.05.10",
            "phone": "010-3323-0600",
            "address": "울서서대문구세검정로1길35 풍림2차아파트103동909호",
            "school": "경기초등학교",
            "email": "haie402wwkd@hanmail.net"
        },
        {
            "awards": "은상",
            "part": "초등부",
            "name": "손서현",
            "product": "독도는 우리땅",
            "birth": "2016.10.27",
            "phone": "010-8546-5096",
            "address": "부산남구수영로325번길61롯데캐슬104동2003호",
            "school": "용소초등학교/부산",
            "email": "bookwalla@naver.com"
        },
        {
            "awards": "은상",
            "part": "초등부",
            "name": "윤정후",
            "product": "무궁한 미래, 하나된 대한민국",
            "birth": "2016.02.05",
            "phone": "010-6258-8188",
            "address": "서울시 마포구 상암동 월드컵파크 3단지 302동 204호",
            "school": "이대부초 / 서울 서대문구",
            "email": "joa06@naver.com"
        },
        {
            "awards": "은상",
            "part": "초등부",
            "name": "황준하",
            "product": "함께 만드는 대한민국 \"내가 지켜요.\"",
            "birth": "2014.11.10",
            "phone": "010-6773-0085",
            "address": "서울시 송파구 삼학사로9길 3. 호복빌라 201호",
            "school": "삼전초등학교/송파구",
            "email": "nani6215@gmail.com"
        },
        {
            "awards": "동상",
            "part": "유치부",
            "name": "정채윤",
            "product": "평화로운 대한민국",
            "birth": "2019.03.05",
            "phone": "010-6324-1333",
            "address": "경기 안양시 동안구 학의로 390 111-1603",
            "school": "꿈열매유치원. 안양시동안구",
            "email": "liiioliiio@naver.com"
        },
        {
            "awards": "동상",
            "part": "유치부",
            "name": "이선오",
            "product": "남북평화",
            "birth": "2019.07.08",
            "phone": "010-3512-8192",
            "address": "경기도수원시영통구인계로219 5동203호",
            "school": "리라유치원",
            "email": "kswjh@naver.com"
        },
        {
            "awards": "동상",
            "part": "유치부",
            "name": "서이수",
            "product": "매일매일-즐거워",
            "birth": "2019.10.23",
            "phone": "010-7302-1982",
            "address": "경기도 고양시 덕양구 세솔로73 2008-202",
            "school": "고양시 덕양구",
            "email": "donggam37@hanmail.net"
        },
        {
            "awards": "동상",
            "part": "초등부",
            "name": "전유주",
            "product": "나는 대한민국 국민이다.",
            "birth": "2016.02.11",
            "phone": "010-2987-3150",
            "address": "서울시 강서구 양천로 14길 118 방화3차우림필유아파트 101동503호",
            "school": "서울방화초등학교",
            "email": "hyojung3537@naver.com"
        },
        {
            "awards": "동상",
            "part": "초등부",
            "name": "김제인",
            "product": "내가 사랑하는 대한민국",
            "birth": "2018.01.27",
            "phone": "010-6618-5058",
            "address": "서울시 중랑구 동일로91길23 라온프라이빗 104동 503호",
            "school": "서울대학교사범대학부설초등학교",
            "email": "hyjy5058@naver.com"
        },
        {
            "awards": "동상",
            "part": "초등부",
            "name": "김하윤",
            "product": "하늘에 떠있는 경복궁.",
            "birth": "2013.02.02",
            "phone": "010-7122-0762",
            "address": "독서당로39길34 A동201호",
            "school": "옥정초등학교/성동구",
            "email": "ry5659@naver.com"
        },
        {
            "awards": "동상",
            "part": "초등부",
            "name": "노루비",
            "product": "빛나는 해와 나",
            "birth": "2017.12.26",
            "phone": "010-2835-9969",
            "address": "서울특별시 서대문구 북아현로1가길20 이편한세상신촌 108동 201호",
            "school": "이화여자대학교 부속 초등학교",
            "email": "heyookcs@gmail.com"
        },
        {
            "awards": "동상",
            "part": "초등부",
            "name": "유다은",
            "product": "행운 우리 대한민국",
            "birth": "2017.07.05",
            "phone": "010-3805-3458",
            "address": "서울 양천구 오목로5길 19 양천롯데캐슬 101-406호",
            "school": "강서초등학교/양천구",
            "email": "cherry799@naver.com"
        },
        {
            "awards": "동상",
            "part": "초등부",
            "name": "최하민",
            "product": "현명함과 용기",
            "birth": "2016.08.29",
            "phone": "010-2028-4961",
            "address": "서울시 영등포구 신풍로77 래미안에스티움 109동 101호",
            "school": "서울대방초등학교 서울",
            "email": "missmoon29@naver.com"
        },
        {
            "awards": "동상",
            "part": "초등부",
            "name": "김규령",
            "product": "대한민국의 미래는 전투가 아니라 따뜻함과 격려",
            "birth": "2017.06.13",
            "phone": "010-4284-5578",
            "address": "서울 성북구 종암로 24가길 53 sk1차아파트 101동 1504호",
            "school": "일신초등학교/서울",
            "email": "greenf4@naver.com"
        },
        {
            "awards": "동상",
            "part": "초등부",
            "name": "이시은",
            "product": "나라는 달라도 모두 한글을 써요",
            "birth": "2017.05.04",
            "phone": "010-9837-3370",
            "address": "동대문구 천호대로 16길 40 501호",
            "school": "서울용두초등학교/서울",
            "email": "urbomday@naver.com"
        },
        {
            "awards": "동상",
            "part": "초등부",
            "name": "김민지",
            "product": "우리나라에 행복",
            "birth": "2017.12.08",
            "phone": "010-6651-5220",
            "address": "서울시 서대문구 수색로 10길 32-5 1층 가호",
            "school": "서울북가좌초등학교/서대문구",
            "email": "hjmymh@hanmail.net"
        },
        {
            "awards": "동상",
            "part": "초등부",
            "name": "이승민",
            "product": "행복한 대한민국",
            "birth": "2016.03.04",
            "phone": "010-3285-3292",
            "address": "서울시 용산구 후암로4길 61-2 용산베스트빌 402호",
            "school": "후암초등학교 / 서울",
            "email": "roshiel@naver.com"
        },
        {
            "awards": "동상",
            "part": "초등부",
            "name": "이소원",
            "product": "우리는 하나",
            "birth": "2017.02.14",
            "phone": "010-7233-4682",
            "address": "서울시 중랑구 용마산로 669 102동 903호",
            "school": "서울 면목초등학교 / 서울 중랑구",
            "email": "mihee130@hanmail.net"
        },
        {
            "awards": "동상",
            "part": "초등부",
            "name": "고지윤",
            "product": "우리가 지켜야 할 사계절의 광화문",
            "birth": "2016.07.19",
            "phone": "010-6473-8883",
            "address": "서울시강서구 공항대로583 염창이편한세상 102-1902",
            "school": "염창초등학교/서웅",
            "email": "soohdlwl@naver.com"
        },
        {
            "awards": "동상",
            "part": "초등부",
            "name": "한서윤",
            "product": "아이들이 행복한 미래",
            "birth": "2016.10.19",
            "phone": "010-3267-8721",
            "address": "서울 강서구 양천로67길 77 103-611",
            "school": "염경초/서울",
            "email": "smile821999@naver.com"
        },
        {
            "awards": "동상",
            "part": "초등부",
            "name": "최보배",
            "product": "훈민정음 만든 세종대왕",
            "birth": "2016.08.12",
            "phone": "010-7367-8511",
            "address": "서울 동대문구 장한로 26길37 르메이에르장안타운5차 503호",
            "school": "서울안평초등학교 / 서울동대문",
            "email": "dhs511@nate.com"
        },
        {
            "awards": "동상",
            "part": "초등부",
            "name": "최하은",
            "product": "우리의 위대한 한글.",
            "birth": "2016.08.29",
            "phone": "010-2028-4961",
            "address": "서울시 영등포구 신풍로77 래미안에스티움 109동101호",
            "school": "서울대방초등학교 서울",
            "email": "missmoon29@naver.com"
        },
        {
            "awards": "동상",
            "part": "초등부",
            "name": "이아영",
            "product": "나라를 지키는 경찰아영!",
            "birth": "2018.06.05",
            "phone": "010-9944-7527",
            "address": "파주시 교하로50, 210동2303호",
            "school": "산들초등학교/파주",
            "email": "eun8757@naver.com"
        },
        {
            "awards": "동상",
            "part": "초등부",
            "name": "윤서우",
            "product": "바다의 평화",
            "birth": "2017.09.04",
            "phone": "010-6338-9485",
            "address": "서울시 도봉구 마들로 684-19 서원아파트 106동 904호",
            "school": "창도초등학교 / 서울",
            "email": "kingkkobugi@gmail.com"
        },
        {
            "awards": "동상",
            "part": "초등부",
            "name": "이채원",
            "product": "안전한 대한민국",
            "birth": "2018.08.01",
            "phone": "010-3742-0841",
            "address": "경기도 용인시 기흥구 연원로 42번길2 124동 203호",
            "school": "마북초등학교/용인 기흥구 마북동",
            "email": "jojiyoung86@naver.com"
        },
        {
            "awards": "",
            "part": "초등부",
            "name": "유호준",
            "product": "미래의 나라사랑 가득한 광화문",
            "birth": "2018.01.29",
            "phone": "010-8714-7175",
            "address": "서울 성동구 난계로 84 풍림아이원 106동 1601호",
            "school": "서울 사범대학 부설 초등학교 / 서울 종로구",
            "email": "lilliansy@naver.com"
        },
        {
            "awards": "동상",
            "part": "초등부",
            "name": "이호연",
            "product": "아름다운 우리나라 ",
            "birth": "2017.02.23",
            "phone": "010-6512-1007",
            "address": "서울특별시 종로구 통일로 230, 101동 702호",
            "school": "서울독립문초등학교 / 서울종로구",
            "email": "200579@naver.com"
        },
        {
            "awards": "동상",
            "part": "초등부",
            "name": "이서호",
            "product": "우리의 힘, 대한민국의 미래",
            "birth": "2018.09.03",
            "phone": "010-8916-7686",
            "address": "서울시 종로구 창덕궁 3길 3 원서빌라트 401호",
            "school": "서울대학교사범대학부설초등학교/ 종로구",
            "email": "naya177@naver.com"
        },
        {
            "awards": "동상",
            "part": "초등부",
            "name": "김주원",
            "product": "광복 100주년을 축하합니다. ",
            "birth": "2017.09.07",
            "phone": "010-5898-0929",
            "address": "서울시 동대문구 답십리로141 래미안미드카운티 102동 2005호",
            "school": "전농초등학교/서울",
            "email": "khjcom09@naver.com"
        },
        {
            "awards": "동상",
            "part": "초등부",
            "name": "김이솔",
            "product": "미래로 향하는 대한민국의 발걸음",
            "birth": "2016.04.04",
            "phone": "010-2519-4061",
            "address": "서울시 동대문구 제기로131 101동1604호",
            "school": "서울홍릉초등학교 /서울",
            "email": "j778mc@hanmail.net"
        },
        {
            "awards": "동상",
            "part": "초등부",
            "name": "정유준",
            "product": "아름답고 편리한 미래",
            "birth": "2016.02.29",
            "phone": "010-9129-0248",
            "address": "경기도 광명시 오리로 835 센트럴푸르지오 106동 1606호",
            "school": "광덕초등학교/경기도광명",
            "email": "solip7771@naver.com"
        },
        {
            "awards": "동상",
            "part": "초등부",
            "name": "심지우",
            "product": "아이들의 교육과 자유",
            "birth": "2016.02.23",
            "phone": "010-5899-3232",
            "address": "서울시 노원구 한글비석로1길 81-12, 하계동 동해빌라트 103호",
            "school": "용동초등학교",
            "email": "dbsoddl0422@naver.com"
        },
        {
            "awards": "동상",
            "part": "초등부",
            "name": "장루이",
            "product": "과거에서 밀어주는 미래",
            "birth": "2013.03.28",
            "phone": "010-7140-3877",
            "address": "서울시 용산구 이태원동 260-216, 301호",
            "school": "용암초등학교",
            "email": "withlouis@naver.com"
        },
        {
            "awards": "동상",
            "part": "초등부",
            "name": "설유진",
            "product": "나의 소중한 대한민국",
            "birth": "2017.04.06",
            "phone": "010-3759-4963",
            "address": "서울시 구로구 남부순환로 775 개봉푸르지오 104동 202호",
            "school": "서울세곡초/서울",
            "email": "tlove84@naver.com"
        },
        {
            "awards": "최우수상",
            "part": "유치부",
            "name": "이서원",
            "product": "태극기와 무궁화",
            "birth": "2021.03.04",
            "phone": "010-7233-4682",
            "address": "서울시 중랑구 용마산로 669 102동 903호",
            "school": "구립 면일 어린이집 / 서울 중랑구",
            "email": "mihee130@hanmail.net"
        },
        {
            "awards": "최우수상",
            "part": "유치부",
            "name": "전유림",
            "product": "나는 대한민국이 좋아요",
            "birth": "2019.01.29",
            "phone": "010-2987-3150",
            "address": "서울시 강서구 양천로14길 118 방화3차 우림필유아파트 101동 503호",
            "school": "한나유치원/서울",
            "email": "hyojung3537@naver.com"
        },
        {
            "awards": "최우수상",
            "part": "초등부",
            "name": "송주안",
            "product": "자랑스러운 우리 한글",
            "birth": "2017.07.01",
            "phone": "010-9122-7740",
            "address": "고산후로249 검단힐스테이트4213동104호",
            "school": "원당초등학교",
            "email": "rhode00@naver.com"
        },
        {
            "awards": "최우수상",
            "part": "초등부",
            "name": "이예서",
            "product": "내가 여왕이 된 대한민국",
            "birth": "2017.09.16",
            "phone": "010-5552-4449",
            "address": "서울노원구노원로22길53 중계주공1002-808",
            "school": "서울을지초등학교/서울",
            "email": "owon21004@naver.com"
        },
        {
            "awards": "최우수상",
            "part": "초등부",
            "name": "최지안",
            "product": "행복한 대한민국",
            "birth": "2018.07.05",
            "phone": "010-2442-2249",
            "address": "경기도 김포시 풍무로 96번길 42. 507동 602호",
            "school": "풍무초등학교. 김포",
            "email": "Yhchoi@gainshipping.com"
        },
        {
            "awards": "최우수상",
            "part": "초등부",
            "name": "공나은",
            "product": "대한민국을 지키자!",
            "birth": "2018.07.23",
            "phone": "010-8937-1225",
            "address": "서울시 강서구 공항대로 583 101동1407호(염창동 이편한세상아파트)",
            "school": "염창초등학교/서울강서구",
            "email": "lovehim@daum.net"
        },
        {
            "awards": "최우수상",
            "part": "초등부",
            "name": "이호종",
            "product": "과거의 독립, 미래의 우리",
            "birth": "2015.02.04",
            "phone": "010-6512-1007",
            "address": "서울특별시 종로구 통일로 230, 101동 702호",
            "school": "서울독립문초등학교",
            "email": "200579@naver.com"
        },
        {
            "awards": "최우수상",
            "part": "초등부",
            "name": "김민정",
            "product": "환경을 지키자!",
            "birth": "2013.05.20",
            "phone": "010-8909-2462",
            "address": "서울시 동대문구 사가정로 148 111동 1701호",
            "school": "서울전동초등학교",
            "email": "pumagod@naver.com"
        }
    ]


    return (<>
            <div style={{
                ...style,
                height: isMobile ? 125 : (isDesktop ? 200 : 190),
                display: 'flex',
                alignItems: 'center',
                marginTop: isDesktop ? 80 : 70
            }}>
                <div>
                    <img src="/charactor2.svg" width={isMobile ? 70 : 100}
                         style={{paddingBottom: isMobile ? 0 : 15, paddingLeft: isMobile ? 20 : 30}} alt="Character"/>
                </div>
                <div style={{padding: isMobile ? '100px 20px' : '130px 60px'}}>

                    <div style={{fontSize: isMobile ? 35 : (isDesktop ? 50 : 45), fontWeight: 800}}>수상작발표</div>
                    <div style={{
                        paddingTop: isMobile ? 10 : 35,
                        fontSize: isMobile ? 12 : (isDesktop ? 20 : 17),
                        lineHeight: 1.5
                    }}>
                        {isMobile ? <> 2025. 7. 12 SAT <br/> 세종문화회관 1층 라운지 일대
                            세종충무공 이야기공간 일대 (지하 1층)</> : ' 세종문화회관 1층 라운지 일대\n' +
                            '세종충무공 이야기공간 일대 (지하 1층)'}
                    </div>
                </div>
            </div>

            {!result ? <>
                    <div style={{
                        textAlign: 'center',
                        color: 'black',
                        backgroundColor: 'white',
                        padding: isMobile ? '30px 0px 35px 0px' : '60px 60px 35px 60px'
                    }}>

                        <div style={{fontWeight: 'bold', lineHeight: 1.5}}>
                            <div style={{fontSize: isMobile ? 16 : 35}}>2025 서울국제어린이청소년아트페어 미술공모전</div>
                            <div style={{fontSize: isMobile ? 12 : ''}}>SEOUL INTERNATIONAL KIDS ART FAIR</div>
                        </div>

                        <div
                            style={{
                                margin: '50px auto 0px auto',
                                display: 'grid',
                                paddingTop: 0,

                                gridTemplateColumns: isMobile ? '40px 1fr' : '80px 1fr',  // 두 번째 칸을 1fr로 바꿔도 좋습니다
                                width: isMobile ? '90%' : 800,
                                justifyContent: "center",
                                alignItems: 'center',
                                gap: isMobile ? 10 : 20,

                            }}
                        >
                            <div style={{fontSize: isMobile ? 13 : 18, fontWeight: 700}}>이름</div>
                            <div>
                                <Input
                                    value={name}
                                    onChange={e => {
                                        setName(e.target.value)
                                    }}
                                    size={isMobile ? 'middle' : 'large'}
                                    placeHolder={'이름을 입력해주세요'}
                                    style={{flex: 1, boxSizing: 'border-box', fontSize: isMobile ? 13 : 18}}
                                />
                            </div>

                            <div style={{fontSize: isMobile ? 13 : 18, fontWeight: 700}}>연락처</div>
                            <div
                                style={{
                                    display: 'flex',
                                    width: '100%',      // 부모 칸 전체를 100%로 차지
                                    gap: '8px'           // 입력칸 사이 여백 (원하지 않으면 제거)
                                }}
                            >
                                <Input
                                    value={'010'}
                                    disabled={true}
                                    type={'number'}
                                    onChange={e => {
                                        console.log(e, ':::')
                                        setNumb1(e)
                                    }}
                                    size={isMobile ? 'middle' : 'large'}
                                    placeHolder={'010'}
                                    style={{flex: 1, boxSizing: 'border-box', fontSize: isMobile ? 13 : 18}}
                                />
                                <Input
                                    value={numb2}
                                    onChange={e => {
                                        setNumb2(e.target.value)
                                    }}
                                    size={isMobile ? 'middle' : 'large'}
                                    style={{flex: 1, boxSizing: 'border-box', fontSize: isMobile ? 13 : 18}}
                                />
                                <Input
                                    value={numb3}
                                    onChange={e => {
                                        setNumb3(e.target.value)
                                    }}
                                    size={isMobile ? 'middle' : 'large'}
                                    style={{flex: 1, boxSizing: 'border-box', fontSize: isMobile ? 13 : 18}}
                                />
                            </div>
                        </div>

                    </div>

                    <div style={{display: 'flex', justifyContent: 'center', padding: 30}}>
                        <Button size={'large'} style={{fontSize: 18, fontWeight: 700, width: 150}} type={'primary'}
                                onClick={() => {
                                    console.log(name, 'name')
                                    console.log(numb1, 'numb1')
                                    console.log(numb2, 'numb2ßå')
                                    console.log(numb3, 'numb3')

                                    const filterList = dataList.filter(v => {
                                        if (v.name === name && (v.phone === '010-' + numb2 + '-' + numb3)) {
                                            return v
                                        }
                                    })
                                    setResult(filterList)
                                }}>수상확인</Button>
                    </div>
                </>

                :
                <>
                    {result.length === 0 ?

                        <div style={{textAlign: 'center'}}>
                            <div style={{fontSize: 22, fontWeight: 800, paddingTop: 40}}>🎨 참여에 감사드립니다</div>
                            <div style={{paddingTop: 50}}>수상은 되지 않았지만</div>
                            <div style={{paddingTop: 10}}>여러분의 그림 하나하나에 담긴</div>
                            <div style={{paddingTop: 10}}>마음과 노력은 정말 소중했습니다.</div>
                            <div style={{paddingTop: 10, paddingBottom: 250}}>함께해 주셔서 감사합니다! 🇰🇷</div>


                        </div>
                        :
                        <div style={{textAlign: 'center'}}>

                            <div style={{fontSize: 22, fontWeight: 800, paddingTop: 30}}> 축하합니다!</div>
                            <div style={{paddingTop: 10}}> 참가자분께서는 『광복 80주년 나라사랑 어린이 아트 페스티벌』</div>
                            <div style={{paddingTop: 10}}> {result[0]?.awards} 수상자로 선정되셨습니다.</div>
                            <div style={{paddingTop: 10}}> 예술적 감성과 창의력을 담은 훌륭한 작품을 통해</div>
                            <div style={{paddingTop: 10}}> 우리 모두에게 깊은 감동을 선사해 주었습니다.</div>
                            <div style={{paddingTop: 10, paddingBottom : 100}}> 진심으로 축하드리며, 앞으로의 멋진 성장과 활약을 응원합니다!</div>

                        </div>
                    }

                </>}
            <Footers/>
        </>
    )
        ;
}