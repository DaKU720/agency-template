export default function Services() {
  const services = [
    {
      title: "AUDIT",
      description:
        "Unveiling avenues for content improvement, pinpointing prevalent errors, and furnishing specific rules and recommendations to accelerate and optimize your platform pursuits.",
      tags: [
        "Content Analysis",
        "SEO Optimization",
        "Audience Analysis",
        "Project Analysis",
        "New Growth Points",
      ],
    },
    {
      title: "STRATEGY",
      description:
        "Delve into analytical and marketing research yielding actionable insights, complete with a comprehensive roadmap detailing the necessary steps, intricacies, and focal points essential for platform success.",
      tags: [
        "Goal Setting",
        "Trend Analysis",
        "Competitor Analysis",
        "Target Audience Analysis",
        "Promotion Strategy",
        "Content Calendar",
      ],
    },
    {
      title: "SUPPORT",
      description:
        "Efficiency-driven operational oversight to streamline implementation. Our services encompass ongoing technical and consultancy support, adaptive strategy updates in response to evolving trends.",
      tags: [
        "Content Design",
        "Semantics",
        "Channel Setup",
        "Audience Engagement",
        "Monetization Strategy",
        "Violation Handling",
      ],
    },
    {
      title: "PRODUCTION",
      description:
        "For those brimming with ideas but lacking the dedicated team to manage the logistical intricacies of shoots, editing, and content publication, we stand ready to provide comprehensive support.",
      tags: ["Equipment Rental", "Studio Rental", "Editing", "Sound", "Content Design"],
    },
  ];

  return (
    <div className="py-4 sm:py-6 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="w-full mx-auto space-y-12 sm:space-y-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="border-t border-gray-300 pt-4 sm:pt-6 md:pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 items-start"
          >
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-12">
              {service.title}
            </h2>

            <div className="md:col-span-2">
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                {service.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full transition-transform transform hover:scale-105 hover:bg-gray-300 hover:shadow-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}