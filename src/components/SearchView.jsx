import React from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import { RECIPE_STYLES } from "./Recipestyles";

const SearchView = ({ meals, loading }) => {
  return (
    <>
      <style>{RECIPE_STYLES}</style>
      <main className="page-main">
        <Link to="/" className="back-link font-sans anim-1">
          <ChevronLeft size={14} />
          Back to Dashboard
        </Link>

        {loading && (
          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "48px 0" }}>
            {[0,1,2].map((i) => (
              <div key={i} className="pulse-dot"
                style={{ animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite` }} />
            ))}
            <span className="font-sans"
              style={{ color: "#a8a09a", fontSize: "13px", letterSpacing: "0.1em" }}>
              Searching the kitchen...
            </span>
          </div>
        )}

        {!loading && meals.length > 0 && (
          <>
            <div className="anim-1" style={{ margin: "28px 0 24px" }}>
              <p className="section-label">// Results</p>
              <h2 className="section-title">
                Found{" "}
                <span style={{ color: "#c8842a" }}>{meals.length}</span> recipes
              </h2>
            </div>
            <div className="results-grid anim-2">
              {meals.map((meal, index) => (
                <RecipeCard key={index} meal={meal} />
              ))}
            </div>
          </>
        )}

        {!loading && meals.length === 0 && (
          <div className="glass anim-1"
            style={{
              marginTop: "32px", borderRadius: "2rem",
              padding: "60px 24px", textAlign: "center",
              border: "1px dashed rgba(255,255,255,0.12)",
            }}>
            <p className="font-serif"
              style={{ fontSize: "28px", fontStyle: "italic", color: "#d4cdc6", marginBottom: "8px" }}>
              No recipes found
            </p>
            <p className="font-sans" style={{ fontSize: "13px", color: "#a8a09a" }}>
              Try a different ingredient, dish, or cuisine.
            </p>
          </div>
        )}
      </main>
    </>
  );
};

export default SearchView;