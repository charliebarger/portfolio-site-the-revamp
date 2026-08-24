import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
import ProjectCarousel from "./ProjectCarousel";

const images = [
  {
    src: "/projects/speacs/carousel/1-preview.png",
    alt: "First SPEACS screen",
  },
  {
    src: "/projects/speacs/carousel/2-past-care-plans.png",
    alt: "Second SPEACS screen",
  },
];

const meta = {
  title: "UI/Projects/ProjectCarousel",
  component: ProjectCarousel,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    images,
    label: "SPEACS interface gallery",
  },
} satisfies Meta<typeof ProjectCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const carousel = canvas.getByRole("region", {
      name: "SPEACS interface gallery",
    });

    expect(within(carousel).getByAltText("First SPEACS screen")).toBeInTheDocument();
    await userEvent.click(
      within(carousel).getByRole("button", { name: "Show next project image" }),
    );
    expect(within(carousel).getByAltText("Second SPEACS screen")).toBeInTheDocument();
    expect(within(carousel).getByText("Image 2 of 2")).toBeInTheDocument();
  },
};
