import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function JoinPage() {
    return (
        <div dir="rtl" className="bg-[#f5f3ee] text-[#2f2f2f] min-h-screen mt-12 py-12 px-6 flex flex-col items-center">

            {/* العنوان الرئيسي */}
            <h1 className="text-4xl font-extrabold text-[#b31e2f] mb-6 text-center">
                🚀 انضموا إلينا – حملة نعوّض اللي فات
            </h1>

            {/* وصف الحملة */}
            <p className="text-lg max-w-3xl text-center leading-loose mb-10">
                "نعوّض اللي فات" حملة شبابية رقمية بإشراف مركز التعليم المستمر – جامعة بيرزيت، هدفها تعويض الفاقد التعليمي لأطفال مخيم نور شمس.
                <br />
                ❤️ دعمكم، متابعتكم، ومشاركتكم بيفرقوا معنا!
                كل تفاعل هو مساهمة حقيقية في إيصال صوت أطفالنا وحقهم في التعليم.
            </p>

            {/* صناديق روابط السوشيال */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl mb-16">

                <a
                    href="https://www.instagram.com/n3awwad?igsh=MXEwdzhvcXZlMmJ3dQ%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#fef3f3] border-r-4 border-[#b31e2f] rounded-xl shadow hover:shadow-md transition p-6 flex flex-col items-center text-center"
                >
                    <FaInstagram className="text-3xl text-[#b31e2f] mb-3" />
                    <p className="font-bold text-lg text-[#b31e2f]">تابعونا على إنستغرام</p>
                    <span className="text-sm text-gray-600">@n3awwad</span>
                </a>

                <a
                    href="https://www.facebook.com/share/16bKC71Fnn/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#eef4ff] border-r-4 border-[#1877f2] rounded-xl shadow hover:shadow-md transition p-6 flex flex-col items-center text-center"
                >
                    <FaFacebookF className="text-2xl text-[#1877f2] mb-3" />
                    <p className="font-bold text-lg">صفحتنا على فيسبوك</p>
                    <span className="text-sm text-gray-600">نعوّض اللي فات</span>
                </a>

                <a
                    href="https://www.tiktok.com/@n3awwad?_t=ZS-8y5F1ibhIVJ&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#fff7fa] border-r-4 border-[#000000] rounded-xl shadow hover:shadow-md transition p-6 flex flex-col items-center text-center"
                >
                    <FaTiktok className="text-3xl text-black mb-3" />
                    <p className="font-bold text-lg">تابعونا على تيك توك</p>
                    <span className="text-sm text-gray-600">@n3awwad</span>
                </a>

            </div>

            {/* دعوة ختامية */}
            <div className="bg-[#fce5e5] border-r-4 border-[#b31e2f] p-6 rounded-md shadow text-center max-w-xl">
                <p className="text-xl font-semibold text-[#b31e2f] leading-relaxed">
                    كل مشاركة منك بتخلينا أقرب لتعويض الفاقد التعليمي.
                    <br />
                    ❤️س كن جزءًا من الأثر... وانضم للحملة!
                </p>
            </div>

        </div>
    );
}
