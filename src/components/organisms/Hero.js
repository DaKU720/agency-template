export default function Hero() {
    return (
        <section className="flex flex-col justify-center h-auto mt-[6rem] px-6 md:px-0">
            <div className="text-[4rem] md:text-[11rem] font-extrabold uppercase leading-none self-stretch">
                <p className="text-left">Content</p>
                <p className="text-right">is king</p>
            </div>

            <p className="self-stretch text-justify mt-10 text-2xl md:mt-6 md:text-4xl leading-relaxed tracking-wide">
                Cras vehicula congue nunc a nisi vehicula interdum.
                Vestibulum volutpat sapien sit amet amet vulputate justo.
                Praesent id nullam aliquam justo sit amet nullam pharetra libero vulputate lorem pellentesque pulvinar.
            </p>

            <div className="flex flex-col items-center mt-12 md:mt-14">
                <div className="flex flex-col md:flex-row justify-between gap-4 w-full">
                    <img
                        src="https://i.imgur.com/7iFovAj.png"
                        alt=""
                        className="w-full md:w-[500px] rounded-3xl"
                    />
                    <img
                        src="https://i.imgur.com/3e2BLUC.png"
                        alt=""
                        className="w-full md:w-[300px] rounded-3xl"
                    />
                    <img
                        src="https://i.imgur.com/c7CdzeI.png"
                        alt=""
                        className="w-full md:w-[500px] rounded-3xl"
                    />
                </div>
                <p className="self-stretch text-justify mt-10 text-2xl md:mt-14 md:text-4xl leading-relaxed tracking-wide">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur malesuada tellus id erat interdum, nec scelerisque nisi cursus.
                    Praesent facilisis ligula vel diam vulputate tincidunt.
                </p>
            </div>
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