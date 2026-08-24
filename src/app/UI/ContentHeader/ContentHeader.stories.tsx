import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
import ContentHeader from "./ContentHeader";

const meta = {
  title: "UI/ContentHeader",
  component: ContentHeader,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  args: {
    eyebrow: "The Challenge",
    title: "Things I’ve Made Recently",
    description:
      "Mechanically ventilated ICU patients are often unable to communicate, making it difficult for nurses to assess their needs and provide individualized care. Years of research existed as a complex academic survey that needed to be transformed into a real clinical workflow. The challenge was creating an intuitive application that nurses could complete quickly during patient care while generating personalized communication plans.",
  },
} satisfies Meta<typeof ContentHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(canvas.getByText("The Challenge")).toBeInTheDocument();
    expect(
      canvas.getByRole("heading", { name: "Things I’ve Made Recently" }),
    ).toBeInTheDocument();
  },
};
