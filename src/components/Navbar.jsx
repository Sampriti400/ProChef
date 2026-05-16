import React, { useState } from "react";
import { Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { RECIPE_STYLES } from "./recipestyles";

const Navbar = ({ handleSearch }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      handleSearch(input.trim());
      navigate(`search/${input}`);
      setInput("");
    }
  };

  return (
    <>
      <style>{RECIPE_STYLES}</style>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(24px)",
          background:
            "linear-gradient(180deg, rgba(15,13,12,0.96) 0%, rgba(15,13,12,0.88) 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="navbar-inner">
          {/* Logo */}
          <Link
            to="/"
            className="font-serif"
            style={{
              fontSize: "22px",
              fontStyle: "italic",
              fontWeight: 400,
              color: "#f5f0eb",
              textDecoration: "none",
              flexShrink: 0,
              letterSpacing: "0.01em",
            }}
          >
            <span style={{ color: "#c8842a" }}>Pro</span>Chef
          </Link>

          {/* Search — hidden at 380px, shown on mobile as icon-only */}
          <form
            onSubmit={searchHandler}
            className="navbar-search"
            style={{ flex: 1 }}
          >
            <div
              className="glass"
              style={{
                flex: 1,
                borderRadius: "100px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "0 14px 0 18px",
              }}
            >
              <Search size={16} style={{ color: "#a8a09a", flexShrink: 0 }} />
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search dishes, ingredients..."
                className="search-input font-sans"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="font-sans"
                style={{
                  background: input.trim()
                    ? "rgba(200,132,42,0.9)"
                    : "rgba(200,132,42,0.25)",
                  border: "none",
                  borderRadius: "100px",
                  color: input.trim() ? "#0f0d0c" : "#a8a09a",
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  fontWeight: 600,
                  padding: "7px 16px",
                  cursor: input.trim() ? "pointer" : "not-allowed",
                  transition: "all 0.2s",
                  flexShrink: 0,
                  whiteSpace: "nowrap",
                }}
              >
                <span className="navbar-search-btn-text">SEARCH</span>
                {/* Icon-only on very small screens */}
                <Search
                  size={14}
                  style={{ display: "none" }}
                  className="navbar-search-btn-icon"
                />
              </button>
            </div>
          </form>

          {/* Home link — hidden on mobile */}
          <div className="navbar-home-link" style={{ flexShrink: 0 }}>
            <Link to="/" className="nav-link nav-link-active">
              Home
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;