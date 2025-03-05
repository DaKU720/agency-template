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

  const img = [
    { image: "https://i.imgur.com/R6NsBCb.png" },
    { image: "https://i.imgur.com/RH83HJz.png" },
    { image: "https://i.imgur.com/s0jDB3X.png" },
    { image: "https://i.imgur.com/pEAqM8s.png" },
    { image: "https://i.imgur.com/AoUySew.png" },
    { image: "https://i.imgur.com/6VpEvDg.png" }
  ];

  return (
    <div id="clients" className="px-4 md:px-8">
      <h2 className="text-3xl font-bold mb-4 text-agencyTextColor">Clients</h2>

      <p className="self-stretch text-justify mt-4 text-xl md:text-2xl lg:text-4xl leading-relaxed tracking-wide text-agencyTextColor">
        Our efforts have consistently garnered recognition from industry experts due to our distinctive approach and proven track record of delivering results for our clients. We take pride in continually pushing boundaries, delivering exceptional work that truly distinguishes us. However, don't just take our word for it.
      </p>

      <div className="min-h-screen flex justify-center items-center">
        <div className="w-full max-w-1xl flex flex-col gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row items-center md:items-start gap-6 p-8 pt-20 border-b border-agencyTextColor text-center md:text-left"
            >
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-202 h-204 rounded-lg" 
              />
              <div className="w-auto">
                <h3 className="font-bold text-xl md:text-2xl text-agencyTextColor">
                  {testimonial.name}
                </h3>
                <p className="text-lg md:text-2lg font-medium text-agencyTextColor">
                  {testimonial.position}
                </p>
              </div>
              <p className="mt-4 md:mt-0 md:ml-80 text-lg md:text-2xl leading-relaxed max-w-[600px] text-agencyTextColor">
                "{testimonial.text}"
              </p>
            </div>
          ))}

          <div className="flex justify-between w-full mb-10 pt-32">
            {img.map((image, index) => (
              <div key={index} className="flex items-center justify-center">
                <img 
                  src={image.image} 
                  className="w-auto h-auto rounded-lg" 
                  alt={`client-image-${index}`} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
