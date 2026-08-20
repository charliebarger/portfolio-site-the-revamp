import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
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
      src: "/projects/speacs/preview.png",
      alt: "Fresh clinical communication platform preview",
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
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    expect(canvas.getByText(args.text.title)).toBeInTheDocument();
    expect(canvas.getByText(args.text.description)).toBeInTheDocument();
    for (const pill of args.text.pills) {
      expect(canvas.getByText(pill)).toBeInTheDocument();
    }

    const link = canvas.getByRole("link");
    expect(link).toHaveAttribute("href", args.href);
  },
};

export const Right: Story = {
  args: {
    ...Left.args,
    side: "right",
  },
};
