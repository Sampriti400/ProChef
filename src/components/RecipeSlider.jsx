import React from "react";
import Slider from "react-slick";
import { useFetch } from "./useFetch";
import RecipeCard from "./RecipeCard";
import { Clock } from "lucide-react";
import { RECIPE_STYLES } from "./recipestyles";

const RecipeSlider = ({ title, fetchUrl }) => {
  const { data, loading } = useFetch(fetchUrl);
  const meals = data?.meals || [];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768,  settings: { slidesToShow: 2 } },
      { breakpoint: 480,  settings: { slidesToShow: 2 } },
      { breakpoint: 360,  settings: { slidesToShow: 1 } },
    ],
  };

  if (loading)
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "32px 0" }}>
        <style>{RECIPE_STYLES}</style>
        {[0,1,2].map((i) => (
          <div key={i} className="pulse-dot"
            style={{ animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite` }} />
        ))}
        <span className="font-sans"
          style={{ color: "#a8a09a", fontSize: "13px", letterSpacing: "0.1em" }}>
          Loading {title}...
        </span>
      </div>
    );

  return (
    <>
      <style>{RECIPE_STYLES}</style>
      <section style={{ marginTop: "0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <div className="glass"
            style={{
              width: "36px", height: "36px", borderRadius: "10px",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0, boxShadow: "inset 0 0 0 1px rgba(200,132,42,0.3)",
            }}>
            <Clock size={16} style={{ color: "#c8842a" }} />
          </div>
          <div>
            <p className="section-label">// Featured</p>
            <h2 className="section-title">{title}</h2>
          </div>
        </div>

        <div style={{ width: "100%", paddingBottom: "8px" }}>
          <Slider {...settings}>
            {meals.map((meal) => (
              <div key={meal.idMeal}>
                <RecipeCard meal={meal} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default RecipeSlider;