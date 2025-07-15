import Header from "./components/Header";
import Main from "./page/Main";
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Introduce from "./page/Introduce";
import Schedule from "./page/Schedule";
import Maps from "./page/Maps";
import Awards from "./page/Awards";
import Photo from "./page/Guidelines";
import Review from "./page/Review";
import Qna from "./page/Qna";
import Gallery from "./page/Gallery";
import Exhibition from "./page/Exhibition";
import Board from "./page/Board";
import BroadCast from "./page/BroadCast";
import Notice from "./page/Notice";
import AwardsDetail from "./page/AwardsDetail";

export default function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                {/* 메인 페이지 */}
                <Route path="/" element={<Main />} />

                {/* 예시: 추가 페이지 */}
                <Route path="/introduce/program" element={<Introduce />} />
                <Route path="/introduce/schedule" element={<Schedule />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/map" element={<Maps />} />
                <Route path="/awards" element={<Awards />} />
                <Route path="/awards/:id" element={<AwardsDetail />} />
                <Route path="/exhibition" element={<Exhibition />} />
                <Route path="/guidelines" element={<Photo />} />
                <Route path="/review" element={<Review />} />
                <Route path="/qna" element={<Qna />} />
                <Route path="/broadcast" element={<BroadCast />} />
                <Route path="/board/:id" element={<Board />} />
                <Route path="/notice" element={<Notice />} />

                {/* 정의되지 않은 경로일 때 */}
                {/*<Route path="*" element={<NotFound />} />*/}
            </Routes>
        </BrowserRouter>
    );
}