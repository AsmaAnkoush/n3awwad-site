import React from "react";
import Footer from "../components/Footer";

export default function AboutPage() {
    return (
        <div dir="rtl" className="bg-[#f5f3ee] text-[#2e2e2e] min-h-screen flex flex-col justify-between">
            <main className="px-6 py-10 flex-grow">
                {/* الصور العلوية */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
                    <img
                        src="/about1.jpeg"
                        alt="صورة الحملة"
                        className="rounded-xl shadow-md object-cover h-72 w-full border border-[#ddd] transform transition duration-300 hover:scale-105 hover:shadow-lg"
                    />
                    <img
                        src="/about2.jpeg"
                        alt="مخيم نور شمس"
                        className="rounded-xl shadow-md object-cover h-72 w-full border border-[#ddd] transform transition duration-300 hover:scale-105 hover:shadow-lg"
                    />
                </div>

                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl font-extrabold text-[#b31e2f] mb-8 text-center">
                        🚀 عن حملة نعوّض اللي فات
                    </h1>

                    <p className="text-lg text-center leading-loose mb-10 max-w-3xl mx-auto">
                        حملة "نعوّض اللي فات" هي حملة طلابية شبابية أُطلقت استجابة لحاجة ملحّة في مخيم نور شمس، حيث حُرم أطفال المرحلة الابتدائية من حقهم في التعليم بسبب العدوان المستمر. تهدف الحملة إلى مناصرة حق الأطفال في تعليم آمن وعادل، وتقديم دعم نفسي وتعليمي عبر أدوات رقمية ومبادرات يقودها الشباب لإعادة الأمل والحق لهؤلاء الأطفال.
                    </p>

                    <section className="bg-[#fffdf8] border-r-4 border-[#b31e2f] p-5 rounded-md shadow mb-10">
                        <h2 className="text-2xl font-bold mb-3 text-[#b31e2f]">🌟 رؤية الحملة</h2>
                        <p className="leading-relaxed text-lg">
                            ضمان تعليم آمن ومنصف لأطفال المرحلة الابتدائية في مخيم نور شمس، لا يتوقف رغم الأزمات، ويُسهم في استمرارية نموّهم الأكاديمي، النفسي، والاجتماعي.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-3 text-[#b31e2f]">🚨 لماذا أطلقنا الحملة؟</h2>
                        <ul className="list-disc pr-6 space-y-2 text-[#333] leading-relaxed">
                            <li>العدوان المستمر على المخيم منذ بداية العام وتأثيره على التعليم.</li>
                            <li>إغلاق المدارس وصعوبة الوصول لها في ظل الحصار.</li>
                            <li>أصوات الاشتباكات وفقدان البيئة الآمنة والرغبة في التعلم.</li>
                            <li>تدمير البنية التحتية، وانقطاع الكهرباء والمياه.</li>
                            <li>نقص الإنترنت والأدوات التعليمية لمتابعة التعليم عن بعد.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-3 text-[#b31e2f]">🎯 أهداف الحملة</h2>

                        <div className="bg-[#fbf9f3] p-4 rounded-md shadow">
                            <h3 className="text-lg font-bold text-[#b31e2f] mb-2">✅ قصيرة المدى:</h3>
                            <ul className="list-disc pr-5 space-y-1 text-[#444]">
                                <li>رفع الوعي المجتمعي بواقع الفاقد التعليمي في مخيم نور شمس.</li>
                                <li>توثيق حالة الطلبة وتحدياتهم النفسية والتعليمية.</li>
                                <li>توفير دعم مباشر عبر ورشات تعليمية وجلسات دعم.</li>
                                <li>إنشاء شبكة تواصل بين الطلبة والمعلمين باستخدام الوسائل الرقمية.</li>
                            </ul>

                            <h3 className="text-lg font-bold text-[#00b3a4] mt-6 mb-2">🚀 بعيدة المدى:</h3>
                            <ul className="list-disc pr-5 space-y-1 text-[#444]">
                                <li>توسيع الحملة لتشمل مناطق أخرى تضررت من العدوان.</li>
                                <li>سد 50% من الفاقد التعليمي من خلال برامج تعويضية رقمية.</li>
                                <li>التعاون مع مؤسسات محلية ودولية لوضع خطة طوارئ تعليمية.</li>
                                <li>بناء منصات رقمية تعليمية ومراكز بديلة مرنة.</li>
                                <li>تدريب المعلمين على إدارة التعليم في الأزمات.</li>
                                <li>توفير دعم نفسي للطلبة المتأثرين.</li>
                            </ul>
                        </div>
                    </section>

                    <div className="bg-[#f5f3ee] border-r-4 border-[#b31e2f] p-5 rounded-md shadow text-center">
                        <p className="text-xl font-semibold text-[#2e2e2e]">
                            التعليم مش بس حق... التعليم هو حياة، أمل، ومقاومة.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
