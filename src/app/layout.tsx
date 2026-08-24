import type { Metadata } from "next";
import { cookies } from "next/headers";
import { fontVariableClasses } from "./fonts";
import Header from "./UI/Navigation/Header/Header";
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

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const themeCookie = (await cookies()).get("theme")?.value;
  const savedTheme =
    themeCookie === "light" || themeCookie === "dark" ? themeCookie : undefined;

  return (
    <html
      lang="en"
      className={`${fontVariableClasses.join(" ")} antialiased`}
      data-theme={savedTheme}
      style={savedTheme ? { colorScheme: savedTheme } : undefined}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializationScript }} />
      </head>
      <body suppressHydrationWarning>
        <div className={styles.siteHeader}>
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
