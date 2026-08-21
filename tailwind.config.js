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
          DEFAULT: "#FFFFFF", // Pure white for most sections
          light: "#FFFFFF",
          muted: "#F7F5F9", // Light gray/pink background for flavors section
          deep: "#3D245B", // Dark purple for banner and footer
        },
        accent: {
          DEFAULT: "#9456B7", // Vibrant purple for buttons
          light: "#A872C6", // Hover state for vibrant purple
          gold: "#C89D34", 
        },
        neutral: {
          offwhite: "#FDFBF9",
          white: "#FFFFFF",
          dark: "#3B284A", // Dark purple/grey for main text
          muted: "#7A6B85", // Muted text
          border: "#EAE5ED", // Light border
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "Montserrat", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(135deg, #FDFBF9 0%, #F4EEEB 100%)",
        "deep-gradient": "linear-gradient(135deg, #381D58 0%, #1A0D23 100%)",
        "accent-gradient": "linear-gradient(135deg, #854AA8 0%, #6B3C8A 100%)",
        "glass-card": "linear-gradient(180deg, rgba(253, 251, 249, 0.7) 0%, rgba(244, 238, 235, 0.9) 100%)",
        "glass-dark": "linear-gradient(180deg, rgba(43, 22, 68, 0.7) 0%, rgba(26, 13, 35, 0.9) 100%)",
      },
      boxShadow: {
        "accent-glow": "0 0 25px rgba(107, 60, 138, 0.15)",
        "card-shadow": "0 20px 40px rgba(0, 0, 0, 0.06)",
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
