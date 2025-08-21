import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import Footer from "../components/Footer";

export default function Hero() {
    return (
        <div dir="rtl" className="flex flex-col min-h-screen bg-[#f6f2e9]">
            {/* Hero Section */}
            <header className="relative h-screen w-full overflow-hidden">
                {/* صورة الخلفية الثابتة */}
                <img src="/slide1.jpeg" alt="background" className="absolute inset-0 object-cover w-full h-full" />

                {/* طبقة تغطية بلون الخلفية البيج مع شفافية */}
                <div className="absolute inset-0 bg-[#f5f3ee]/75"></div>

                {/* محتوى فوق الخلفية */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-[#1e1e1e] mb-4">
                        نعوّض اللي فات، لأن التعليم حق لا يُؤجّل!
                    </h1>
                    <p className="text-lg text-[#333] max-w-2xl mb-6 leading-loose">
                        أطفالنا في مخيم نور شمس حُرموا من التعليم بسبب العدوان، وجايين نسترجع حقهم سوا — بالدعم، بالصوت، وبالفعل.
                    </p>
                    <a
                        href="#join"
                        className="bg-[#c02c39] hover:bg-[#a92432] text-white px-6 py-2 rounded-full font-bold shadow-md transition"
                    >
                        ساهم في تعويض الفاقد التعليمي لأطفال مخيم نور شمس
                    </a>
                </div>
            </header>

            {/* قسم الدعوة لمعرض المنطار */}
            <section className="bg-white py-12 px-6 flex flex-col items-center text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#c02c39] mb-6">
                    دعوة لمعرض المنطار – جامعة بيرزيت
                </h2>

                {/* صورة الدعوة */}
                <img
                    src="/invite-exhibition.jpg" // ← غيّر الاسم حسب صورة الدعوة عندك
                    alt="دعوة معرض المنطار"
                    className="max-w-md w-full rounded-lg shadow-lg border"
                />
            </section>

            <Footer />
        </div>
    );
}
