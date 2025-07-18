import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import Footer from "../components/Footer"; // أو "./components/Footer" حسب مكان الملف

export default function Hero() {
    return (
        <div dir="rtl" className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <header className="relative h-screen w-full overflow-hidden">
                {/* صورة الخلفية الثابتة */}
                <img src="/slide1.jpeg" alt="background" className="absolute inset-0 object-cover w-full h-full" />
                {/* تخفيف الطبقة البيضاء فوق الخلفية */}
                <div className="absolute inset-0 bg-white/70"></div>

                {/* محتوى فوق الصورة */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
                        نعوّض اللي فات، لأن التعليم حق لا يُؤجّل!
                    </h1>
                    <p className="text-lg text-gray-700 max-w-2xl mb-6">
                        أطفالنا في مخيم نور شمس حُرموا من التعليم بسبب العدوان، وجايين نسترجع حقهم سوا — بالدعم، بالصوت، وبالفعل.
                    </p>
                    <a href="#join" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-bold shadow-md transition">
                        🚀  ساهم في تعويض الفاقد التعليمي لأطفال مخيم نور شمس
                    </a>
                </div>
            </header>
            <Footer />


        </div>
    );
}
