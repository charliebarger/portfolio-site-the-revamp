import type { Preview } from "@storybook/nextjs-vite";
import { useEffect } from "react";
import "../src/app/globals.css";
import "../src/app/design-system.css";

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Preview theme",
      defaultValue: "light",
      toolbar: {
        icon: "contrast",
        dynamicTitle: true,
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme as "light" | "dark";

      useEffect(() => {
        const root = document.documentElement;
        const previousTheme = root.dataset.theme;
        const previousColorScheme = root.style.colorScheme;
        const previousBackground = document.body.style.backgroundColor;

        root.dataset.theme = theme;
        root.style.colorScheme = theme;
        document.body.style.backgroundColor = "var(--color-surface-page)";

        return () => {
          if (previousTheme) root.dataset.theme = previousTheme;
          else delete root.dataset.theme;

          root.style.colorScheme = previousColorScheme;
          document.body.style.backgroundColor = previousBackground;
        };
      }, [theme]);

      return <Story />;
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
