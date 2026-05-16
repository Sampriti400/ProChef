// recipeStyles.js — Shared design system for RecipeApp
export const COLORS = {
  bg: '#0f0d0c',
  accent: '#c8842a',
  accentMuted: '#a06820',
  accentAlt: '#7a9e4e',
  surface: 'rgba(255,255,255,0.04)',
  surfaceHover: 'rgba(255,255,255,0.07)',
  textPrimary: '#f5f0eb',
  textMuted: '#a8a09a',
  textSub: '#d4cdc6',
  border: 'rgba(255,255,255,0.1)',
  borderAccent: 'rgba(200,132,42,0.3)',
  danger: '#ff6b6b',
};

export const RECIPE_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;600&family=Instrument+Serif:ital@0;1&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { -webkit-text-size-adjust: 100%; }
  body { overflow-x: hidden; }

  :root {
    --bg: #0f0d0c;
    --accent: #c8842a;
    --accent-muted: rgba(200,132,42,0.15);
    --accent-border: rgba(200,132,42,0.3);
    --green: #7a9e4e;
    --green-muted: rgba(122,158,78,0.15);
    --green-border: rgba(122,158,78,0.3);
    --text-1: #f5f0eb;
    --text-2: #d4cdc6;
    --text-3: #a8a09a;
    --border: rgba(255,255,255,0.1);
    --danger: #e07060;
  }

  .font-serif { font-family: 'Instrument Serif', serif; }
  .font-sans  { font-family: 'Barlow', sans-serif; }

  .glass {
    backdrop-filter: blur(20px);
    background: linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%);
    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.12);
  }
  .glass-strong {
    backdrop-filter: blur(40px);
    background: linear-gradient(160deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%);
    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.2), 0 24px 48px rgba(0,0,0,0.6);
  }
  .glass-accent {
    background: linear-gradient(135deg, rgba(200,132,42,0.1) 0%, rgba(255,255,255,0.02) 100%);
    box-shadow: inset 0 0 0 1px rgba(200,132,42,0.28);
  }
  .glass-green {
    background: linear-gradient(135deg, rgba(122,158,78,0.1) 0%, rgba(255,255,255,0.02) 100%);
    box-shadow: inset 0 0 0 1px rgba(122,158,78,0.28);
  }

  .bg-app { background-color: #0f0d0c; }
  .bg-grid {
    background-image:
      linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
    background-size: 64px 64px;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes spin { to { transform: rotate(360deg); } }
  @keyframes pulse {
    0%, 80%, 100% { opacity: 0.2; transform: scale(0.8); }
    40%           { opacity: 1;   transform: scale(1); }
  }

  .anim-1 { animation: fadeUp 0.5s ease both; }
  .anim-2 { animation: fadeUp 0.5s 0.1s ease both; }
  .anim-3 { animation: fadeUp 0.5s 0.2s ease both; }
  .anim-4 { animation: fadeUp 0.5s 0.3s ease both; }

  .nav-link {
    font-family: 'Barlow', sans-serif;
    font-size: 12px; letter-spacing: 0.15em; font-weight: 600;
    color: #a8a09a; text-decoration: none; transition: color 0.2s;
  }
  .nav-link:hover { color: #f5f0eb; }
  .nav-link-active { color: #f5f0eb; border-bottom: 1px solid #f5f0eb; padding-bottom: 2px; }

  .back-link {
    display: inline-flex; align-items: center; gap: 6px;
    font-family: 'Barlow', sans-serif; font-size: 12px;
    font-weight: 600; letter-spacing: 0.15em;
    color: #a8a09a; text-decoration: none; transition: color 0.2s;
  }
  .back-link:hover { color: #c8842a; }

  .section-label {
    font-family: 'Barlow', sans-serif;
    font-size: 11px; letter-spacing: 0.2em; font-weight: 600;
    color: #a8a09a; text-transform: uppercase; margin-bottom: 8px;
  }
  .section-title {
    font-family: 'Instrument Serif', serif;
    font-style: italic; font-size: 28px; color: #f5f0eb;
  }

  .recipe-card {
    position: relative; border-radius: 20px; overflow: hidden;
    background: linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%);
    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.1);
    cursor: pointer; transition: box-shadow 0.3s, transform 0.3s;
    text-decoration: none; display: block;
  }
  .recipe-card:hover {
    transform: translateY(-4px);
    box-shadow: inset 0 0 0 1px rgba(200,132,42,0.5), 0 20px 40px rgba(0,0,0,0.5);
  }
  .recipe-card .card-border {
    position: absolute; inset: 0; border-radius: 20px;
    border: 1.5px solid transparent; transition: border-color 0.3s; pointer-events: none;
  }
  .recipe-card:hover .card-border { border-color: rgba(200,132,42,0.6); }

  .pill-accent {
    font-family: 'Barlow', sans-serif; font-size: 11px;
    letter-spacing: 0.12em; font-weight: 600; text-transform: uppercase;
    background: rgba(200,132,42,0.15); color: #c8842a;
    box-shadow: inset 0 0 0 1px rgba(200,132,42,0.3);
    border-radius: 100px; padding: 5px 14px; white-space: nowrap;
  }
  .pill-green {
    font-family: 'Barlow', sans-serif; font-size: 11px;
    letter-spacing: 0.12em; font-weight: 600; text-transform: uppercase;
    background: rgba(122,158,78,0.15); color: #7a9e4e;
    box-shadow: inset 0 0 0 1px rgba(122,158,78,0.3);
    border-radius: 100px; padding: 5px 14px; white-space: nowrap;
  }

  .step-num {
    font-family: 'Instrument Serif', serif; font-style: italic;
    font-size: 22px; color: #c8842a; flex-shrink: 0;
    width: 32px; text-align: center;
  }

  .search-input {
    flex: 1; background: transparent; border: none;
    color: #f5f0eb; font-family: 'Barlow', sans-serif;
    font-size: 15px; padding: 12px 0; min-width: 0;
  }
  .search-input::placeholder { color: #a8a09a; }
  .search-input:focus { outline: none; }

  .cuisine-chip {
    font-family: 'Barlow', sans-serif; font-size: 11px;
    font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;
    color: #a8a09a; text-decoration: none; white-space: nowrap;
    padding: 6px 14px; border-radius: 100px;
    background: rgba(255,255,255,0.04);
    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.1);
    transition: color 0.2s, background 0.2s, box-shadow 0.2s;
    cursor: pointer; flex-shrink: 0;
  }
  .cuisine-chip:hover {
    color: #c8842a;
    background: rgba(200,132,42,0.1);
    box-shadow: inset 0 0 0 1px rgba(200,132,42,0.4);
  }

  .pulse-dot {
    width: 10px; height: 10px; border-radius: 50%; background: #c8842a;
  }
  .loading-wrap {
    min-height: 100vh; background: #0f0d0c;
    display: flex; align-items: center; justify-content: center; gap: 10px;
  }

  /* ── Slick gap ── */
  .slick-slide > div { padding: 0 10px; }
  .slick-list        { margin: 0 -10px; overflow: hidden; }

  /* ══════════════════════════════════════════
     RESPONSIVE BREAKPOINTS
  ══════════════════════════════════════════ */

  /* ── Navbar ── */
  .navbar-inner {
    max-width: 1100px; margin: 0 auto;
    padding: 0 24px;
    display: flex; align-items: center;
    justify-content: space-between;
    height: 64px; gap: 20px;
  }
  .navbar-search { flex: 1; max-width: 480px; display: flex; }
  .navbar-search-btn-text { display: inline; }
  @media (max-width: 768px) {
    .navbar-search { max-width: 320px; }
  }
  @media (max-width: 540px) {
    .navbar-inner { padding: 0 16px; gap: 12px; height: 58px; }
    .navbar-search { max-width: unset; flex: 1; }
    .navbar-search-btn-text { display: none; }
    .navbar-home-link { display: none; }
  }

  /* ── Mobile search bar below nav ── */
  .mobile-search-bar { display: none; }
  @media (max-width: 380px) {
    .mobile-search-bar {
      display: flex; align-items: center; gap: 10px;
      padding: 10px 16px;
      background: rgba(15,13,12,0.9);
      border-bottom: 1px solid rgba(255,255,255,0.07);
    }
  }

  /* ── Page padding ── */
  .page-main {
    max-width: 1100px; margin: 0 auto;
    padding: 40px 24px 80px;
  }
  @media (max-width: 768px)  { .page-main { padding: 32px 20px 60px; } }
  @media (max-width: 480px)  { .page-main { padding: 24px 14px 50px; } }

  /* ── Hero title ── */
  .hero-title {
    font-family: 'Instrument Serif', serif;
    font-style: italic; font-weight: 400; color: #f5f0eb;
    line-height: 1.1; font-size: 52px;
  }
  @media (max-width: 768px)  { .hero-title { font-size: 38px; } }
  @media (max-width: 480px)  { .hero-title { font-size: 28px; } }

  /* ── Detail title ── */
  .detail-title {
    font-family: 'Instrument Serif', serif;
    font-style: italic; font-weight: 400; color: #f5f0eb;
    line-height: 1.15; font-size: 38px;
  }
  @media (max-width: 768px)  { .detail-title { font-size: 28px; } }
  @media (max-width: 480px)  { .detail-title { font-size: 22px; } }

  /* ── Detail hero (image + ingredients side by side) ── */
  .detail-hero {
    display: flex; gap: 40px; flex-wrap: wrap;
  }
  .detail-hero-left  { flex: 1 1 300px; min-width: 0; }
  .detail-hero-right { flex: 1 1 280px; min-width: 0; }
  @media (max-width: 640px) {
    .detail-hero { gap: 24px; }
  }

  /* ── Detail image ── */
  .detail-img-wrap {
    width: 340px; height: 340px; border-radius: 20px; overflow: hidden;
    box-shadow: 0 20px 60px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(200,132,42,0.3);
    max-width: 100%;
  }
  @media (max-width: 480px) {
    .detail-img-wrap { width: 100%; height: 220px; }
  }

  /* ── Detail card padding ── */
  .detail-card-pad { padding: 36px; }
  @media (max-width: 640px)  { .detail-card-pad { padding: 20px 16px; } }

  /* ── Ingredients grid ── */
  .ingredients-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 6px 20px;
  }
  @media (max-width: 400px) {
    .ingredients-grid { grid-template-columns: 1fr; }
  }

  /* ── Category grid ── */
  .category-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 12px;
  }
  @media (max-width: 480px) {
    .category-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
  }

  /* ── Search results grid ── */
  .results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
  @media (max-width: 640px) {
    .results-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
  }
  @media (max-width: 360px) {
    .results-grid { grid-template-columns: 1fr; gap: 12px; }
  }

  /* ── Section title on mobile ── */
  @media (max-width: 480px) {
    .section-title { font-size: 20px; }
  }

  input:focus { outline: none; }
`;