import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
import Footer from "./Footer";

const meta = {
  title: "UI/Footer",
  component: Footer,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(canvas.getByText("Charlie Barger")).toBeInTheDocument();
    expect(canvas.getByText("UI Engineer")).toBeInTheDocument();
    expect(
      canvas.getByRole("navigation", { name: "Footer navigation" }),
    ).toBeInTheDocument();
    expect(canvas.getByRole("link", { name: "Home" })).toHaveAttribute(
      "href",
      "/#top",
    );
    expect(canvas.getByRole("link", { name: "Work" })).toHaveAttribute(
      "href",
      "/#work",
    );
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
};
