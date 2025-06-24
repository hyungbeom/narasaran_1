import Header from "./components/Header";
import Main from "./page/Main";
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Introduce from "./page/Introduce";

export default function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                {/* 메인 페이지 */}
                <Route path="/" element={<Main />} />

                {/* 예시: 추가 페이지 */}
                <Route path="/introduce" element={<Introduce />} />

                {/* 정의되지 않은 경로일 때 */}
                {/*<Route path="*" element={<NotFound />} />*/}
            </Routes>
        </BrowserRouter>
    );
}