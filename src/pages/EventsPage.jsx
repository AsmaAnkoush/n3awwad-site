import React, { useState } from "react";
import Footer from "../components/Footer";

// سلايدر البوست الأول
const eventImages = [
    { src: "/p1s1.png", alt: "البوست 1" },
    { src: "/p1s2.png", alt: "البوست 2" },
    { src: "/p1s3.png", alt: "البوست 3" },
    { src: "/p1s4.png", alt: "البوست 4" },
    { src: "/p1s5.png", alt: "البوست 5" },
    { src: "/p1s6.png", alt: "البوست 6" },
];

// صور البوست الثاني
const secondPostImages = [
    { src: "/p2s1.png", alt: "بوست ٢ - صورة 1" },
    { src: "/p2s2.png", alt: "بوست ٢ - صورة 2" },
    { src: "/p2s3.png", alt: "بوست ٢ - صورة 3" },
    { src: "/p2s4.png", alt: "بوست ٢ - صورة 4" },
    { src: "/p2s5.png", alt: "بوست ٢ - صورة 5" },
    { src: "/p2s6.png", alt: "بوست ٢ - صورة 6" },
    { src: "/p2s7.png", alt: "بوست ٢ - صورة 7" },
];

// صور البوست الثالث (المواثيق الدولية…)
const thirdPostImages = [
    { src: "/p3s1.png", alt: "بوست ٣ - صورة 1" },
    { src: "/p3s2.png", alt: "بوست ٣ - صورة 2" },
    { src: "/p3s3_.png", alt: "بوست ٣ - صورة 3" }, // حسب اسم الملف عندك
    { src: "/p3s4.png", alt: "بوست ٣ - صورة 4" },
    { src: "/p3s5.png", alt: "بوست ٣ - صورة 5" },
];

export default function EventsPage() {
    const [currentIndex, setCurrentIndex] = useState(0);     // سلايدر 1
    const [secondIndex, setSecondIndex] = useState(0);       // سلايدر 2
    const [thirdIndex, setThirdIndex] = useState(0);         // سلايدر 3

    // تحكم سلايدر البوست الأول
    const goNext = () => setCurrentIndex((p) => (p + 1) % eventImages.length);
    const goPrev = () =>
        setCurrentIndex((p) => (p === 0 ? eventImages.length - 1 : p - 1));

    // تحكم سلايدر البوست الثاني
    const goNextSecond = () =>
        setSecondIndex((p) => (p + 1) % secondPostImages.length);
    const goPrevSecond = () =>
        setSecondIndex((p) =>
            p === 0 ? secondPostImages.length - 1 : p - 1
        );

    // تحكم سلايدر البوست الثالث
    const goNextThird = () =>
        setThirdIndex((p) => (p + 1) % thirdPostImages.length);
    const goPrevThird = () =>
        setThirdIndex((p) => (p === 0 ? thirdPostImages.length - 1 : p - 1));

    return (
        <div
            dir="rtl"
            className="bg-[#f5f3ee] text-[#1c1c1c] min-h-screen pt-28 px-6"
            style={{ fontFamily: "Tahoma, sans-serif" }}
        >
            <div className="max-w-4xl mx-auto">

                {/* عنوان الصفحة */}
                <h1 className="text-3xl font-bold text-center mb-6 text-[#c02c39]">
                    فعاليات حملة نعوّض اللي فات
                </h1>

                {/* مقدمة الصفحة */}
                <p className="text-base text-center mb-10 leading-loose max-w-2xl mx-auto">
                    في هذا القسم، نعرض تسلسل الفعاليات والمنشورات المرتبطة بالحملة، ضمن جهد
                    توثيقي يهدف إلى إبراز الأثر والرسالة التي تقف وراء "نعوّض اللي فات".
                </p>

                {/* الفعالية 1 */}
                <section className="bg-white p-6 shadow rounded-md border-r-4 border-[#c02c39] mb-10">
                    <h2 className="text-xl font-bold mb-2 text-[#c02c39]">
                        انطلاق الحملة على المنصات الرقمية
                    </h2>
                    <p className="text-[#2e2e2e] text-base leading-relaxed">
                        انطلقت حملة "نعوّض اللي فات" رسميًا بتاريخ 17 تموز 2025...
                    </p>
                </section>

                {/* سلايدر البوست الأول */}
                <div className="relative w-full max-w-2xl mx-auto mt-4 mb-14">
                    <button
                        onClick={goPrev}
                        className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl text-[#c02c39] hover:text-[#a92432] px-3 z-10"
                        aria-label="السابق"
                    >
                        ❮
                    </button>

                    <img
                        src={eventImages[currentIndex].src}
                        alt={eventImages[currentIndex].alt}
                        className="rounded-md border border-[#ccc] object-contain w-full max-h-[500px] transition duration-300"
                    />

                    <button
                        onClick={goNext}
                        className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl text-[#c02c39] hover:text-[#a92432] px-3 z-10"
                        aria-label="التالي"
                    >
                        ❯
                    </button>
                </div>

                <p className="text-center text-sm text-gray-600 mb-10">
                    الصورة {currentIndex + 1} من {eventImages.length}
                </p>

                {/* الفعالية 2 */}
                <section className="bg-white p-6 shadow rounded-md border-r-4 border-[#c02c39] mb-6">
                    <h2 className="text-xl font-bold mb-3 text-[#c02c39]">توثيق خلفية الحملة</h2>
                    <p className="text-[#2e2e2e] text-base leading-relaxed mb-4">
                        في 22 يوليو، نُشر البوست الثاني الذي يسلّط الضوء على فترة الانقطاع الطويلة عن الدراسة في مخيم نور شمس، وما خلّفه ذلك من آثار على العملية التعليمية.
                    </p>
                    <p className="text-[#2e2e2e] text-base leading-relaxed mb-4">
                        أظهر البوست أن مئات الطلبة حُرموا من التعليم المنتظم على مدار أشهر متواصلة، حيث تأثر أكثر من 1800 طفل وطفلة بشكل مباشر نتيجة تعطّل المدارس وغياب البيئة التعليمية الآمنة.
                    </p>

                </section>

                {/* سلايدر البوست الثاني */}
                <div className="relative w-full max-w-2xl mx-auto mt-4 mb-14">
                    <button
                        onClick={goPrevSecond}
                        className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl text-[#c02c39] hover:text-[#a92432] px-3 z-10"
                        aria-label="السابق"
                    >
                        ❮
                    </button>

                    <img
                        src={secondPostImages[secondIndex].src}
                        alt={secondPostImages[secondIndex].alt}
                        className="rounded-md border border-[#ccc] object-contain w-full max-h-[500px] transition duration-300"
                    />

                    <button
                        onClick={goNextSecond}
                        className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl text-[#c02c39] hover:text-[#a92432] px-3 z-10"
                        aria-label="التالي"
                    >
                        ❯
                    </button>
                </div>

                <p className="text-center text-sm text-gray-600 mb-10">
                    الصورة {secondIndex + 1} من {secondPostImages.length}
                </p>

                {/* الفعالية 3 */}
                <section className="bg-white p-6 shadow rounded-md border-r-4 border-[#c02c39] mb-6">
                    <h2 className="text-xl font-bold mb-3 text-[#c02c39]">
                        ماذا تقول المواثيق الدولية عن الحق في التعليم؟
                    </h2>
                    <p className="text-[#2e2e2e] text-base leading-relaxed mb-4">
                        نشرنا بوست توعوي يبيّن مكانة الحق في التعليم ضمن المواثيق والاتفاقيات
                        الدولية، ويسلّط الضوء على أبرز الخروقات في مخيم نور شمس وتأثيرها على
                        الطلبة والعملية التعليمية.
                    </p>
                </section>

                {/* سلايدر البوست الثالث */}
                <div className="relative w-full max-w-2xl mx-auto mt-4 mb-14">
                    <button
                        onClick={goPrevThird}
                        className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl text-[#c02c39] hover:text-[#a92432] px-3 z-10"
                        aria-label="السابق"
                    >
                        ❮
                    </button>

                    <img
                        src={thirdPostImages[thirdIndex].src}
                        alt={thirdPostImages[thirdIndex].alt}
                        className="rounded-md border border-[#ccc] object-contain w-full max-h-[500px] transition duration-300"
                    />

                    <button
                        onClick={goNextThird}
                        className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl text-[#c02c39] hover:text-[#a92432] px-3 z-10"
                        aria-label="التالي"
                    >
                        ❯
                    </button>
                </div>

                <p className="text-center text-sm text-gray-600 mb-16">
                    الصورة {thirdIndex + 1} من {thirdPostImages.length}
                </p>
            </div>

            <Footer />
        </div>
    );
}
