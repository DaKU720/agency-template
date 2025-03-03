export default function Client() {
  const testimonials = [
    {
      name: "Ethan Clarke",
      position: "Content Creator & Marketing Manager, TechGeniusHQ",
      image: "https://i.imgur.com/ZsK5imT.png",
      text: "Their innovative strategies and personalized approach not only boosted our viewership but also significantly enhanced our engagement metrics."
    },
    {
      name: "Mark Thompson",
      position: "Social Media Strategist & Brand Manager, CreativeVibes",
      image: "https://i.imgur.com/MdHly29.png",
      text: "Their expert guidance and tailored strategies revolutionized our content approach, enabling us to reach a broader audience faster than we ever imagined. We saw immediate improvements in engagement and reach."
    },
    {
      name: "Emily Larson",
      position: "Content Creator & Marketing Manager, LifestyleGuru",
      image: "https://i.imgur.com/vBpNOiG.png",
      text: "Collaborating with YouTube Digital Hub was a fantastic experience. Their support and insights elevated our channel, resulting in increased views and subscriber growth. A truly invaluable partnership."
    }
  ];
  
  return (
    <div className="px-4 md:px-8">
      <p className="self-stretch text-justify mt-4 text-xl md:text-2xl lg:text-4xl leading-relaxed tracking-wide">
        Our efforts have consistently garnered recognition from industry experts due to our distinctive approach and proven track record of delivering results for our clients. We take pride in continually pushing boundaries, delivering exceptional work that truly distinguishes us. However, don't just take our word for it.
      </p>

      <div className="min-h-screen flex justify-center items-center">
        <div className="w-full max-w-1xl flex flex-col gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center md:items-start gap-6 p-8 border-b text-center md:text-left">
              <img src={testimonial.image} alt={testimonial.name} className="w-202 h-204 rounded-lg" />
              <div className="w-auto">
                <h3 className="font-bold text-black text-xl md:text-2xl">{testimonial.name}</h3>
                <p className="text-lg md:text-2lg text-gray-600 font-medium">{testimonial.position}</p>
              </div>
              <p className="mt-4 md:mt-0 md:ml-80 text-black text-lg md:text-2xl leading-relaxed max-w-[600px]">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
