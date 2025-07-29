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
    { src: "/p2s1.png", alt: "بوست 2 - صورة 1" },
    { src: "/p2s2.png", alt: "بوست 2 - صورة 2" },
    { src: "/p2s3.png", alt: "بوست 2 - صورة 3" },
    { src: "/p2s4.png", alt: "بوست 2 - صورة 4" },
    { src: "/p2s5.png", alt: "بوست 2 - صورة 5" },
    { src: "/p2s6.png", alt: "بوست 2 - صورة 6" },
    { src: "/p2s7.png", alt: "بوست 2 - صورة 7" },
];

export default function EventsPage() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goNext = () => {
        setCurrentIndex((prev) => (prev + 1) % eventImages.length);
    };

    const goPrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? eventImages.length - 1 : prev - 1
        );
    };

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
                    في هذا القسم، نعرض تسلسل الفعاليات والمنشورات المرتبطة بالحملة، ضمن جهد توثيقي يهدف إلى إبراز الأثر والرسالة التي تقف وراء "نعوّض اللي فات".
                </p>

                {/* الفعالية 1 */}
                <section className="bg-white p-6 shadow rounded-md border-r-4 border-[#c02c39] mb-10">
                    <h2 className="text-xl font-bold mb-2 text-[#c02c39]">
                        انطلاق الحملة على المنصات الرقمية
                    </h2>
                    <p className="text-[#2e2e2e] text-base leading-relaxed">
                        انطلقت حملة "نعوّض اللي فات" رسميًا بتاريخ 17 تموز 2025 من خلال نشر أول بوست تعريفي يوضح أهداف الحملة ويدعو المجتمع لدعم حق الأطفال في التعليم الآمن، خاصة في ظل التحديات الناتجة عن العدوان المستمر على مخيم نور شمس.
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

                {/* الفعالية 2 - البوست الثاني */}
                <section className="bg-white p-6 shadow rounded-md border-r-4 border-[#c02c39] mb-6">
                    <h2 className="text-xl font-bold mb-3 text-[#c02c39]">
                        توثيق خلفية الحملة
                    </h2>
                    <p className="text-[#2e2e2e] text-base leading-relaxed mb-4">
                        في 21 يناير، نُشر البوست الثاني الذي يسلّط الضوء على الظروف التي أدت إلى انطلاق الحملة، ومنها توقف التعليم في مخيم نور شمس بسبب القصف والانتهاكات المستمرة، وانعدام البيئة الآمنة للطلبة.
                    </p>
                    <p className="text-[#2e2e2e] text-base leading-relaxed mb-4">
                        يشرح البوست كيف أن العملية التعليمية تعرقلت منذ أشهر، مع فقدان المدارس لقدرتها التشغيلية، وتحوّل التعليم إلى نظام غير منتظم، مما أثر على أكثر من 1800 طالب وطالبة.
                    </p>
                </section>

                {/* صور البوست الثاني */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-16">
                    {secondPostImages.map((img, index) => (
                        <img
                            key={index}
                            src={img.src}
                            alt={img.alt}
                            className="rounded-md border border-[#ccc] w-full object-cover"
                        />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
