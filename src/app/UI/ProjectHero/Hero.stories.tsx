import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ProjectCarousel from "../Projects/ProjectCarousel";
import ProjectHero from "../Projects/ProjectHero";
import Hero from "./Hero";

const freshCopy = {
  title: "FRESH",
  whoMadeIt:
    "Klein Buendel • University of Kentucky • University of North Texas",
  subheading:
    "Turning behavioral research into personalized insights for first-year college students.",
  description:
    "Project FRESH is a Progressive Web App developed for a multi-university research study that helps first-year college students better understand alcohol use, cannabis use, and sexual health through recurring surveys, personalized reports, interactive visualizations, and educational tools.",
};

const meta: Meta<typeof Hero> = {
  title: "UI/ProjectHero/Hero",
  component: Hero,
  decorators: [
    (Story) => (
      <ProjectHero>
        <Story />
      </ProjectHero>
    ),
  ],
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Slider: Story = {
  args: {
    title: "SPEACS",
    whoMadeIt: "Klein Buendel • The Ohio State University",
    subheading:
      "Transforming years of clinical research into an intuitive communication platform for ICU nurses.",
    description:
      "A React application that guides ICU nurses through evidence based communication assessments, generating personalized care plans that improve communication with mechanically ventilated patients.",
    variant: "slider",
    slider: (
      <ProjectCarousel
        images={[
          {
            src: "/projects/hero/speacs-slider.png",
            alt: "SPEACS patient communication application",
          },
        ]}
        label="SPEACS preview"
      />
    ),
  },
};

export const Mobile: Story = {
  args: {
    ...freshCopy,
    variant: "mobile",
    phones: [
      {
        src: "/projects/hero/fresh-kentucky.png",
        alt: "Project FRESH University of Kentucky mobile app",
        label: "University Of Kentucky",
      },
      {
        src: "/projects/hero/fresh-north-texas.png",
        alt: "Project FRESH University of North Texas mobile app",
        label: "University Of North Texas",
      },
    ],
  },
};

export const Desktop: Story = {
  args: {
    ...freshCopy,
    variant: "desktop",
    desktopImage: {
      src: "/projects/hero/fresh-desktop.png",
      alt: "Project FRESH desktop dashboard",
    },
  },
};
