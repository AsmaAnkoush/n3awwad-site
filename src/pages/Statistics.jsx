import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const stats = [
    {
        number: "1,800+",
        label: "طالب وطالبة",
        desc: "انقطعوا عن التعليم بشكل مباشر في مخيم نور شمس.",
    },
    {
        number: "30",
        label: "يومًا دراسيًا متتاليًا",
        desc: "ضاعَت من عمر الطلبة بلا دراسة.",
    },
    {
        number: "مدرستان",
        label: "أُغلقتا بالكامل",
        desc: 'وتحوّل التعليم فيهما إلى "عن بُعد" غير فعّال.',
    },
    {
        number: "800",
        label: "طالب نازح",
        desc: "غادروا المخيم مع عائلاتهم.",
    },
    {
        number: "٪80",
        label: "نزوح السكان",
        desc: "10,800 نازح من أصل 13,500.",
    },
    {
        number: "٪27 فقط",
        label: "نِسبة الالتحاق",
        desc: "من الطلاب تمكّنوا من متابعة برنامج الأونروا للتعليم عن بُعد.",
    },
];

export default function Statistics() {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <div dir="rtl" className="bg-[#f5f3ee] min-h-screen py-20 px-4 text-gray-800">
            <h2
                className="text-4xl font-extrabold text-center mb-3 text-[#c02c39]"
                data-aos="fade-down"
            >
                الأرقام تتحدث…
            </h2>
            <p
                className="text-center text-base md:text-lg text-gray-700 mb-12"
                data-aos="fade-down"
                data-aos-delay="100"
            >
                عن التعليم في مخيم نور شمس
            </p>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {stats.map((stat, i) => (
                    <div
                        key={i}
                        className="bg-white shadow-md rounded-xl p-6 text-center space-y-3 hover:shadow-lg transition"
                        data-aos="fade-up"
                        data-aos-delay={i * 100}
                    >
                        <div className="text-4xl font-extrabold text-[#c02c39] tracking-tight">
                            {stat.number}
                        </div>
                        <div className="text-lg font-semibold">{stat.label}</div>
                        <p className="text-sm text-gray-600 leading-relaxed">{stat.desc}</p>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="200">
                <p className="text-lg font-medium mb-6 max-w-2xl mx-auto leading-relaxed">
                    هذه الأرقام تكشف حجم الأزمة التعليمية وتؤكد حاجتنا لدعم الأطفال لاستعادة حقهم في التعليم الآمن والعادل.
                </p>
                <a
                    href="/join"
                    className="inline-block bg-[#c02c39] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition"
                >
                    ادعموا حملة نعوّض اللي فات
                </a>
            </div>
        </div>
    );
}
