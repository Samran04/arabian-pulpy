import { Playfair_Display, Outfit, Montserrat } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../src/context/CartContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Arabian Pulp - Pure Arabian Essence | Natural Pulp Drink",
  description:
    "India's premier natural fruit pulp drink brand. Savor rich Alphonso Mango, Pomegranate, Lychee Fresh, Orange, Mint Nectar, and Grape Salt pulp beverages.",
  keywords: ["Arabian Pulp", "Natural Fruit Pulp", "Alphonso Mango Pulp", "Pomegranate Juice", "Pure Fruit Drink"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable} ${montserrat.variable} scroll-smooth`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  localStorage.removeItem('theme');
                  document.documentElement.classList.remove('light');
                } catch (e) {}
                const observer = new MutationObserver((mutations) => {
                  for (let mutation of mutations) {
                    if (mutation.type === 'attributes' && mutation.target.hasAttribute('fdprocessedid')) {
                      mutation.target.removeAttribute('fdprocessedid');
                    } else if (mutation.type === 'childList') {
                      for (let node of mutation.addedNodes) {
                        if (node.nodeType === 1) {
                          if (node.hasAttribute('fdprocessedid')) {
                            node.removeAttribute('fdprocessedid');
                          }
                          const elements = node.querySelectorAll('[fdprocessedid]');
                          for (let el of elements) {
                            el.removeAttribute('fdprocessedid');
                          }
                        }
                      }
                    }
                  }
                });
                observer.observe(document.documentElement, {
                  childList: true,
                  subtree: true,
                  attributes: true,
                  attributeFilter: ['fdprocessedid']
                });
              })();
            `,
          }}
        />
      </head>
      <body className="bg-primary-deep text-neutral-offwhite font-sans antialiased selection:bg-primary selection:text-neutral-white">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
