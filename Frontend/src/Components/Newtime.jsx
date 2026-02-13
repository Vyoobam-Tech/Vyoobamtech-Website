// import React, { useEffect, useRef, useState } from 'react';
// import "../Styles/About.css"

// export default function TimelineComponent() {
//   const [activeYear, setActiveYear] = useState(0);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const contentRefs = useRef([]);
//   const timelineRef = useRef(null);

//   const timelineData = [
//     {
//       year: "2026",
//       title: "Launch of AI Platform",
//       description: "Thoughtworks launches AI/works™, a new Agentic Development Platform which heralds a new era of agile and next-generation software development.",
//       image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"
//     },
//     {
//       year: "2025",
//       title: "Global Expansion",
//       description: "Opened 15 new offices across Asia Pacific region, strengthening our global presence and market reach.",
//       image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
//     },
//     {
//       year: "2024",
//       title: "Digital Transformation",
//       description: "Helped over 500 enterprises complete their digital transformation journey with cutting-edge solutions.",
//       image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
//     },
//     {
//       year: "2023",
//       title: "Tech Excellence",
//       description: "Established centers of excellence in Machine Learning and Data Science across multiple locations.",
//       image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
//     },
//     {
//       year: "2022",
//       title: "Product Launch",
//       description: "Released flagship product that revolutionized enterprise automation and workflow management.",
//       image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
//     },
//     {
//       year: "2021",
//       title: "Remote First Initiative",
//       description: "Successfully transitioned to hybrid work model across all locations, setting new industry standards.",
//       image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
//     }
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
      
//       if (timelineRef.current) {
//         const timelineTop = timelineRef.current.offsetTop;
//         const timelineHeight = timelineRef.current.offsetHeight;
//         const windowHeight = window.innerHeight;
        
//         const scrollStart = timelineTop - windowHeight / 2;
//         const scrollEnd = timelineTop + timelineHeight - windowHeight / 2;
//         const progress = ((scrollPosition - scrollStart) / (scrollEnd - scrollStart)) * 100;
        
//         setScrollProgress(Math.min(Math.max(progress, 0), 100));
//       }
      
//       contentRefs.current.forEach((ref, index) => {
//         if (ref) {
//           const { offsetTop, offsetHeight } = ref;
          
//           if (scrollPosition >= offsetTop - 300 && scrollPosition < offsetTop + offsetHeight - 300) {
//             setActiveYear(index);
//           }
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();
    
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToYear = (index) => {
//     contentRefs.current[index]?.scrollIntoView({ 
//       behavior: 'smooth',
//       block: 'start'
//     });
//   };

//   return (
//     <div className="timeline-container">
//       {/* Hero Section */}
//       <div className="hero-section">
//         <div className="hero-content">
//           <h1 className="hero-title">Our History</h1>
//           <p className="hero-subtitle">Key milestones that shaped our journey</p>
//         </div>
//       </div>

//       {/* Sticky Year Navigation */}
//       <div className="year-navigation">
//         <div className="year-nav-container">
//           <div className="year-nav-content">
//             <button
//               onClick={() => activeYear > 0 && scrollToYear(activeYear - 1)}
//               className="nav-arrow"
//               disabled={activeYear === 0}
//             >
//               <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>

//             <div className="year-labels">
//               {timelineData.map((item, index) => (
//                 <button
//                   key={index}
//                   onClick={() => scrollToYear(index)}
//                   className={`year-label ${activeYear === index ? 'active' : ''}`}
//                 >
//                   {item.year}
//                 </button>
//               ))}
//             </div>

//             <button
//               onClick={() => activeYear < timelineData.length - 1 && scrollToYear(activeYear + 1)}
//               className="nav-arrow"
//               disabled={activeYear === timelineData.length - 1}
//             >
//               <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

      
//       <div ref={timelineRef} className="timeline-content">
//         <div className="timeline-line"></div>
//         <div 
//           className="timeline-progress" 
//           style={{ height: `${scrollProgress}%` }}
//         ></div>

//         {timelineData.map((yearData, yearIndex) => {
//           const isYearOnLeft = yearIndex % 2 === 0;
          
//           return (
//             <div
//               key={yearIndex}
//               ref={(el) => (contentRefs.current[yearIndex] = el)}
//               className="timeline-section"
//             >
//               <div className="year-header">
//                 <div className={`year-title-desktop ${isYearOnLeft ? 'left' : 'right'}`}>
//                   <div className="year-title-wrapper">
//                     <h2 className="year-text">{yearData.year}</h2>
//                     <div className={`year-underline ${isYearOnLeft ? 'align-right' : ''}`}></div>
//                   </div>
//                 </div>
                
//                 <div className="year-circle"></div>
                
//                 <div className="year-title-mobile">
//                   <div className="year-circle-mobile"></div>
//                   <h2 className="year-text-mobile">{yearData.year}</h2>
//                   <div className="year-underline-mobile"></div>
//                 </div>
//               </div>

//               <div className="timeline-items">
//                 <div className="timeline-item">
//                   <div className="item-dot"></div>
//                   <div className="item-dot-mobile"></div>

//                   <div className={`item-content ${!isYearOnLeft ? 'reverse' : ''}`}>
//                     <div className={`item-side ${isYearOnLeft ? 'text-side right-align' : 'image-side'}`}>
//                       {isYearOnLeft ? (
//                         <div className="text-content">
//                           <h3 className="item-title">{yearData.title}</h3>
//                           <p className="item-description">{yearData.description}</p>
//                         </div>
//                       ) : (
//                         <div className="image-wrapper">
//                           <img src={yearData.image} alt={yearData.title} className="item-image" />
//                         </div>
//                       )}
//                     </div>

//                     <div className={`item-side ${!isYearOnLeft ? 'text-side' : 'image-side'}`}>
//                       {!isYearOnLeft ? (
//                         <div className="text-content">
//                           <h3 className="item-title">{yearData.title}</h3>
//                           <p className="item-description">{yearData.description}</p>
//                         </div>
//                       ) : (
//                         <div className="image-wrapper">
//                           <img src={yearData.image} alt={yearData.title} className="item-image" />
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Footer Section */}
    
//     </div>
//   );
// }

import React, { useEffect, useRef, useState } from 'react';
import "../Styles/About.css";
import laptop2 from "../assets/laptop3.jpg";
import building2 from "../assets/building2.png";
import marketande from "../assets/marketande.png";
import traniee from "../assets/traniee.jpg";
import level2025e from "../assets/level2025e.png";

export default function TimelineComponent() {
  const [activeYear, setActiveYear] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const contentRefs = useRef([]);
  const timelineRef = useRef(null);

  const timelineData = [
  {
    year: 2015,
    date: "2015",
    title: "Foundation & Beginning",
    description: "Founded as a web and IT solutions provider.",
    paragraph:
      "In 2015, our journey began with a strong vision to deliver reliable web and IT solutions. We focused on building websites, software solutions, and digital services that helped small and medium businesses establish their online presence with confidence.",
    image: laptop2,
  },
  {
    year: 2022,
    date: "2022",
    title: "Growth & Expansion",
    description: "Expanded as a tech hub in Kumbakonam.",
    paragraph:
      "By 2022, we expanded our operations and emerged as a growing tech hub in Kumbakonam. This phase marked our transition from a service-based company into a collaborative technology space supporting innovation, development, and learning.",
    image: building2,
  },
  {
    year: 2023,
    date: "2023",
    title: "Academic Launch",
    description:
      "Launched Vyoobam Academic across Tamil Nadu, training students in advanced IT skills.",
    paragraph:
      "In 2023, we launched Vyoobam Academic with the goal of empowering students across Tamil Nadu. Through structured training programs, we equipped learners with real-world IT skills, bridging the gap between academic knowledge and industry requirements.",
    image: traniee,
  },
  {
    year: 2024,
    date: "2024",
    title: "Product Innovation",
    description:
      "Released flagship products Market Metrics and E-Grocery Mart.",
    paragraph:
      "The year 2024 marked a major milestone with the launch of our flagship products, Market Metrics and E-Grocery Mart. These solutions were designed to address real market needs, combining data-driven insights with user-friendly digital platforms.",
    image: marketande,
  },
  {
    year: 2025,
    date: "2025",
    title: "Mentorship & Ecosystem",
    description:
      "We are developing web and mobile applications while mentoring 30+ interns through our learning ecosystem.",
    paragraph:
      "In 2025, we continued to innovate by developing scalable web and mobile applications. Alongside product development, we actively mentored over 30 interns, creating a strong learning ecosystem focused on practical exposure, teamwork, and career growth.",
    image: level2025e,
  },
];
;

useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    
    if (timelineRef.current) {
      const timelineTop = timelineRef.current.offsetTop;
      const timelineHeight = timelineRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollStart = timelineTop - windowHeight / 2;
      const scrollEnd = timelineTop + timelineHeight - windowHeight / 2;
      const progress = ((scrollPosition - scrollStart) / (scrollEnd - scrollStart)) * 100;
      setScrollProgress(Math.min(Math.max(progress, 0), 100));
    }

    // Improved active year detection
    let newActiveYear = 0; // Default to first year
    
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementBottom = rect.bottom;
        
        // Check if element is in the viewport (specifically in the upper half)
        if (elementTop < viewportHeight / 2 && elementBottom > 0) {
          newActiveYear = index;
        }
      }
    });
    
    setActiveYear(newActiveYear);
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial call
  
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  

  return (
    <div className="timeline-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Our History</h1>
          <p className="hero-subtitle">Key milestones that shaped our journey</p>
        </div>
      </div>

      {/* Sticky Year Navigation */}
      <div className="year-navigation">
        <div className="year-nav-container">
          <div className="year-nav-content">
            <button
              onClick={() => activeYear > 0 && scrollToYear(activeYear - 1)}
              className="nav-arrow"
              disabled={activeYear === 0}
            >
              <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="year-labels">
              {timelineData.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToYear(index)}
                  className={`year-label ${activeYear === index ? 'active' : ''}`}
                >
                  {item.year}
                </button>
              ))}
            </div>

            <button
              onClick={() => activeYear < timelineData.length - 1 && scrollToYear(activeYear + 1)}
              className="nav-arrow"
              disabled={activeYear === timelineData.length - 1}
            >
              <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Timeline Content */}
      <div ref={timelineRef} className="timeline-content">
        <div className="timeline-line"></div>
        <div className="timeline-progress" style={{ height: `${scrollProgress}%` }}></div>

        {timelineData.map((yearData, yearIndex) => {
          const isYearOnLeft = yearIndex % 2 === 0;

          return (
            <div
              key={yearIndex}
              ref={(el) => (contentRefs.current[yearIndex] = el)}
              className="timeline-section"
            >
              {/* Year Header */}
              <div className="year-header">
                <div className={`year-title-desktop ${isYearOnLeft ? 'left' : 'right'}`}>
                  <div className="year-title-wrapper">
                    <div className="year-text">{yearData.year}</div>
                    <div className={`year-underline ${!isYearOnLeft ? 'align-right' : ''}`}></div>
                  </div>
                  <div className="year-circle"></div>
                </div>

                <div className="year-title-mobile">
                  <div className="year-circle-mobile"></div>
                  <div className="year-text-mobile">{yearData.year}</div>
                  <div className="year-underline-mobile"></div>
                </div>
              </div>

              {/* Timeline Item */}
              <div className="timeline-items">
                <div className="timeline-item">
                  <div className="item-dot"></div>
                 

                  <div className={`item-content ${!isYearOnLeft ? 'reverse' : ''}`}>
                    {isYearOnLeft ? (
                      <>
                        <div className="item-side text-side">
                          <div className="text-content">
                            <h3 className="item-title">{yearData.title}</h3>
                            <p className="item-description">{yearData.description}</p>
                            <p className="item-paragraph">{yearData.paragraph}</p>
                          </div>
                        </div>
                        <div className="item-side image-side">
                          <div className="image-wrapper">
                            <img src={yearData.image} alt={yearData.title} className="item-image" />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="item-side image-side">
                          <div className="image-wrapper">
                            <img src={yearData.image} alt={yearData.title} className="item-image" />
                          </div>
                        </div>
                        <div className="item-side text-side right-align">
                          <div className="text-content">
                            <h3 className="item-title">{yearData.title}</h3>
                            <p className="item-description">{yearData.description}</p>
                             <p className="item-paragraph">{yearData.paragraph}</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Section */}
      {/* <div className="footer-section">
        <div className="footer-content">
          <h2 className="footer-title">Continue the Journey</h2>
          <p className="footer-subtitle">
            Join us as we shape the future of technology and innovation
          </p>
        </div>
      </div> */}
    </div>
  );
}