import Service from "../Components/Service";
import heroImg from "../assets/finalit.jpg";
import impactImg from"../assets/f5.jpg"; 

export default function IT() {
  return (
    <Service
      heroTitle="IT Services"
      heroSubtitle="Driving Digital Transformation..."
      heroImage={heroImg}
      transformTitle="Transform Your Digital Journey"
      transformDesc="We partner with organizations to design and implement future-ready
              digital strategies. Our consultants bring deep expertise in
              technology, industry trends, and process optimization."
      expertiseList={[
  {
    title: "IT strategy & digital roadmaps",
    desc: "Defining technology vision and actionable plans to achieve business goals.",
  },
  {
    title: "System modernization & cloud migration",
    desc: "Upgrading legacy systems and moving workloads to secure, scalable cloud platforms.",
  },
  {
    title: "Workflow automation & process redesign",
    desc: "Optimizing business processes with automation and improved efficiency.",
  },
  {
    title: "Technology stack advisory",
    desc: "Guidance on selecting the right tools, frameworks, and platforms for your organization.",
  },
]}
      impactTitle="Business Impact"
      impactDesc1="IT consulting helps organizations optimize operations, reduce
              costs, and strengthen their overall digital strategy. By aligning
              technology with business goals, it enables companies to modernize
              systems, streamline workflows, and improve efficiency. With expert
              guidance, businesses can adopt scalable solutions, enhance
              resilience, and stay competitive in an evolving digital economy."
      impactDesc2=" Modern web solutions streamline operations with automation, secure
             integrations, and real-time insights. They also improve conversions,
             expand market reach, and support measurable business growth through
             smart design and optimized performance."
      impactImage={impactImg}
    />
  );
}
