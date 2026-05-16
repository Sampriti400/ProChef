import React from "react";
import { Link } from "react-router-dom";
import { RECIPE_STYLES } from "./recipeStyles";

const RecipeCard = ({ meal }) => {
  return (
    <>
      <style>{RECIPE_STYLES}</style>
      <Link to={`/recipe/${meal.idMeal}`} className="recipe-card">
        <div className="card-border" />

        <div
          style={{
            padding: "16px 16px 0",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              aspectRatio: "1 / 1",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow:
                "0 8px 24px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(200,132,42,0.25)",
            }}
          >
            <img
              src={meal?.strMealThumb}
              alt={meal.strMeal}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transition: "transform 0.5s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.07)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </div>
        </div>

        <div style={{ padding: "14px 16px 18px", textAlign: "center" }}>
          <h3
            className="font-serif"
            style={{
              fontSize: "16px",
              fontStyle: "italic",
              color: "#f5f0eb",
              lineHeight: 1.35,
              transition: "color 0.2s",
            }}
          >
            {meal.strMeal}
          </h3>
        </div>
      </Link>
    </>
  );
};

export default RecipeCard;