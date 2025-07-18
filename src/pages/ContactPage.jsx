import React from "react";
import { FaFacebookF } from "react-icons/fa";

const teamMembers = [
    { name: "ضحى زلوم", facebook: "https://www.facebook.com/search/top?q=%D8%B6%D8%AD%D9%89%20%D8%B2%D9%84%D9%88%D9%85" },
    { name: "أسيل الحروب", facebook: "https://www.facebook.com/aseel.alhroub.2025" },
    { name: "حنين البرغوثي", facebook: "https://www.facebook.com/haneen.barghouty" },
    { name: "لقاء ملوح", facebook: "https://www.facebook.com/leqaa.malluh.2025" },
    { name: "ميار فرسخ", facebook: "https://www.facebook.com/profile.php?id=100084933233931" },
    { name: "أسماء عنكوش", facebook: "https://www.facebook.com/profile.php?id=100004045638337" },
    { name: "لانا زبن", facebook: "https://www.facebook.com/lana.zaben.10" },

];

export default function ContactPage() {
    return (
        <div dir="rtl" className="bg-[#fdfbf7] text-[#2f2f2f] min-h-screen pt-28 px-6 flex flex-col items-center">
            {/* العنوان الرئيسي */}
            <h1 className="text-4xl font-extrabold text-[#cc6600] mb-8 text-center">
                👥 أعضاء حملة نعوّض اللي فات
            </h1>


            {/* شبكة البطاقات */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full mb-12">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow border-r-4 border-[#cc6600] hover:shadow-md transition flex flex-col items-center text-center"
                    >
                        <div className="bg-[#fdeacc] w-16 h-16 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-[#cc6600]">
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
            <div className="bg-[#fdeacc] border-r-4 border-[#cc6600] p-6 rounded-md shadow text-center max-w-xl">
                <p className="text-xl font-semibold text-[#4b3e2a] leading-relaxed">
                    لأي استفسارات أو تواصل بخصوص الحملة، لا تترددوا بمراسلة أعضاء الفريق مباشرة 💬
                </p>
            </div>
        </div>
    );
}
