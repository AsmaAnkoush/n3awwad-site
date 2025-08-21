import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    FaHome,
    FaInfoCircle,
    FaChartBar,
    FaCalendarAlt,
    FaHandsHelping,
    FaPhoneAlt,
    FaImages,
    FaMicrophone
} from 'react-icons/fa';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { to: '/', label: 'الرئيسية', icon: <FaHome /> },
        { to: '/about', label: 'عن الحملة', icon: <FaInfoCircle /> },
        { to: '/statistics', label: 'الإحصائيات', icon: <FaChartBar /> },
        { to: '/reality', label: 'من أرض الواقع', icon: <FaImages /> },

        { to: '/voices', label: 'أصوات من المخيم', icon: <FaMicrophone /> },
        { to: '/legal', label: 'الحق والقانون', icon: <FaInfoCircle /> },
// 👈 جديد
        { to: '/events', label: 'الفعاليات', icon: <FaCalendarAlt /> },
        { to: '/join', label: 'انضموا إلينا', icon: <FaHandsHelping /> },

    ];

    return (
        <nav dir="rtl" className="backdrop-blur-md bg-[#f6f2e9]/95 text-[#1e1e1e] shadow-md border-b border-[#e0ddd7] fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* شعار الحملة */}
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt="شعار الحملة" className="w-10 h-10 rounded-full" />
                        <span className="font-bold text-3xl text-[#c02c39] tracking-tight">نعوّض اللي فات</span>
                    </div>

                    {/* روابط سطح المكتب */}
                    <ul className="hidden md:flex gap-5 text-sm font-medium items-center">
                        {navLinks.map((link, index) => (
                            <li key={index} className="hover:text-[#c02c39] transition">
                                <Link
                                    to={link.to}
                                    className="inline-flex items-center gap-2 whitespace-nowrap leading-none"
                                >
                                    <span className="flex-shrink-0 text-base">{link.icon}</span>
                                    <span>{link.label}</span>
                                </Link>
                            </li>
                        ))}
                        <li>


                        </li>
                    </ul>


                    {/* زر الموبايل */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* روابط الموبايل */}
                {isOpen && (
                    <ul className="md:hidden flex flex-col gap-4 mt-4 pb-4 border-t border-[#ddd] pt-4 text-right text-[#1e1e1e]">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link
                                    to={link.to}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-2 whitespace-nowrap"
                                >
                                    <span className="flex-shrink-0">{link.icon}</span>
                                    <span>{link.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}

            </div>
        </nav>
    );
}
