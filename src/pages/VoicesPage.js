export default function VoicesPage() {
    return (
        <div dir="rtl" className="bg-[#f5f3ee] min-h-screen py-20 px-6 text-gray-800">
            <h1 className="text-4xl font-extrabold text-center mb-12 text-[#c02c39]">
                أصوات من المخيم
            </h1>

            {/* شهادة الطفل أحمد */}
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8 mb-16">
                <h2 className="text-2xl font-bold text-[#c02c39] mb-6">صوت أحمد من المخيم</h2>

                <video controls className="w-full rounded-lg shadow-lg mb-6">
                    <source src="/videos/child.mp4" type="video/mp4" />
                    المتصفح لا يدعم تشغيل الفيديو
                </video>

                <p className="text-lg leading-relaxed text-gray-700">
                    "أكتر إشي مشتاقله أرجع ع مدرستي بالمخيم… أرجع لصحابي ولاساتذتي.
                    بسبب الاقتحامات ما قدرنا نداوم، وقالولنا: لمّوا أغراضكم واطلعوا…
                    وراح علينا فصل دراسي كامل.
                    أنا بحب العلوم والرياضة، ونزحنا وانتقلت ع مدرسة تانية،
                    بس الانتقال ما عوّضنا عن اللي فقدناه.
                    والله يا ريت حدا يعوضنا باللي راح علينا من تعليم."
                </p>
                <p className="mt-4 font-semibold text-[#c02c39]">
                    — أحمد شحادة، طالب صف خامس من مخيم نور شمس
                </p>
            </div>

            {/* شهادة أم أحمد */}
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8 border-r-4 border-[#c02c39]">
                <h2 className="text-2xl font-bold text-[#c02c39] mb-6">صوت أم أحمد</h2>

                <p className="text-lg leading-relaxed text-gray-700 italic">
                    "الأوضاع ما أثّرت بس على ابني… أثّرت على كل حدا نازح.
                    اضطرّينا نروح للتعليم عن بُعد، بس في مناطق ما فيها لا إنترنت ولا كهربا.
                    أحمد كان من الأوائل وتراجع مستواه بسبب النزوح.
                    كل يوم بقوله يقرأ قصص عشان يقوّي قراءته…
                    كانت قراءته بالصف الرابع أقوى من هالأيام وهو بالصف الخامس."
                </p>

                <p className="mt-4 font-semibold text-[#c02c39]">— والدة أحمد شحادة، مخيم نور شمس</p>
            </div>
        </div>
    );
}
