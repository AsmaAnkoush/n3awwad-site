import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const galleryImages = [
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo4.jpg",
    "/photo5.jpg",
];

const FromReality = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="bg-[#f5f3ee] text-gray-800">
            {/* Hero Section with Video */}
            <section className="relative h-screen overflow-hidden rounded-b-[60px] shadow-lg">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
                    autoPlay
                    muted
                    loop
                >
                    <source src="/videos/hero-video.mp4" type="video/mp4" />
                </video>
                <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
                    <h1 className="text-5xl sm:text-7xl font-extrabold text-white drop-shadow-lg">
                        من أرض الواقع
                    </h1>
                    <p className="text-xl mt-6 font-semibold text-white drop-shadow max-w-3xl mx-auto text-center">
                        مشاهد حصرية من اجتياح المخيم، حيث غابت المدارس وتوقّف التعليم، مما حرم الأطفال من حقهم في مستقبل آمن.
                        الفاقد التعليمي في مخيم نور شمس لم يكن رقماً... بل قصصًا مؤلمة لأطفال توقّفت حياتهم فجأة.
                        هذه المشاهد كانت الشرارة التي أطلقت حملة "نعوّض اللي فات" لدعم تعليم الأطفال في المخيم.
                    </p>
                </div>
            </section>

            {/* Story Blocks */}
            <section className="max-w-5xl mx-auto px-4 py-16 space-y-20">
                {/* Block 1 */}
                <div className="grid md:grid-cols-2 gap-6 items-center bg-white rounded-xl p-6 shadow-md" data-aos="fade-up">
                    <video controls className="w-full rounded shadow-md">
                        <source src="/videos/invasion.mp4" type="video/mp4" />
                    </video>
                    <p className="text-lg font-medium">مشاهد حية من اجتياح مخيم نور شمس في طولكرم</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 items-center bg-white rounded-xl p-6 shadow-md" data-aos="fade-up">
                    <video controls className="w-full rounded shadow-md">
                        <source src="/videos/building-destruction.mp4" type="video/mp4" />
                    </video>
                    <p className="text-lg font-medium">
                        في واحدة من أوسع عمليات الهدم، يواصل جيش الاحتلال تدمير المباني في مخيم نور شمس بطولكرم.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 items-center bg-white rounded-xl p-6 shadow-md" data-aos="fade-up">
                    <video controls className="w-full rounded shadow-md">
                        <source src="/videos/gunfire.mp4" type="video/mp4" />
                    </video>
                    <p className="text-lg font-medium">
                        بدل أن يسمع أطفال المخيم جرس المدرسة، يسمعون يوميًا دوي الرصاص... رعبٌ يعيشه المخيم تحت نيران الاحتلال.
                    </p>
                </div>

                {/* New Block about Educational Loss */}


                {/* Photo Gallery */}
                <div className="bg-white rounded-xl p-6 shadow-md" data-aos="fade-up">
                    <h2 className="text-2xl font-bold text-center mb-6">من قلب الحدث... صور تروي القصة</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {galleryImages.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`مشهد ${idx + 1}`}
                                className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                            />
                        ))}
                    </div>
                </div>

                {/* Aftermath Video */}
                <div className="grid md:grid-cols-2 gap-6 items-center bg-white rounded-xl p-6 shadow-md" data-aos="fade-up">
                    <video controls className="w-full rounded shadow-md">
                        <source src="/videos/kids-after-withdrawal.mp4" type="video/mp4" />
                    </video>
                    <p className="text-lg font-medium">
                        لحظات ما بعد الانسحاب... أطفال مخيم نور شمس يتجولون بين أنقاض منازلهم في طولكرم.
                    </p>
                </div>
            </section>

            {/* Call To Action */}
            <section className="text-center py-16 bg-white mt-8 rounded-t-[60px] shadow-inner">
                <p className="text-lg max-w-xl mx-auto mb-6">
                    الفاقد التعليمي في مخيم نور شمس هو نتيجة مباشرة للاحتلال والتدمير. أطفال لم يعرفوا الفصول الدراسية، بل عرفوا الرصاص والانقطاع.
                </p>
                <Link
                    to="/join"
                    className="bg-[#c02c39] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition"
                >
                    "كن جزءًا من حملة "نعوّض اللي فات
                </Link>

            </section>
        </div>
    );
};

export default FromReality;
