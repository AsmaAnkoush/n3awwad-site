import React, { useState } from "react";
import Footer from "../components/Footer";

const eventImages = [
    { src: "/p1s1.png", alt: "البوست 1" },
    { src: "/p1s2.png", alt: "البوست 2" },
    { src: "/p1s3.png", alt: "البوست 3" },
    { src: "/p1s4.png", alt: "البوست 4" },
    { src: "/p1s5.png", alt: "البوست 5" },
    { src: "/p1s6.png", alt: "البوست 6" },
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
        <div dir="rtl" className="bg-[#f5f3ee] text-[#3b3b3b] min-h-screen pt-28 px-6">
            <div className="max-w-4xl mx-auto">

                {/* عنوان الصفحة */}
                <h1 className="text-4xl font-extrabold text-center mb-6 text-[#cc6600]">
                    📆 فعاليات حملة نعوّض اللي فات
                </h1>

                {/* مقدمة الصفحة */}
                <p className="text-lg text-center mb-10 leading-loose">
                    في هذا القسم، نوثّق كل ما قمنا به في حملة "نعوّض اللي فات"، من منشورات على المنصات، إلى الفعاليات الميدانية، أو حملات التوعية الرقمية. هدفنا إبراز جهودنا وتسليط الضوء على عملنا الجماعي في دعم أطفال مخيم نور شمس.
                </p>

                {/* الفعالية الأولى */}
                <section className="bg-white p-6 shadow rounded-md border-r-4 border-[#cc6600] mb-10">
                    <h2 className="text-2xl font-bold mb-2 text-[#cc6600]">🚀 تم إطلاق الحملة</h2>
                    <p className="text-gray-700 text-md leading-relaxed">
                        انطلقت حملة "نعوّض اللي فات" رسميًا يوم 17 تموز 2025 على منصات التواصل الاجتماعي، من خلال نشر البوست التعريفي الذي يوضح هدف الحملة ورسالتها.
                    </p>
                </section>

                {/* سلايدر البوستات */}
                <div className="relative w-full max-w-2xl mx-auto">
                    {/* أزرار */}
                    <button
                        onClick={goPrev}
                        className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl text-[#cc6600] hover:text-[#a55500] px-3 z-10"
                        aria-label="السابق"
                    >
                        ❮
                    </button>

                    <img
                        src={eventImages[currentIndex].src}
                        alt={eventImages[currentIndex].alt}
                        className="rounded-xl shadow-md border border-[#d8d5cd] object-contain w-full max-h-[500px] transition duration-300"
                    />

                    <button
                        onClick={goNext}
                        className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl text-[#cc6600] hover:text-[#a55500] px-3 z-10"
                        aria-label="التالي"
                    >
                        ❯
                    </button>
                </div>

                {/* فاصل ومؤشر */}
                <p className="text-center text-sm text-gray-500 mt-4">
                    الصورة {currentIndex + 1} من {eventImages.length}
                </p>

            </div>

        </div>

    );
}
