import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, waitFor, within } from "storybook/test";
import MaggieMaker from "./MaggieMaker";

const meta = {
  title: "UI/MaggieMaker",
  component: MaggieMaker,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof MaggieMaker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Make more Maggies" });

    expect(canvasElement.querySelectorAll("img")).toHaveLength(0);
    await userEvent.click(button);
    await waitFor(() =>
      expect(canvasElement.querySelectorAll("img")).toHaveLength(1),
    );
  },
};
