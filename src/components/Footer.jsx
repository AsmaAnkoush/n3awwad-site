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

                {/* وسط: أيقونات التواصل */}
                <div className="flex gap-4 text-xl">
                    <a
                        href="https://www.facebook.com/share/16bKC71Fnn/?mibextid=wwXIfr"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                    >
                        <FaFacebookF className="hover:text-red-400 transition" />
                    </a>
                    <a
                        href="https://www.instagram.com/n3awwad?igsh=MXEwdzhvcXZlMmJ3dQ%3D%3D&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <FaInstagram className="hover:text-red-400 transition" />
                    </a>
                    <a
                        href="https://www.tiktok.com/@n3awwad?_t=ZS-8y5F1ibhIVJ&_r=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="TikTok"
                    >
                        <FaTiktok className="hover:text-red-400 transition" />
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
