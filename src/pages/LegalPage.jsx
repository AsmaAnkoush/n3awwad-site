import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LegalPage() {
    useEffect(() => {
        AOS.init({ duration: 700 });
    }, []);

    const items = [
        {
            title: "اتفاقية جنيف الرابعة(١٩٤٩)",
            article: "المادة 50",
            summary:
                "تلزم قوة الاحتلال بتسهيل تعليم الأطفال، وضمان استمراره، وحماية المؤسسات التعليمية، حتى في ظل النزاعات.",
            breachTitle: "كيف خرقها الكيان الصهيوني؟",
            breach:
                "إغلاق مدرستين بالكامل وتدمير أجزاء من البنية التحتية المدرسية أدى إلى توقف تعليم آلاف الطلاب، مما جعل العودة إلى التعليم شبه مستحيلة على المدى القريب. كما تسبب انقطاع العملية التعليمية لفترات طويلة في تفاقم الفاقد التعليمي، وسط غياب بيئة تعليمية آمنة بسبب المواجهات المستمرة والاقتحامات",
        },
        {
            title: "البروتوكول الإضافي الثاني لاتفاقية جنيف(١٩٧٧)",
            article: "المادة 4(3)(ج)",
            summary:
                "تؤكد على ضرورة اتخاذ جميع التدابير الممكنة لتجنب انقطاع تعليم الأطفال أثناء النزاع",
            breachTitle: "كيف خرقها الكيان الصهيوني؟",
            breach:
                "انقطع التعليم لفترات طويلة بسبب الإغلاقات الأمنية وتدمير البنية التحتية، مع غياب بدائل تعليمية آمنة وفعّالة. نزوح العائلات أدى لتشريد الطلاب وانقطاعهم عن الدراسة، دون وجود خطة طارئة لضمان استمرار التعليم خلال الحصار والاقتحامات",
        },
        {
            title:
                "العهد الدولي الخاص بالحقوق الاقتصادية والاجتماعية والثقافية (ICESCR)",
            article: "المادة 13",
            summary:
                "التعليم حق لكل فرد، ويجب أن يكون التعليم الابتدائي مجانيًا وإلزاميًا، مع إتاحة التعليم العالي للجميع تدريجيّا.",
            breachTitle: "كيف خرقت الكيان الصهيوني العهد الدولي؟",
            breach:
                "تدمير البنية التحتية للمدارس، ما أدى إلى فقدان بيئة تعليمية مناسبة وصالحة،حيث أغلقت وكالة \"الأونروا\" مدرستي للبنين والبنات داخل المخيم بشكل كامل.",
        },
    ];

    return (
        <div dir="rtl" className="bg-[#f5f3ee] min-h-screen text-gray-900">
            {/* ===== HERO محسّن ===== */}
            <section className="relative overflow-hidden">
                {/* خلفية لطيفة متدرجة + حبيبات */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#fff_10%,_#f8f4ee_40%,_#f0e8dc_100%)]" />
                <div className="relative max-w-7xl mx-auto pt-28 pb-14 px-6">

                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        {/* الجانب النصّي */}
                        <div dir="rtl" className="text-right" data-aos="fade-down">
        <span className="inline-block text-xs tracking-widest text-[#c02c39] bg-[#c02c39]/10 px-3 py-1 rounded-full mb-4">
          المرجعية الحقوقية
        </span>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-[#c02c39] leading-tight">
                                الحق والقانون
                            </h1>
                            <p className="mt-3 text-gray-700 text-lg leading-relaxed">
                                ماذا تقول المواثيق الدولية عن <span className="font-semibold">الحق في التعليم</span>؟ وما هي أبرز الخروقات
                                في مخيم نور شمس.
                            </p>

                            {/* شريط مختصر للصفحات/الفقرات */}
                            <div className="mt-6 flex flex-wrap gap-2 justify-end">
                                <span className="px-3 py-1 rounded-full text-xs bg-white shadow border border-[#efe9e0]">جنيف 1949</span>
                                <span className="px-3 py-1 rounded-full text-xs bg-white shadow border border-[#efe9e0]">البروتوكول 1977</span>
                                <span className="px-3 py-1 rounded-full text-xs bg-white shadow border border-[#efe9e0]">العهد الدولي 13</span>
                            </div>
                        </div>

                        {/* بطاقة الميزان */}
                        <div className="flex md:justify-start justify-center" data-aos="fade-left">
                            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg border border-[#efe9e0]">
                                {/* هالة خلفية */}
                                <span className="absolute -z-10 -top-6 -left-6 w-40 h-40 rounded-full bg-[#c02c39]/10 blur-2xl" />
                                {/* صورة الميزان */}
                                <img
                                    src="/justice-scale.png" // غيّر الاسم إذا لزم
                                    alt="ميزان العدالة"
                                    className="w-28 md:w-36 mx-auto"
                                />
                                <div className="mt-4 text-center">
                                    <p className="text-sm text-gray-600">رمز العدالة وحماية الحق في التعليم</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* فاصل سفلي منحني */}
                <div className="h-8 bg-[#f5f3ee] rounded-t-[2rem]" />
            </section>


            {/* خط زمني للقوانين */}
            <section className="max-w-6xl mx-auto px-6 pb-24">
                <div className="relative">
                    {/* العمود */}
                    <span className="absolute right-1/2 translate-x-1/2 top-0 bottom-0 w-1 bg-[#e9e2d7] rounded-full" />
                    <div className="space-y-12">
                        {items.map((it, idx) => (
                            <div
                                key={idx}
                                className={`relative flex flex-col md:flex-row gap-8 ${
                                    idx % 2 ? "md:flex-row-reverse" : ""
                                }`}
                                data-aos="fade-up"
                                data-aos-delay={idx * 120}
                            >
                                {/* نقطة */}
                                <span className="absolute right-1/2 translate-x-1/2 top-4 w-4 h-4 bg-[#c02c39] rounded-full shadow" />

                                {/* عمود فارغ للموازنة */}
                                <div className="md:w-1/2" />

                                {/* البطاقة */}
                                <article className="md:w-1/2 bg-white rounded-2xl shadow-md border border-[#efe9e0] p-6">
                                    <div className="flex items-center gap-3 mb-2">
                    <span className="inline-block bg-[#c02c39]/10 text-[#c02c39] px-3 py-1 rounded-full text-xs font-bold">
                      {it.title}
                    </span>
                                        <span className="text-xs text-gray-600 font-semibold">
                      {it.article}
                    </span>
                                    </div>

                                    <h3 className="text-base font-bold text-gray-900 mb-1">المضمون</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                        {it.summary}
                                    </p>

                                    <div className="bg-[#fff6f6] border border-[#f0d5d7] rounded-xl p-4">
                                        <h4 className="text-[#c02c39] font-bold mb-1">
                                            {it.breachTitle}
                                        </h4>
                                        <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-line">
                                            {it.breach}
                                        </p>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>

                {/* الخاتمة */}
                <div className="mt-14 bg-white rounded-2xl shadow p-6 text-center" data-aos="fade-up">
                    <p className="text-lg leading-relaxed">
                        في وقت يُفترض أن يكون فيه التعليم حقًا مكفولًا حتى في زمن الحرب، يعيش أطفال نور شمس محرومين من
                        أبسط أشكال الطفولة… ومن أبسط حقوقهم.
                    </p>
                    <p className="mt-3 font-semibold text-[#c02c39]">
                        الحق في التعليم ليس رفاهية، بل التزامٌ إنساني وقانوني.
                    </p>
                </div>
            </section>
        </div>
    );
}
