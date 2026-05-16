import React from "react";
import { Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { RECIPE_STYLES } from "./recipestyles";

const Cuisine = ({ filterByArea }) => {
  const featuredAreas = [
    "American","British","Canadian","Chinese",
    "Indian","Italian","Mexican","Russian","Thai",
  ];

  return (
    <>
      <style>{RECIPE_STYLES}</style>
      <div
        style={{
          backdropFilter: "blur(16px)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 24px",
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style>{`.cuisine-scroll::-webkit-scrollbar { display: none; }`}</style>
          <div
            className="cuisine-scroll"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 0",
              minWidth: "max-content",
            }}
          >
            {/* Label */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                paddingRight: "12px",
                borderRight: "1px solid rgba(255,255,255,0.1)",
                marginRight: "4px",
                flexShrink: 0,
              }}
            >
              <Globe size={13} style={{ color: "#c8842a" }} />
              <span
                className="font-sans"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.18em",
                  fontWeight: 600,
                  color: "#c8842a",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                Cuisines
              </span>
            </div>

            {featuredAreas.map((area) => (
              <Link
                to={`search/${area}`}
                key={area}
                className="cuisine-chip font-sans"
                onClick={() => filterByArea(area)}
              >
                {area}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cuisine;