import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const stats = [
    {
        number: "1800+",
        label: "طالب وطالبة",
        desc: "انقطعوا عن التعليم في مخيم نور شمس.",
    },
    {
        number: "30",
        label: "يومًا متتاليًا",
        desc: "توقف فيها الدوام المدرسي كليًا.",
    },
    {
        number: "21 يناير",
        label: "بداية الانقطاع",
        desc: "تاريخ بداية الانقطاع الكامل عن المدارس.",
    },


];

export default function Statistics() {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <div dir="rtl" className="bg-[#f5f3ee] min-h-screen py-20 px-4 text-gray-800">
            <h2 className="text-4xl font-extrabold text-center mb-12 text-[#c02c39]" data-aos="fade-down">
                الأرقام تتحدث
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-xl p-6 text-center space-y-3 hover:shadow-lg transition"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        <div className="text-4xl font-bold text-[#c02c39]">{stat.number}</div>
                        <div className="text-xl font-semibold">{stat.label}</div>
                        <p className="text-sm text-gray-600 leading-relaxed">{stat.desc}</p>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center" data-aos="fade-up">
                <p className="text-lg font-medium mb-6 max-w-2xl mx-auto leading-relaxed">
                    تشير هذه الإحصائيات إلى حجم الأزمة التعليمية في المخيم، وتؤكد حاجتنا لدعم الأطفال لاستعادة حقهم الأساسي في التعليم.
                </p>
                <a
                    href="/join"
                    className="bg-[#c02c39] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition"
                >
                    ادعموا حملة نعوض اللي فات
                </a>
            </div>
        </div>
    );
}
