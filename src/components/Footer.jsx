import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
    return (
        <footer dir="rtl" className="bg-[#1e293b] text-white py-6 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-right">

                {/* يمين: لوجو واسم الحملة */}
                <div className="flex items-center gap-3">
                    <div className="bg-white rounded-full p-1 shadow-sm">
                        <img src="/logo.png" alt="شعار الحملة" className="w-10 h-10 rounded-full" />
                    </div>
                    <span className="font-bold text-lg text-white">نعوّض اللي فات</span>
                </div>

                {/* وسط: الأيقونات */}
                <div className="flex gap-4 text-xl">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <FaFacebookF className="hover:text-orange-400 transition" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <FaInstagram className="hover:text-orange-400 transition" />
                    </a>
                    <a href="https://tiktok.com" target="_blank" rel="noreferrer">
                        <FaTiktok className="hover:text-orange-400 transition" />
                    </a>
                </div>

                {/* يسار: المركز */}
                <div className="text-sm text-gray-300 font-medium">
                    مركز التعليم المستمر – جامعة بيرزيت
                </div>
            </div>

            <p className="text-xs text-center mt-4 text-gray-400">
                © 2025 حملة نعوّض اللي فات. جميع الحقوق محفوظة.
            </p>
        </footer>
    );
}
