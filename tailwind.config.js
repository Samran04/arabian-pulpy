/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1F0B30", // Lighter shade of base
          dark: "#13071E", // User requested base hex
          light: "#2B0F43", // Lightest shade
          deep: "#0A0310", // Deepest shade for contrast
        },
        accent: {
          DEFAULT: "#5E4377", // Muted Deep Purple
          light: "#755990",
        },
        neutral: {
          offwhite: "#F7F4F8",
          white: "#FFFFFF",
          dark: "#17131C",
          muted: "#b39fa3", // Warm muted text matching garnet
          border: "#4d1d28",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "Montserrat", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(135deg, #2B0F43 0%, #13071E 50%, #0A0310 100%)",
        "accent-gradient": "linear-gradient(135deg, #755990 0%, #5E4377 100%)",
        "glass-card": "linear-gradient(180deg, rgba(43, 15, 67, 0.4) 0%, rgba(19, 7, 30, 0.8) 100%)",
      },
      boxShadow: {
        "accent-glow": "0 0 25px rgba(197, 163, 235, 0.45)",
        "card-shadow": "0 20px 40px rgba(0, 0, 0, 0.4)",
      },
      borderRadius: {
        'sm': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '14px',
      }
    },
  },
  plugins: [],
};
