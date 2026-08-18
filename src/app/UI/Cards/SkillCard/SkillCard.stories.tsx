import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
import SkillCard from "./SkillCard";

const meta = {
  title: "UI/SkillCard",
  component: SkillCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof SkillCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Design Systems",
    description:
      "Building reusable component libraries that keep products consistent, accessible, and easy to maintain as they grow.",
    icon: "/about/icons/systems.svg",
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole("heading", { name: args.title })).toBeInTheDocument();
    expect(canvas.getByText(args.description)).toBeInTheDocument();
  },
};
