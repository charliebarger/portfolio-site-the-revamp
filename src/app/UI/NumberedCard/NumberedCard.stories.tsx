import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
import NumberedCard from "./NumberedCard";

const meta = {
  title: "UI/NumberedCard",
  component: NumberedCard,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  args: {
    eyebrow: "The Challenge",
    number: "01",
    title: "Things I’ve Made Recently",
    titleId: "numbered-card-title",
    description:
      "Mechanically ventilated ICU patients are often unable to communicate, making it difficult for nurses to assess their needs and provide individualized care. Years of research existed as a complex academic survey that needed to be transformed into a real clinical workflow.",
    image: {
      src: "/projects/speacs/carousel/1-preview.png",
      alt: "SPEACS clinical communication interface",
    },
  },
} satisfies Meta<typeof NumberedCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(
      canvas.getByRole("heading", { name: "Things I’ve Made Recently" }),
    ).toBeInTheDocument();
    expect(
      canvas.getByAltText("SPEACS clinical communication interface"),
    ).toBeInTheDocument();
  },
};
