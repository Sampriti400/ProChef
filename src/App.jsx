import React, { useCallback, useState } from "react";
import Navbar from "./components/Navbar";
import RecipeDetailView from "./components/RecipeDetailView";
import SearchView from "./components/SearchView";
import CuisineBar from "./components/Cuisine";
import HomeView from "./components/HomeView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RECIPE_STYLES } from "./components/RecipeStyles";

const API_URL = "https://www.themealdb.com/api/json/v1/1/";

/* ── Ambient blobs (decorative, fixed) ─────────────────────────── */
const Blobs = () => (
  <>
    <div style={{
      position: "fixed", pointerEvents: "none", zIndex: 0,
      borderRadius: "50%", filter: "blur(120px)", opacity: 0.08,
      width: "500px", height: "500px",
      background: "#c8842a", top: "-100px", left: "-100px",
    }} />
    <div style={{
      position: "fixed", pointerEvents: "none", zIndex: 0,
      borderRadius: "50%", filter: "blur(100px)", opacity: 0.06,
      width: "400px", height: "400px",
      background: "#7a9e4e", bottom: "10%", right: "-80px",
    }} />
  </>
);

const App = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  const filterRecipe = useCallback(async (query, filterType) => {
    setSearchResult([]);
    setSearchLoading(true);
    try {
      const res = await fetch(`${API_URL}filter.php?${filterType}=${query}`);
      if (!res.ok) throw new Error(`Error: ${res.status}`);
      const result = await res.json();
      setSearchResult(result?.meals || []);
    } catch (error) {
      console.log(error);
    } finally {
      setSearchLoading(false);
    }
  }, []);

  const filterByCategory = useCallback(
    (category) => filterRecipe(category, "c"), [filterRecipe]
  );

  const filterByArea = useCallback(
    (area) => filterRecipe(area, "a"), [filterRecipe]
  );

  const handleSearch = useCallback(async (query) => {
    setSearchResult([]);
    setSearchLoading(true);
    try {
      const res = await fetch(`${API_URL}search.php?s=${query}`);
      if (!res.ok) throw new Error(`Error: ${res.status}`);
      const result = await res.json();
      setSearchResult(result?.meals || []);
    } catch (error) {
      console.log(error);
    } finally {
      setSearchLoading(false);
    }
  }, []);

  return (
    <Router>
      <style>{RECIPE_STYLES}</style>
      <div
        className="bg-app bg-grid"
        style={{
          minHeight: "100vh",
          fontFamily: "'Barlow', sans-serif",
          color: "#f5f0eb",
          position: "relative",
        }}
      >
        <Blobs />

        {/* All UI above blobs */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <Navbar handleSearch={handleSearch} />
          <CuisineBar filterByArea={filterByArea} />

          <Routes>
            <Route
              path="/"
              element={<HomeView filterByCategory={filterByCategory} />}
            />
            <Route path="/recipe/:id" element={<RecipeDetailView />} />
            <Route
              path="/search/:query"
              element={
                <SearchView meals={searchResult} loading={searchLoading} />
              }
            />
          </Routes>

          {/* Footer */}
          <footer
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              padding: "24px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              className="font-sans"
              style={{
                fontSize: "12px",
                color: "#a8a09a",
                letterSpacing: "0.05em",
              }}
            >
              © 2026 ProChef · All Rights Reserved
            </p>
          </footer>
        </div>
      </div>
    </Router>
  );
};

export default App;