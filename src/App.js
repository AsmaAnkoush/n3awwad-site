import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import MaterialsPage from './pages/SubjectList';
import AboutPage from './pages/About';
import EventsPage from "./pages/EventsPage"; // أو حسب مكان الملف
import JoinPage from './pages/JoinPage'; // حسب مكان الملف
import ContactPage from "./pages/ContactPage";
import FromReality from "./pages/FromReality";


function App() {
    return (
        <BrowserRouter>
            <main className="bg-[#e0e7ff] min-h-screen text-gray-900">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/subjects" element={<MaterialsPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/events" element={<EventsPage />} />
                    <Route path="/join" element={<JoinPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/reality" element={<FromReality />} />

                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
