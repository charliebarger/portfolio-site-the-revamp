import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
import ProjectHero from "./ProjectHero";

const meta = {
  title: "UI/Projects/ProjectHero",
  component: ProjectHero,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  args: {
    children: <h1>SPEACS</h1>,
  },
} satisfies Meta<typeof ProjectHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(canvas.getByRole("heading", { name: "SPEACS" })).toBeInTheDocument();
  },
};
