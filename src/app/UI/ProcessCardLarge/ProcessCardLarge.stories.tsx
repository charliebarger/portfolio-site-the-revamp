import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ProcessCardLarge from "./ProcessCardLarge";

const placeholder = {
  src: "/projects/speacs/process/process-card-placeholder.png",
  alt: "SPEACS product interface",
};

const meta = {
  title: "UI/ProcessCardLarge",
  component: ProcessCardLarge,
  parameters: { layout: "padded" },
  args: {
    title: "Things I’ve Made Recently",
    description:
      "Mechanically ventilated ICU patients are often unable to communicate, making it difficult for nurses to assess their needs and provide individualized care. Years of research existed as a complex academic survey that needed to be transformed into a real clinical workflow. The challenge was creating an intuitive application that nurses could complete quickly during patient care while generating personalized communication plans.",
    images: [placeholder, placeholder, placeholder],
  },
} satisfies Meta<typeof ProcessCardLarge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImageRight: Story = {};

export const ImageLeft: Story = {
  args: { imageSide: "left" },
};

export const ImagesBottom: Story = {
  args: { imageSide: "bottom" },
};

export const ImagesBottomBordered: Story = {
  args: { imageSide: "bottom-border" },
};

export const MobileImagesRight: Story = {
  args: { layout: "mobile" },
};
