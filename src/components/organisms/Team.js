const teamMembers = [
    { name: "Jacob Jones", role: "CEO", image: "https://i.imgur.com/Zb3hd3r.png" },
    { name: "Cameron Williamson", role: "Client Success Manager", image: "https://i.imgur.com/kN6tncN.png" },
    { name: "Kristin Watson", role: "Digital Marketing Consultant", image: "https://i.imgur.com/TsYGI7F.png" },
    { name: "Jane Cooper", role: "Video Marketing Strategist", image: "https://i.imgur.com/G7iYq2u.png" },
    { name: "Jenny Wilson", role: "Audience Engagement Specialist", image: "https://i.imgur.com/cAVNB1H.png" },
    { name: "Ralph Edwards", role: "Senior Video Production Manager", image: "https://i.imgur.com/aHY9MA1.png"},
];

const Team = () => {
    return (
        <section className="text-start p-10">
            <h2 className="text-3xl font-bold mb-4">TEAM</h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-8 w-full font-bold">
    The YouTube Digital Hub team embodies partnership, innovation, and quality. We 
    embrace new opportunities and maintain an open dialogue with our clients and partners. 
    We deliver on our promises and challenge inefficient solutions.
</p>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {teamMembers.map((member, index) => (
        <div key={index} className="flex flex-col justify-between h-100">
            <img
                src={member.image}
                alt={member.name}
                className="w-full h-100 object-cover rounded-lg"
            />
            <div className="mt-auto text-right px-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{member.name}</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-700">{member.role}</p>
            </div>
        </div>
    ))}
</div>
        </section>
    );
};

export default Team;

