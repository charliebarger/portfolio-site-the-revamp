import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, fn, waitFor, within } from "storybook/test";
import LocationMap from "./LocationMap";

const originalFetch = globalThis.fetch;

const meta = {
  title: "UI/LocationMap",
  component: LocationMap,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  beforeEach: () => {
    globalThis.fetch = fn(() => Promise.reject(new Error("Location unavailable")));
    return () => {
      globalThis.fetch = originalFetch;
    };
  },
} satisfies Meta<typeof LocationMap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unavailable: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(
      canvas.getByLabelText("Map showing the distance between you and Denver"),
    ).toBeInTheDocument();
    await waitFor(() =>
      expect(canvas.getByText("The map is temporarily unavailable.")).toBeInTheDocument(),
    );
    expect(globalThis.fetch).toHaveBeenCalledWith(
      "/api/location",
      expect.objectContaining({ cache: "no-store" }),
    );
  },
};
