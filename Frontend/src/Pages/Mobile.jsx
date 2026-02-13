import Service from "../Components/Service";

import  heroImg from "../assets/mobileservice.jpg";
import impactImg from "../assets/f2.png";
export default function Mobile() {
  return (
    <Service
      heroTitle="Mobile App Development"
      heroSubtitle="Engaging Customers Anywhere, Anytime..."
      heroImage={heroImg}
      transformTitle="Transform Your Digital Journey"
      transformDesc="In today’s mobile-first world, apps are the fastest way to engage
              customers. We create high-performance mobile applications that
              combine scalability, security, and intuitive design."
      expertiseList={[
  {
    title: "Native iOS & Android apps",
    desc: "High-performance, platform-specific apps built for iOS and Android devices.",
  },
  {
    title: "Cross-platform development (Flutter, React Native)",
    desc: "Single codebase apps that run smoothly on multiple platforms, saving time and resources.",
  },
  {
    title: "Real-time features: push notifications, geo-tracking, chatbots",
    desc: "Enhancing user engagement with instant updates, location tracking, and interactive bots.",
  },
  {
    title: "Secure authentication & cloud integration",
    desc: "Ensuring user security with robust authentication and seamless cloud connectivity.",
  },
]}
      impactTitle="Business Impact"
      impactDesc1="Mobile app development empowers businesses to deliver seamless
              digital experiences that drive measurable results..."
      impactDesc2=" Through secure transactions, in-app analytics, geolocation
              capabilities, and targeted push notifications, businesses gain new
              monetization opportunities and expanded market reach."
      impactImage={impactImg}
    />
  );
}
