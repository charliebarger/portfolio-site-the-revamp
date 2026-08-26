import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
import HighlightCard from "./HighlightCard";

const meta = {
  title: "UI/Cards/HighlightCard",
  component: HighlightCard,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  args: {
    title: "Responsive User Experience",
    description:
      "Designed and developed responsive interfaces with Tailwind CSS, optimized for everyday mobile use.",
  },
} satisfies Meta<typeof HighlightCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      canvas.getByRole("heading", { name: "Responsive User Experience" }),
    ).toBeInTheDocument();
    await expect(
      canvas.getByText(/optimized for everyday mobile use/i),
    ).toBeInTheDocument();
  },
};
