const subjects = [
    { code: "ENEE2311", name: "Network Analysis 1" },
    { code: "ENCS2308", name: "Computer Organization" },
    { code: "ENEE2408", name: "Electrical Machines" },
    { code: "ENEE3312", name: "Control Systems" },
];

export default function SubjectList() {
    return (
        <section className="px-6 py-10 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {subjects.map((subj) => (
                <div
                    key={subj.code}
                    className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 border dark:border-gray-700 hover:scale-105 transition"
                >
                    <h3 className="text-lg font-bold text-orange-500">{subj.code}</h3>
                    <p className="text-sm mt-1">{subj.name}</p>
                </div>
            ))}
        </section>
    );
}
