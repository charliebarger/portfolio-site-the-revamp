import type { Metadata } from "next";
import { cookies } from "next/headers";
import { fontVariableClasses } from "./fonts";
import Header from "./UI/Navigation/Header/Header";
import RouteScroll from "./UI/Navigation/RouteScroll";
import styles from "./layout.module.css";
import "./globals.css";
import "./design-system.css";
import "mapbox-gl/dist/mapbox-gl.css";

export const metadata: Metadata = {
  title: "Charlie Barger | UI Engineer",
  description:
    "Charlie Barger is a UI engineer designing and engineering thoughtful digital products from concept to production.",
  authors: [{ name: "Charlie Barger" }],
  creator: "Charlie Barger",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

const themeInitializationScript = `
  (() => {
    const root = document.documentElement;

    if (!root.dataset.theme) {
      const theme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

      root.dataset.theme = theme;
      root.style.colorScheme = theme;
    }
  })();
`;

const anchorInitializationScript = `
  (() => {
    if (location.pathname !== "/") return;
    const id = location.hash.slice(1);
    if (!["work", "about", "contact"].includes(id)) return;

    const observer = new MutationObserver(() => {
      const target = document.getElementById(id);
      if (!target) return;
      target.scrollIntoView({ behavior: "instant", block: "start" });
      observer.disconnect();
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
    document.addEventListener("DOMContentLoaded", () => observer.disconnect(), { once: true });
  })();
`;

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const themeCookie = (await cookies()).get("theme")?.value;
  const savedTheme =
    themeCookie === "light" || themeCookie === "dark" ? themeCookie : undefined;

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fontVariableClasses.join(" ")} antialiased`}
      data-theme={savedTheme}
      style={savedTheme ? { colorScheme: savedTheme } : undefined}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeInitializationScript }}
        />
        <script
          dangerouslySetInnerHTML={{ __html: anchorInitializationScript }}
        />
      </head>
      <body suppressHydrationWarning>
        <RouteScroll />
        <div className={styles.siteHeader}>
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
