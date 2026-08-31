import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Core token system — see DESIGN.md for rationale
        navy: {
          950: "#05070E", // page background
          900: "#0A0F1C", // panel background
          800: "#111A2E", // raised panel
          700: "#1B2740", // borders / dividers
        },
        graphite: "#161B22",
        electric: "#3D7BFF", // primary interactive accent
        cyan: "#4DE8E0", // secondary accent — data / signal states
        violet: "#8B7CF6", // tertiary accent — AI / agent surfaces
        gold: "#C9A24B", // VIP / premium only, used sparingly
        mist: "#E7ECF5", // soft white text on dark
        ash: "#8A93A6", // muted secondary text
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, rgba(5,7,14,1)), repeating-linear-gradient(0deg, rgba(61,123,255,0.06) 0px, rgba(61,123,255,0.06) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(61,123,255,0.06) 0px, rgba(61,123,255,0.06) 1px, transparent 1px, transparent 40px)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(61,123,255,0.25)",
        "glow-cyan": "0 0 40px rgba(77,232,224,0.18)",
      },
    },
  },
  plugins: [],
};
export default config;
