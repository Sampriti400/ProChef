import React from "react";
import Slider from "react-slick";
import { useFetch } from "./useFetch";
import { Link } from "react-router-dom";
import { Flame } from "lucide-react";
import { RECIPE_STYLES } from "./recipeStyles";

const TrendingSlider = ({ title, fetchUrl }) => {
  const { data, loading } = useFetch(fetchUrl);
  const meals = data?.meals || [];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1100, settings: { slidesToShow: 5 } },
      { breakpoint: 900,  settings: { slidesToShow: 4 } },
      { breakpoint: 680,  settings: { slidesToShow: 3 } },
      { breakpoint: 480,  settings: { slidesToShow: 3 } },
      { breakpoint: 360,  settings: { slidesToShow: 2 } },
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
      <section style={{ marginTop: "48px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <div className="glass"
            style={{
              width: "36px", height: "36px", borderRadius: "10px",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0, boxShadow: "inset 0 0 0 1px rgba(200,132,42,0.3)",
            }}>
            <Flame size={16} style={{ color: "#c8842a" }} />
          </div>
          <div>
            <p className="section-label">// Trending</p>
            <h2 className="section-title">{title}</h2>
          </div>
        </div>

        <div style={{ width: "100%", overflow: "hidden" }}>
          <Slider {...settings}>
            {meals.map((meal) => (
              <div key={meal.idMeal}>
                <Link to={`/recipe/${meal.idMeal}/`} style={{ textDecoration: "none" }}>
                  <div className="recipe-card" style={{ borderRadius: "14px" }}>
                    <div className="card-border" style={{ borderRadius: "14px" }} />
                    <div style={{ padding: "10px", display: "flex", justifyContent: "center" }}>
                      <div
                        style={{
                          width: "100%",
                          aspectRatio: "1 / 1",
                          borderRadius: "10px",
                          overflow: "hidden",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                        }}
                      >
                        <img
                          src={meal?.strMealThumb}
                          alt={meal.strMeal}
                          style={{
                            width: "100%", height: "100%",
                            objectFit: "cover", display: "block",
                            transition: "transform 0.4s",
                          }}
                          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                          onMouseOut={(e)  => (e.currentTarget.style.transform = "scale(1)")}
                        />
                      </div>
                    </div>
                    <div style={{ padding: "0 8px 10px", textAlign: "center" }}>
                      <p className="font-sans"
                        style={{
                          fontSize: "10px", color: "#a8a09a",
                          letterSpacing: "0.03em", lineHeight: 1.3,
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                        }}>
                        {meal.strMeal}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default TrendingSlider;