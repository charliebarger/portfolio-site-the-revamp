import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, fireEvent, userEvent, waitFor, within } from "storybook/test";
import MaggieMaker from "./MaggieMaker";

const meta = {
  title: "UI/MaggieMaker",
  component: MaggieMaker,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof MaggieMaker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Make more Maggies" });

    expect(canvasElement.querySelectorAll("img")).toHaveLength(0);
    await userEvent.click(button);
    await waitFor(() =>
      expect(canvasElement.querySelectorAll("img")).toHaveLength(1),
    );
    const sticker = canvasElement.querySelector("img");
    expect(sticker).not.toBeNull();
    const startingLeft = sticker!.style.getPropertyValue("--sticker-left");
    fireEvent.pointerDown(sticker!, {
      pointerId: 1,
      clientX: 100,
      clientY: 100,
    });
    fireEvent.pointerMove(sticker!, {
      pointerId: 1,
      clientX: 140,
      clientY: 120,
    });
    fireEvent.pointerUp(sticker!, {
      pointerId: 1,
      clientX: 140,
      clientY: 120,
    });
    expect(sticker!.style.getPropertyValue("--sticker-left")).not.toBe(
      startingLeft,
    );
    expect(canvasElement.querySelectorAll("img")).toHaveLength(1);
  },
};
