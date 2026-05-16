import React from "react";
import { useParams, Link } from "react-router-dom";
import { useFetch, API_URL } from "./useFetch";
import { ChevronLeft, Utensils, BookOpen } from "lucide-react";
import { RECIPE_STYLES } from "./recipestyles";

const RecipeDetailView = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(`${API_URL}lookup.php?i=${id}`);
  const meal = data?.meals?.[0];

  if (loading)
    return (
      <div className="loading-wrap">
        <style>{RECIPE_STYLES}</style>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="pulse-dot"
            style={{
              animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>
    );

  if (!meal) return null;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: measure ? measure.trim() : "",
      });
    }
  }

  const instructions = meal.strInstructions
    ? meal.strInstructions
        .split(".")
        .map((s) => s.trim())
        .filter((s) => s.length > 10)
    : [];

  return (
    <>
      <style>{RECIPE_STYLES}</style>
      <main
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "40px 24px 80px",
        }}
      >
        {/* Back link */}
        <Link to="/" className="back-link font-sans anim-1">
          <ChevronLeft size={14} />
          Back to Dashboard
        </Link>

        {/* Hero section */}
        <div
          className="glass-strong anim-2"
          style={{
            borderRadius: "2rem",
            padding: "40px",
            marginTop: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "40px",
              flexWrap: "wrap",
            }}
          >
            {/* Left: image + title */}
            <div style={{ flex: "1 1 340px" }}>
              <p className="section-label">// Recipe</p>
              <h1
                className="font-serif"
                style={{
                  fontSize: "42px",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#f5f0eb",
                  lineHeight: 1.15,
                  marginBottom: "24px",
                }}
              >
                {meal?.strMeal}
              </h1>

              <div
                style={{
                  width: "340px",
                  height: "340px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow:
                    "0 20px 60px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(200,132,42,0.3)",
                  maxWidth: "100%",
                }}
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>

            {/* Right: ingredients */}
            <div style={{ flex: "1 1 300px" }}>
              {/* Card */}
              <div
                className="glass"
                style={{ borderRadius: "1.5rem", overflow: "hidden" }}
              >
                {/* Card header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "20px 24px",
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    className="glass-accent"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Utensils size={18} style={{ color: "#c8842a" }} />
                  </div>
                  <div>
                    <h2
                      className="font-serif"
                      style={{
                        fontSize: "22px",
                        fontStyle: "italic",
                        color: "#f5f0eb",
                        marginBottom: "2px",
                      }}
                    >
                      Key Ingredients
                    </h2>
                    <p
                      className="font-sans"
                      style={{ fontSize: "12px", color: "#a8a09a" }}
                    >
                      {ingredients.length} items
                    </p>
                  </div>
                </div>

                {/* Ingredients list */}
                <ul
                  style={{
                    listStyle: "none",
                    padding: "16px 24px",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "6px 20px",
                  }}
                >
                  {ingredients.map((item, index) => (
                    <li
                      key={index}
                      className="font-sans"
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        fontSize: "13px",
                        color: "#d4cdc6",
                        padding: "4px 0",
                      }}
                    >
                      <span
                        style={{
                          color: "#c8842a",
                          fontSize: "16px",
                          lineHeight: 1,
                          flexShrink: 0,
                          marginTop: "1px",
                        }}
                      >
                        ›
                      </span>
                      <span>
                        <span
                          style={{ color: "#f5f0eb", fontWeight: 600 }}
                        >
                          {item.measure}
                        </span>{" "}
                        {item.ingredient}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div
                  style={{
                    padding: "16px 24px 20px",
                    borderTop: "1px solid rgba(255,255,255,0.07)",
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                  }}
                >
                  {meal.strCategory && (
                    <span className="pill-accent font-sans">
                      {meal.strCategory}
                    </span>
                  )}
                  {meal.strArea && (
                    <span className="pill-green font-sans">{meal.strArea}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="anim-3" style={{ marginTop: "32px" }}>
          {/* Section header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "20px",
            }}
          >
            <div
              className="glass"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                boxShadow: "inset 0 0 0 1px rgba(200,132,42,0.3)",
              }}
            >
              <BookOpen size={16} style={{ color: "#c8842a" }} />
            </div>
            <div>
              <p className="section-label">// How to make it</p>
              <h2 className="section-title">Preparation Steps</h2>
            </div>
          </div>

          <ol style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
            {instructions.map((step, index) => (
              <li
                key={index}
                className="glass"
                style={{
                  borderRadius: "16px",
                  padding: "18px 22px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  transition: "background 0.2s, box-shadow 0.2s",
                  cursor: "default",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background =
                    "rgba(200,132,42,0.06)";
                  e.currentTarget.style.boxShadow =
                    "inset 0 0 0 1px rgba(200,132,42,0.25)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <span className="step-num">{index + 1}</span>
                <span
                  className="font-sans"
                  style={{
                    fontSize: "15px",
                    color: "#d4cdc6",
                    lineHeight: 1.7,
                    paddingTop: "2px",
                  }}
                >
                  {step.trim()}.
                </span>
              </li>
            ))}
          </ol>
        </div>
      </main>
    </>
  );
};

export default RecipeDetailView;