import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
import NavBar from "./NavBar";

const meta = {
  title: "UI/Navigation/NavBar",
  component: NavBar,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NavBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HomeActive: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/",
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("link", { name: "Home" })).toHaveAttribute(
      "data-active",
      "true",
    );
  },
};

export const WorkActive: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/work",
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("link", { name: "Work" })).toHaveAttribute(
      "data-active",
      "true",
    );
  },
};

export const ThemeToggle: Story = {
  globals: {
    theme: "light",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole("button", {
      name: "Switch to dark mode",
    });

    await userEvent.click(toggle);

    await expect(document.documentElement).toHaveAttribute(
      "data-theme",
      "dark",
    );
    await expect(toggle).toHaveAccessibleName("Switch to light mode");
  },
};
