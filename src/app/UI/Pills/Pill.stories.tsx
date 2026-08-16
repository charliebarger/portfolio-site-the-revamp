import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
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
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    expect(canvas.getByText(args.text)).toBeInTheDocument();
  },
};

export const LongText: Story = {
  args: {
    text: "User experience design",
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    expect(canvas.getByText(args.text)).toBeInTheDocument();
  },
};
