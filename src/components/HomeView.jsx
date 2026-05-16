import React from "react";
import RecipeSlider from "./RecipeSlider";
import TrendingRecipe from "./TredingRecipe";
import CategorySection from "./CategorySelection";
import { API_URL } from "./useFetch";
import { RECIPE_STYLES } from "./recipestyles";

const HomeView = ({ filterByCategory }) => {
  return (
    <>
      <style>{RECIPE_STYLES}</style>
      <main className="page-main">
        <div className="anim-1" style={{ marginBottom: "36px" }}>
          <p className="font-sans section-label">// Welcome to ProChef</p>
          <h1 className="hero-title">
            Discover{" "}
            <span style={{ color: "#c8842a" }}>delicious</span> recipes
          </h1>
        </div>

        <div className="anim-2">
          <RecipeSlider
            title="Staff Curated Picks"
            fetchUrl={`${API_URL}search.php?f=c`}
          />
        </div>

        <div className="anim-3">
          <TrendingRecipe
            title="Quick & Easy Meals"
            fetchUrl={`${API_URL}filter.php?a=Canadian`}
          />
        </div>

        <div className="anim-4">
          <CategorySection filterByCategory={filterByCategory} />
        </div>
      </main>
    </>
  );
};

export default HomeView;