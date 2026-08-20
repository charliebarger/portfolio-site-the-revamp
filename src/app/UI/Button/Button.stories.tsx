import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import Button from "./Button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    kind: "button",
    type: "button",
    text: "Button",
    shape: "default",
    onClick: fn(),
  },
  argTypes: {
    kind: {
      control: "select",
      options: ["button", "link"],
    },
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
    },
    variant: {
      control: "select",
      options: ["default", "outline", "transparent"],
    },
    shape: {
      control: "select",
      options: ["default", "pill"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Button" });

    await userEvent.click(button);

    expect(args.onClick).toHaveBeenCalledOnce();
  },
};

export const Disabled: Story = {
  args: {
    variant: "default",
    disabled: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Button" });

    expect(button).toBeDisabled();

    await userEvent.click(button);

    expect(args.onClick).not.toHaveBeenCalled();
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Transparent: Story = {
  args: {
    variant: "transparent",
  },
};

export const Pill: Story = {
  args: {
    variant: "default",
    shape: "pill",
  },
};

export const Link: Story = {
  args: {
    kind: "link",
    href: "/projects",
    variant: "outline",
    shape: "pill",
    text: "View projects",
    type: undefined,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole("link", { name: "View projects" });

    expect(link).toHaveAttribute("href", "/projects");
  },
};
