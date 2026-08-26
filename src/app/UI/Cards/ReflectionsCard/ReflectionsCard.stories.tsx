import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
import ReflectionsCard from "./ReflectionsCard";

const meta = {
  title: "UI/Cards/ReflectionsCard",
  component: ReflectionsCard,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  args: {
    paragraphs: [
      "Project FRESH strengthened my experience building research-focused web applications and reinforced the importance of designing software around the people who use it. Working closely with researchers while developing a platform for students, administrators, and study staff challenged me to think beyond individual screens and consider how an application supports multiple users within a single product.",
      "The project also shaped how I approach application architecture. Building a survey-driven application highlighted the importance of designing systems that remain flexible as workflows evolve. Those lessons influenced many of the architectural decisions I later made while developing SPEACS, where I placed a greater emphasis on reusable components, dynamic workflows, and maintainable application structure.",
    ],
  },
} satisfies Meta<typeof ReflectionsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByLabelText("Project reflections")).toBeVisible();
    await expect(
      canvas.getByText(/Project FRESH strengthened my experience/i),
    ).toBeVisible();
  },
};
