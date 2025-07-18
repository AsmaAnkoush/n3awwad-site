import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaChartBar, FaUsers, FaCalendarAlt, FaHandsHelping, FaPhoneAlt } from 'react-icons/fa';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav dir="rtl" className="backdrop-blur-md bg-[#e5e3dc]/95 text-[#1e293b] shadow-md border-b border-[#c7c4bd] fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* شعار الحملة على اليمين */}
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt="شعار الحملة" className="w-10 h-10 rounded-full" />
                        <span className="font-bold text-xl text-orange-600 tracking-tight">نعوّض اللي فات</span>
                    </div>

                    {/* روابط سطح المكتب على الشمال */}
                    <ul className="hidden md:flex gap-5 text-sm font-medium items-center">
                        <li className="flex items-center gap-1 hover:text-orange-500 transition">
                            <FaHome />
                            <Link to="/">الرئيسية</Link>
                        </li>
                        <li className="flex items-center gap-1 hover:text-orange-500 transition">
                            <FaInfoCircle />
                            <li><Link to="/about" className="hover:text-orange-400 transition">عن الحملة</Link></li>
                        </li>
                        <li className="flex items-center gap-1 hover:text-orange-500 transition">
                            <FaChartBar />
                            <a href="#stats">الإحصائيات</a>
                        </li>
                        <li className="flex items-center gap-1 hover:text-orange-500 transition">
                            <FaUsers />
                            <a href="#stories">قصص من الواقع</a>
                        </li>
                        <li className="flex items-center gap-1 hover:text-orange-500 transition">

                            <FaCalendarAlt />
                            <Link to="/events" className="hover:text-orange-400 transition">الفعاليات</Link>
                        </li>
                        <li className="flex items-center gap-1 hover:text-orange-500 transition">
                            <FaHandsHelping />
                            <li><Link to="/join" onClick={() => setIsOpen(false)} className="hover:text-orange-400 transition">انضموا إلينا</Link></li>
                        </li>
                        <li className="flex items-center gap-1 hover:text-orange-500 transition">
                            <FaPhoneAlt />
                            <Link to="/contact">اتصل بنا</Link>
                        </li>
                        <li>
                            <a
                                href="#join"
                                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-full shadow-md animate-pulse transition"
                            >
                                🚀 ادعم الحملة
                            </a>
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
                    <ul className="md:hidden flex flex-col gap-4 mt-4 pb-4 border-t border-gray-300 pt-4 text-right">
                        <li><Link to="/" onClick={() => setIsOpen(false)} className="hover:text-orange-400 transition">الرئيسية</Link></li>
                        <li><Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-orange-400 transition">عن الحملة</Link></li>
                        <li><a href="#stats" onClick={() => setIsOpen(false)} className="hover:text-orange-400 transition">الإحصائيات</a></li>
                        <li><a href="#stories" onClick={() => setIsOpen(false)} className="hover:text-orange-400 transition">قصص من الواقع</a></li>
                        <li><Link to="/events" onClick={() => setIsOpen(false)} className="hover:text-orange-400 transition">الفعاليات</Link></li>
                        <li><Link to="/join" onClick={() => setIsOpen(false)} className="hover:text-orange-400 transition">انضموا إلينا</Link></li>
                        <li><Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-orange-400 transition">اتصل بنا</Link></li>
                    </ul>
                )}

            </div>
        </nav>
    );
}
