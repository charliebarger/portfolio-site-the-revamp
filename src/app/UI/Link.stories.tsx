import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
import Mail from "@/assets/mail.svg?react";
import ContactLink from "./Link";

const meta = {
  title: "UI/ContactLink",
  component: ContactLink,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    href: "mailto:charliebarger96@gmail.com",
    text: "Email Charlie",
    icon: <Mail aria-hidden="true" />,
  },
} satisfies Meta<typeof ContactLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole("link", { name: args.text });

    expect(link).toHaveAttribute("href", args.href);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer");
  },
};

export const ActionIcon: Story = {
  args: { iconColor: "action" },
};
