import React from "react";
import { FaFacebookF } from "react-icons/fa";

const teamMembers = [
    { name: "ضحى زلوم", facebook: "https://www.facebook.com/search/top?q=%D8%B6%D8%AD%D9%89%20%D8%B2%D9%84%D9%88%D9%85" },
    { name: "أسيل الحروب", facebook: "https://www.facebook.com/aseel.alhroub.2025" },
    { name: "حنين البرغوثي", facebook: "https://www.facebook.com/haneen.barghouty" },
    { name: "لقاء ملوح", facebook: "https://www.facebook.com/leqaa.malluh.2025" },
    { name: "ميار أبو عواد", facebook: "https://www.fok.com/profile.php?id=100084933233931" },
    { name: "أسماء عنكوش", facebook: "https://www.facebook.com/profile.php?id=100004045638337" },
    { name: "لانا زبن", facebook: "https://book.com/lana.zaben.10" },
];

export default function ContactPage() {
    return (
        <div
            dir="rtl"
            className="bg-[#f5f3ee] text-[#2f2f2f] min-h-screen pt-28 px-6 flex flex-col items-center"
            style={{ fontFamily: "Tahoma, sans-serif" }}
        >
            {/* العنوان الرئيسي */}
            <h1 className="text-3xl font-bold text-[#b31e2f] mb-8 text-center">
                أعضاء فريق حملة نعوّض اللي فات
            </h1>

            {/* شبكة البطاقات */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full mb-12">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow border-r-4 border-[#b31e2f] hover:shadow-md transition flex flex-col items-center text-center"
                    >
                        <div className="bg-[#fbe6e9] w-16 h-16 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-[#b31e2f]">
                            {member.name.charAt(0)}
                        </div>
                        <h2 className="font-bold text-lg mb-2">{member.name}</h2>
                        <a
                            href={member.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 flex items-center gap-2 text-sm transition"
                        >
                            <FaFacebookF /> ملفه على فيسبوك
                        </a>
                    </div>
                ))}
            </div>

            {/* عبارة ختامية */}
            <div className="bg-[#fbe6e9] border-r-4 border-[#b31e2f] p-6 rounded-md shadow text-center max-w-xl">
                <p className="text-base font-medium text-[#4b3e2a] leading-relaxed">
                    لأي استفسارات أو تواصل بخصوص الحملة، يمكنكم مراسلة أعضاء الفريق مباشرة عبر حساباتهم.
                </p>
            </div>
        </div>
    );
}
