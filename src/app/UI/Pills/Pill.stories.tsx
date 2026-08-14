import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Pill from "./Pill";

const meta = {
  title: "UI/Pill",
  component: Pill,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Pill>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Hello World",
  },
};

export const LongText: Story = {
  args: {
    text: "User experience design",
  },
};
