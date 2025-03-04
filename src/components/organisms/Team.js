const teamMembers = [
    { 
        name: "Jacob Jones", 
        role: "CEO", 
        image: "https://i.imgur.com/Zb3hd3r.png" 
    },
    { 
        name: "Cameron Williamson", 
        role: "Client Success Manager", 
        image: "https://i.imgur.com/kN6tncN.png" 
    },
    { 
        name: "Kristin Watson", 
        role: "Digital Marketing Consultant", 
        image: "https://i.imgur.com/TsYGI7F.png" 
    },
    { 
        name: "Jane Cooper", 
        role: "Video Marketing Strategist", 
        image: "https://i.imgur.com/G7iYq2u.png" 
    },
    { 
        name: "Jenny Wilson", 
        role: "Audience Engagement Specialist", 
        image: "https://i.imgur.com/cAVNB1H.png" 
    },
    { 
        name: "Ralph Edwards", 
        role: "Senior Video Production Manager", 
        image: "https://i.imgur.com/aHY9MA1.png" 
    }
];

const Team = () => {
    return (
        <section className="text-start">
            <h2 className="text-2xl font-thin mb-4">TEAM</h2>
            
            <p className="self-stretch text-justify mt-[5rem] mb-12 text-xl md:text-2xl lg:text-4xl leading-relaxed tracking-wide font-medium text-agencyTextColor">
                The YouTube Digital Hub team embodies partnership, innovation, and quality. We 
                embrace new opportunities and maintain an open dialogue with our clients and partners. 
                We deliver on our promises and challenge inefficient solutions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                    <div 
                        key={index} 
                        className="group flex flex-col justify-between h-100 transition-transform duration-300 ease-in-out transform hover:scale-105"
                    >
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-100 object-cover rounded-lg transition-transform duration-300 ease-in-out"
                        />
                        <div className="mt-auto text-right px-4 transition-transform duration-300 ease-in-out group-hover:translate-y-2">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{member.name}</h3>
                            <p className="text-sm sm:text-base md:text-lg">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;
