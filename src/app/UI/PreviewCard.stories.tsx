import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import PreviewCard from "./PreviewCard";

const meta = {
  title: "UI/PreviewCard",
  component: PreviewCard,
} satisfies Meta<typeof PreviewCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Left: Story = {
  args: {
    side: "left",
    img: "/next.svg",
    href: "/projects",
    text: {
      title: "Project Title",
      subtext: "2026",
      description: "A short description of the project goes here.",
      pills: ["Next.js", "TypeScript"],
    },
  },
};

export const Right: Story = {
  args: {
    ...Left.args,
    side: "right",
  },
};
