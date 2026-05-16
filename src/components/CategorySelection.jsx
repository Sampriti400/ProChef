import React from "react";
import { Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import { RECIPE_STYLES } from "./recipeStyles";

const CategorySelection = ({ filterByCategory }) => {
  const featuredCategories = [
    "Chicken","Dessert","Seafood","Vegetarian",
    "Breakfast","Pasta","Goat","Pork","Lamb",
  ];

  return (
    <>
      <style>{RECIPE_STYLES}</style>
      <section style={{ marginTop: "56px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <div className="glass"
            style={{
              width: "36px", height: "36px", borderRadius: "10px",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0, boxShadow: "inset 0 0 0 1px rgba(200,132,42,0.3)",
            }}>
            <Utensils size={16} style={{ color: "#c8842a" }} />
          </div>
          <div>
            <p className="section-label">// Browse</p>
            <h2 className="section-title">Filter by Category</h2>
          </div>
        </div>

        <div className="category-grid">
          {featuredCategories.map((cat, index) => (
            <Link
              to={`search/${cat}`}
              key={index}
              onClick={() => filterByCategory(cat)}
              style={{ textDecoration: "none" }}
            >
              <div
                className="glass font-sans"
                style={{
                  borderRadius: "14px",
                  padding: "18px 12px",
                  textAlign: "center",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  color: "#d4cdc6",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#c8842a";
                  e.currentTarget.style.boxShadow = "inset 0 0 0 1px rgba(200,132,42,0.45)";
                  e.currentTarget.style.background = "rgba(200,132,42,0.08)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "#d4cdc6";
                  e.currentTarget.style.boxShadow = "inset 0 0 0 1px rgba(255,255,255,0.12)";
                  e.currentTarget.style.background =
                    "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)";
                }}
              >
                {cat}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default CategorySelection;