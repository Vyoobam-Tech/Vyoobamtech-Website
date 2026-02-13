import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Grid from "../Components/Grid";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Hero() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  const text = "Empowering Businesses with Digital Innovation";

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const polygonSize = isMobile
    ? "clamp(180px, 70vw, 240px)"
    : "clamp(150px, 28vw, 250px)";

  const imageBaseStyle = {
    width: polygonSize,
    height: polygonSize,
    clipPath:
      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    overflow: "hidden",
    opacity: 0,
    transform: "translateY(30px) scale(0.9)",
    animation: "revealImage 0.9s ease forwards",
  };

  return (
    <Grid>
      <div
        style={{
          minHeight: "100vh",
          padding: "clamp(20px, 5vw, 80px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "clamp(100px, 10vw, 90px)",
        }}
      >
        {/* ===== HEADING ===== */}
        <h1
          style={{
            fontSize: "clamp(4rem, 5vw, 3.5rem)",
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.25,
            maxWidth: "900px",
          }}
        >
          {text.split(" ").map((word, w) => (
            <span
              key={w}
              style={{ display: "inline-block", marginRight: "0.35em" }}
            >
              {word.split("").map((char, c) => (
                <span
                  key={c}
                  style={{
                    display: "inline-block",
                    opacity: 0,
                    animation: "reveal 0.4s ease forwards",
                    animationDelay: `${(w * 5 + c) * 0.05}s`,
                  }}
                >
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h1>

        {/* ===== BUTTON ===== */}
        <Button
          variant="contained"
          sx={{
            mt: { xs: 4, md: 6 },
            px: { xs: 3, md: 4 },
            py: { xs: 1.2, md: 1.5 },
            borderRadius: "30px",
            fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
            background: "linear-gradient(90deg, #3f5eec, #00e4c9)",
            textTransform: "none",
            "&:hover": {
              background: "linear-gradient(90deg, #00e4c9, #3f5eec)",
            },
          }}
          onClick={() => navigate("/about")}
        >
          See More →
        </Button>

        {/* ===== BOTTOM SECTION ===== */}
        <div
          style={{
            maxWidth: "1200px",
            width: "100%",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "clamp(30px, 6vw, 60px)",
            marginTop: "clamp(40px, 8vw, 80px)",
          }}
        >
          {/* LEFT TEXT */}
          <div style={{ flex: 1, maxWidth: "520px" }}>
            <p
              style={{
                color: "#555",
                fontSize: "clamp(18px, 2.5vw, 18px)",
                lineHeight: 1.7,
              }}
            >
             We help businesses unlock their full potential through smart, scalable, 
             and innovative digital solutions. By blending strategy, creativity, and 
             technology, we design experiences that strengthen
              brands and accelerate growth in today’s competitive digital world.<br /><br />

             From concept to execution, we focus on delivering solutions that 
             are reliable, future-ready, and tailored to your goals. 
             Our approach is built on understanding your vision, solving real problems, and 
             creating digital products that make a lasting impact.
            </p>
          </div>

          {/* RIGHT IMAGES */}
          <div
            style={{
              flex: 1,
              width: "100%",
              position: "relative",
              height: isMobile ? "auto" : "clamp(320px, 60vw, 500px)",
              display: "flex",
              flexDirection: isMobile ? "column" : "block",
              alignItems: "center",
              gap: isMobile ? "24px" : "0",
            }}
          >
            {/* IMAGE 1 */}
            <div
              style={{
                ...imageBaseStyle,
                animationDelay: "0.4s",
                position: isMobile ? "relative" : "absolute",
                top: isMobile ? "auto" : "40px",
                right: isMobile ? "auto" : "130px",
              }}
            >
             {/* IMAGE 1 */}
<LazyLoadImage
  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400"
  alt=""
  effect="blur"
  width="100%"
  height="100%"
  style={{ objectFit: "cover" }}
/>

{/* IMAGE 2 */}


{/* IMAGE 3 */}


            </div>

            {/* IMAGE 2 */}
            <div
              style={{
                ...imageBaseStyle,
                animationDelay: "0.8s",
                position: isMobile ? "relative" : "absolute",
                bottom: isMobile ? "auto" : "0",
                right: isMobile ? "auto" : "260px",
              }}
            >
              <LazyLoadImage
  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400"
  alt=""
  effect="blur"
  width="100%"
  height="100%"
  style={{ objectFit: "cover" }}
/>
            </div>

            {/* IMAGE 3 */}
            <div
              style={{
                ...imageBaseStyle,
                animationDelay: "1.2s",
                position: isMobile ? "relative" : "absolute",
                bottom: isMobile ? "auto" : "0",
                right: isMobile ? "auto" : "0",
              }}
            >
             <LazyLoadImage
  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400"
  alt=""
  effect="blur"
  width="100%"
  height="100%"
  style={{ objectFit: "cover" }}
/>
            </div>
          </div>
        </div>

        {/* ===== ANIMATIONS ===== */}
        <style>
          {`
            @keyframes reveal {
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes revealImage {
              to {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }
          `}
        </style>
      </div>
    </Grid>
  );
}
