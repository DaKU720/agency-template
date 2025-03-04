const About = () => {
    return (
        <section id="about" className="px-6 md:px-0">
            <p className="self-stretch text-justify mt-[5rem] mb-12 text-xl md:text-2xl lg:text-4xl font-medium leading-relaxed tracking-wide text-agencyTextColor">
                Transforming creators into success stories worldwide: YouTube Digital Hub, your trusted official YouTube partner, specializing in elevating content on YouTube and Facebook across the globe.
            </p>
            <div className="flex flex-col md:flex-row gap-10 justify-center w-full mt-[5rem]">
                <div className="flex-1 text-left leading-none">
                    <p className="text-[5rem] md:text-[8rem] font-bold">8</p>
                    <p className="text-left text-xl md:text-xl">Years of experience in Social Media</p>
                </div>
                <div className="flex-1 text-left leading-none">
                    <p className="text-[5rem] md:text-[8rem] font-bold">28</p>
                    <p className="text-left text-lg md:text-xl">Happy Clients we have worked with</p>
                </div>
                <div className="flex-1 text-left leading-none">
                    <p className="text-[5rem] md:text-[8rem] font-bold">80M</p>
                    <p className="text-left text-xl md:text-xl">New subscribers for our partners</p>
                </div>
                <div className="flex-1 text-left leading-none">
                    <p className="text-[5rem] md:text-[8rem] font-bold">45B</p>
                    <p className="text-left text-xl md:text-xl">
                        Total video views our clients gathered on YouTube
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About