import Service from "../Components/Service";
import heroImg from "../assets/webservice.jpg";
import impactImg from "../assets/f1.jpg";

export default function Web() {
  return (
    <Service
      heroTitle="Web Development"
      heroSubtitle="Building the Digital Face of Your Business"
      heroImage={heroImg}
      transformTitle="Transform Your Digital Journey"
      transformDesc="We combine innovation, design thinking, and advanced technology to
              deliver scalable solutions that help organizations thrive in the
              digital era. From cloud-native applications to AI-driven platforms,
              our expertise spans across industries."
      expertiseList={[
  {
    title: "Responsive & adaptive web applications",
    desc: "Modern, mobile-first apps that scale across devices seamlessly.",
  },
  {
    title: "Enterprise-grade portals & e-commerce platforms",
    desc: "Robust platforms built for security, scalability, and performance.",
  },
  {
    title: "API integrations & secure payment systems",
    desc: "Smooth integrations with 3rd party APIs and secure payment gateways.",
  },
  {
    title: "SEO-first architecture for higher visibility",
    desc: "Optimized designs to ensure better ranking and discoverability.",
  },
]}
      impactTitle="Business Impact"
      impactDesc1=" Web development helps businesses build a strong online presence,
           connect with customers globally, and deliver smooth, user-friendly
experiences. A well-designed website boosts brand credibility and
            makes it easier for users to explore products and services."
      impactDesc2=" Modern web solutions streamline operations with automation, secure
             integrations, and real-time insights. They also improve conversions,
             expand market reach, and support measurable business growth through
             smart design and optimized performance."
      impactImage={impactImg}
    />
  );
}
