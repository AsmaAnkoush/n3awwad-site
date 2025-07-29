import React from "react";
import Footer from "../components/Footer";

export default function AboutPage() {
    return (
        <div dir="rtl" className="bg-[#f5f3ee] text-[#1c1c1c] min-h-screen flex flex-col justify-between" style={{ fontFamily: "Tahoma, sans-serif" }}>
            <main className="px-6 py-10 flex-grow">
                {/* الصور العلوية */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
                    <img
                        src="/about1.jpeg"
                        alt="صورة الحملة"
                        className="rounded border border-[#ccc] object-cover h-72 w-full"
                    />
                    <img
                        src="/about2.jpeg"
                        alt="مخيم نور شمس"
                        className="rounded border border-[#ccc] object-cover h-72 w-full"
                    />
                </div>

                <div className="max-w-5xl mx-auto">
                    <h1 className="text-3xl font-bold text-center mb-8 border-b border-[#b31e2f] pb-2">
                        عن حملة نعوّض اللي فات
                    </h1>

                    <p className="text-base text-center leading-loose mb-10 max-w-3xl mx-auto">
                        حملة "نعوّض اللي فات" هي حملة طلابية شبابية أُطلقت استجابة لحاجة ملحّة في مخيم نور شمس، حيث حُرم أطفال المرحلة الابتدائية من حقهم في التعليم بسبب العدوان المستمر. تهدف الحملة إلى مناصرة حق الأطفال في تعليم آمن وعادل، وتقديم دعم نفسي وتعليمي عبر أدوات رقمية ومبادرات يقودها الشباب لإعادة الأمل والحق لهؤلاء الأطفال.
                    </p>

                    <section className="bg-[#fffdf8] border-r-4 border-[#b31e2f] p-5 rounded mb-10">
                        <h2 className="text-xl font-bold mb-3 text-[#b31e2f]">رؤية الحملة</h2>
                        <p className="leading-relaxed text-base">
                            ضمان تعليم آمن ومنصف لأطفال المرحلة الابتدائية في مخيم نور شمس، لا يتوقف رغم الأزمات، ويُسهم في استمرارية نموّهم الأكاديمي، النفسي، والاجتماعي.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold mb-3 text-[#b31e2f]">أسباب إطلاق الحملة</h2>
                        <ul className="list-disc pr-6 space-y-2 text-[#333] leading-relaxed text-base">
                            <li>العدوان المستمر على المخيم منذ بداية العام وتأثيره على التعليم.</li>
                            <li>إغلاق المدارس وصعوبة الوصول لها في ظل الحصار.</li>
                            <li>أصوات الاشتباكات وفقدان البيئة الآمنة والرغبة في التعلم.</li>
                            <li>تدمير البنية التحتية، وانقطاع الكهرباء والمياه.</li>
                            <li>نقص الإنترنت والأدوات التعليمية لمتابعة التعليم عن بعد.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl font-bold mb-4 text-[#b31e2f]">أهداف الحملة</h2>

                        <div className="bg-[#fbf9f3] p-4 rounded border border-[#ddd]">
                            <h3 className="font-semibold mb-2">أهداف قصيرة المدى:</h3>
                            <ul className="list-disc pr-5 space-y-1 text-[#444] text-base">
                                <li>رفع الوعي المجتمعي بواقع الفاقد التعليمي في مخيم نور شمس.</li>
                                <li>توثيق حالة الطلبة وتحدياتهم النفسية والتعليمية.</li>
                                <li>توفير دعم مباشر عبر ورشات تعليمية وجلسات دعم.</li>
                                <li>إنشاء شبكة تواصل بين الطلبة والمعلمين باستخدام الوسائل الرقمية.</li>
                            </ul>

                            <h3 className="font-semibold mt-6 mb-2">أهداف بعيدة المدى:</h3>
                            <ul className="list-disc pr-5 space-y-1 text-[#444] text-base">
                                <li>توسيع الحملة لتشمل مناطق أخرى تضررت من العدوان.</li>
                                <li>سد 50% من الفاقد التعليمي من خلال برامج تعويضية رقمية.</li>
                                <li>التعاون مع مؤسسات محلية ودولية لوضع خطة طوارئ تعليمية.</li>
                                <li>بناء منصات رقمية تعليمية ومراكز بديلة مرنة.</li>
                                <li>تدريب المعلمين على إدارة التعليم في الأزمات.</li>
                                <li>توفير دعم نفسي للطلبة المتأثرين.</li>
                            </ul>
                        </div>
                    </section>

                    <div className="bg-[#f5f3ee] border-r-4 border-[#b31e2f] p-5 rounded text-center">
                        <p className="text-base font-medium">
                            التعليم ليس فقط حقًا... بل هو وسيلة حياة وصمود.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
