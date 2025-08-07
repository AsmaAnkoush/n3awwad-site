import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const galleryImages = [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    "/images/photo4.jpg",
    "/images/photo5.jpg",
];

const FromReality = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="bg-[#fce5e5] text-gray-800">
            {/* Hero Section */}
            <section className="relative h-screen overflow-hidden rounded-b-[60px] shadow-lg">
                <video autoPlay muted loop className="w-full h-full object-cover brightness-50">
                    <source src="/videos/intro-destruction.mp4" type="video/mp4" />
                    المتصفح لا يدعم تشغيل الفيديو.
                </video>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-4xl sm:text-6xl font-bold text-center leading-snug drop-shadow-xl">
                        من أرض الواقع
                        <br />
                        <span className="text-xl block mt-4 font-light">هنا يكبر الأطفال تحت النار</span>
                    </h1>
                </div>
            </section>

            {/* Story Blocks */}
            <section className="max-w-5xl mx-auto px-4 py-16 space-y-20">
                {/* Block 1 */}
                <div className="grid md:grid-cols-2 gap-6 items-center bg-white rounded-xl p-6 shadow-md" data-aos="fade-up">
                    <video controls className="w-full rounded shadow-md">
                        <source src="/videos/hero-video.mp4" type="video/mp4" />
                    </video>
                    <p className="text-lg font-medium">اجتياح المخيم لم يكن لحظة عابرة... بل كابوس يومي</p>
                </div>

                {/* Block 2 */}
                <div className="grid md:grid-cols-2 gap-6 items-center bg-white rounded-xl p-6 shadow-md" data-aos="fade-up">
                    <p className="text-lg font-medium">هذا كان بيت طفل يحلم بأن يصبح معلّمًا.</p>
                    <video controls className="w-full rounded shadow-md">
                        <source src="/videos/house-blast.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* Block 3 */}
                <div className="grid md:grid-cols-2 gap-6 items-center bg-white rounded-xl p-6 shadow-md" data-aos="fade-up">
                    <video controls className="w-full rounded shadow-md">
                        <source src="/videos/people-fleeing.mp4" type="video/mp4" />
                    </video>
                    <p className="text-lg font-medium">العائلات نزحت، لكن الذكريات بقيت تحت الأنقاض.</p>
                </div>

                {/* Block 4 */}
                <div className="grid md:grid-cols-2 gap-6 items-center bg-white rounded-xl p-6 shadow-md" data-aos="fade-up">
                    <p className="text-lg font-medium">في غياب المدرسة... صار الركام ملعبهم الوحيد.</p>
                    <video controls className="w-full rounded shadow-md">
                        <source src="/videos/kids-on-rubble.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* Block 5 */}
                <div className="grid md:grid-cols-2 gap-6 items-center bg-white rounded-xl p-6 shadow-md" data-aos="fade-up">
                    <video controls className="w-full rounded shadow-md">
                        <source src="/videos/kids-speaking.mp4" type="video/mp4" />
                    </video>
                    <p className="text-lg font-medium">نريد فقط أن نرجع ندرس... نرجع نضحك.</p>
                </div>

                {/* Block 6 */}
                <div className="grid md:grid-cols-2 gap-6 items-center bg-white rounded-xl p-6 shadow-md" data-aos="fade-up">
                    <p className="text-lg font-medium">حتى رياض الأطفال لم تسلم من القصف.</p>
                    <video controls className="w-full rounded shadow-md">
                        <source src="/videos/kindergarten.mp4" type="video/mp4" />
                    </video>
                </div>
            </section>

            {/* Photo Gallery */}
            <section className="py-16" data-aos="fade-up">
                <h2 className="text-3xl font-bold text-center mb-12">لقطات من قلب الحدث</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
                    {galleryImages.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`مشهد ${idx + 1}`}
                            className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                        />
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="text-center py-16 bg-white mt-8 rounded-t-[60px] shadow-inner">
                <p className="text-lg max-w-xl mx-auto mb-6">
                    في مخيم نور شمس، التعليم لم يكن مجرد حق... بل تحدٍ يومي. خلف كل صورة، حلم صغير لم يكتمل بعد.
                </p>
                <Link
                    to="/join"
                    className="bg-[#c02c39] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition"
                >
                    ساعدونا نعيد بناء الأمل
                </Link>
            </section>
        </div>
    );
};

export default FromReality;
