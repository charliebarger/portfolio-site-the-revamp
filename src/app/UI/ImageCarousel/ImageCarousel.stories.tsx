import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
import ImageCarousel from "./ImageCarousel";

const meta = {
  title: "UI/ImageCarousel",
  component: ImageCarousel,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  args: {
    images: [
      {
        src: "/about/gallery/snowboard.png",
        alt: "Charlie snowboarding",
        caption: "Snowboarding",
      },
      {
        src: "/about/gallery/ceramics.png",
        alt: "Handmade ceramics",
        caption: "Ceramics",
      },
      {
        src: "/about/gallery/surfing.png",
        alt: "Charlie surfing",
        caption: "Surfing",
        href: "https://example.com/surfing",
      },
    ],
  },
} satisfies Meta<typeof ImageCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const carousel = canvas.getByRole("region", {
      name: "Things I like image carousel",
    });

    expect(carousel).toBeInTheDocument();
    expect(canvas.getByAltText("Charlie snowboarding")).toBeInTheDocument();
    expect(canvas.getByAltText("Handmade ceramics")).toBeInTheDocument();
    expect(canvas.getByAltText("Charlie surfing")).toBeInTheDocument();

    const primaryLink = carousel.querySelector('a[tabindex="0"]');
    expect(primaryLink).toHaveAttribute("href", "https://example.com/surfing");
    expect(primaryLink).toHaveAttribute("rel", "noreferrer");
  },
};
