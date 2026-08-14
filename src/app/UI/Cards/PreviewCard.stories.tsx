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
    img: {
      src: "/projects/speacs/placeholder.png",
      alt: "Fresh clinical communication platform preview",
      width: 300,
      height: 250,
    },
    href: "/projects",
    text: {
      title: "Fresh",
      subtext: "Klein Buendel • The Ohio State University",
      description:
        "Clinical communication platform helping ICU nurses generate personalized care plans for mechanically ventilated patients.",
      pills: ["UX Design", "Product Design"],
    },
  },
};

export const Right: Story = {
  args: {
    ...Left.args,
    side: "right",
  },
};
