const subjectsByYear = {
    "السنة الثانية": [
        { code: "ENEE2311", name: "Network Analysis 1" },
        { code: "ENCS2308", name: "Computer Organization" },
    ],
    "السنة الثالثة": [
        { code: "ENEE2408", name: "Electrical Machines" },
    ],
    "السنة الرابعة": [
        { code: "ENEE3312", name: "Control Systems" },
    ],
};

export default function SubjectList() {
    return (
        <div className="px-6 py-12 max-w-6xl mx-auto">
            {Object.entries(subjectsByYear).map(([year, subjects]) => (
                <div key={year} className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b border-orange-400 inline-block">
                        📘 {year}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {subjects.map((subj) => (
                            <div
                                key={subj.code}
                                className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 border dark:border-gray-700 hover:scale-105 transition"
                            >
                                <h3 className="text-lg font-bold text-orange-500">{subj.code}</h3>
                                <p className="text-sm mt-1">{subj.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
