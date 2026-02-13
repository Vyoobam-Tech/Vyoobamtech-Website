import Service from "../Components/Service";
import heroImg from "../assets/dataservice.jpg";
import impactImg from "../assets/f3.jpg";

export default function Data() {
  return (
    <Service
      heroTitle="Data Analytics"
      heroSubtitle="From Information to Intelligence."
      heroImage={heroImg}
      transformTitle="Transform Your Digital Journey"
      transformDesc="We transform raw data into actionable intelligence, enabling
              businesses to make faster and smarter decisions."
      expertiseList={[
  {
    title: "Predictive & prescriptive analytics",
    desc: "Leveraging historical data to forecast trends and recommend actionable strategies.",
  },
  {
    title: "Customer behavior insights",
    desc: "Analyzing user patterns to optimize engagement, retention, and conversion.",
  },
  {
    title: "Automated reporting & real-time dashboards",
    desc: "Dynamic visualization of key metrics for faster, data-driven decision making.",
  },
  {
    title: "AI/ML-driven data models",
    desc: "Implementing intelligent algorithms to enhance predictions, personalization, and efficiency.",
  },
]}
      impactTitle="Business Impact"
      impactDesc1=" Data analytics transforms decision-making from guesswork to data-backed precision. By uncovering patterns, trends, and actionable insights, it helps businesses understand customer behavior, optimize operations, and predict future outcomes. With accurate, real-time data, organizations can make smarter strategic choices, reduce risks, and drive consistent growth."
      impactDesc2=" Modern web solutions streamline operations with automation, secure
             integrations, and real-time insights. They also improve conversions,
             expand market reach, and support measurable business growth through
             smart design and optimized performance."
      impactImage={impactImg}
    />
  );
}
