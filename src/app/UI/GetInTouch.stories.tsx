import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
import GetInTouch from "./GetInTouch";

const meta = {
  title: "UI/GetInTouch",
  component: GetInTouch,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof GetInTouch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(canvas.getByText("Get In Touch")).toBeInTheDocument();
    expect(
      canvas.getByRole("link", { name: "charliebarger96@gmail.com" }),
    ).toHaveAttribute("href", "mailto:charliebarger96@gmail.com");
    expect(canvas.getByRole("link", { name: "LinkedIn" })).toBeInTheDocument();
    expect(canvas.getByRole("link", { name: "Github" })).toBeInTheDocument();
    expect(canvas.getByRole("link", { name: "Denver, Co" })).toBeInTheDocument();
  },
};
