import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import MaterialsPage from './pages/SubjectList';
import AboutPage from './pages/About';
import EventsPage from "./pages/EventsPage"; // أو حسب مكان الملف
import JoinPage from './pages/JoinPage'; // حسب مكان الملف
import ContactPage from "./pages/ContactPage";
import FromReality from "./pages/FromReality";
import VoicesPage from './pages/VoicesPage';
import LegalPage from './pages/LegalPage';


import Statistics from "./pages/Statistics";

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
                    <Route path="/statistics" element={<Statistics />} />
                    <Route path="/voices" element={<VoicesPage />} />
                    <Route path="/legal" element={<LegalPage />} />

                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
