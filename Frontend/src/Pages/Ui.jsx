import Service from "../Components/Service";
import heroImg from "../assets/uiservice.jpg";
import impactImg from "../assets/f4.jpg";

export default function Ui() {
  return (
    <Service
      heroTitle="UI/UX Design"
      heroSubtitle=" Experience that delight and convert..."
      heroImage={heroImg}
      transformTitle="Transform Your Digital Journey"
      transformDesc="Great design is not about pixels—it’s about human-centered experiences.
              Our design process ensures users interact with your brand in the most seamless and meaningful way."
      expertiseList={[
  {
    title: "User research & behavioral analysis",
    desc: "In-depth understanding of user needs and behaviors to drive design decisions.",
  },
  {
    title: "Wireframes, prototypes, and usability testing",
    desc: "Iterative design process to validate ideas before development, ensuring intuitive interfaces.",
  },
  {
    title: "Minimalist, scalable, and accessible design systems",
    desc: "Clean and efficient design frameworks that grow with your product and remain user-friendly.",
  },
  {
    title: "Consistent branding across platforms",
    desc: "Uniform visual identity and messaging across all touchpoints for stronger brand recognition.",
  },
]}
      impactTitle="Business Impact"
      impactDesc1=" UI/UX design improves customer satisfaction by creating intuitive, engaging, and easy-to-use digital experiences. Thoughtful design increases product adoption, reduces user frustration, and drives higher business conversions."
      impactDesc2=" Modern web solutions streamline operations with automation, secure
             integrations, and real-time insights. They also improve conversions,
             expand market reach, and support measurable business growth through
             smart design and optimized performance."
      impactImage={impactImg}
    />
  );
}
