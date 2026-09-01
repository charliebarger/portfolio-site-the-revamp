import type { Metadata } from "next";
import CaseStudyPage, {
  CaseStudyHero,
} from "@/app/UI/CaseStudyPage/CaseStudyPage";

export const metadata: Metadata = {
  title: "Project FRESH | Charlie Barger",
  description: "Project FRESH case study by UI engineer Charlie Barger.",
};

export default function FreshPage() {
  return (
    <CaseStudyPage
      hero={
        <CaseStudyHero
          title="FRESH"
          whoMadeIt="Klein Buendel • University of Kentucky • University of North Texas"
          subheading="Turning behavioral research into personalized insights for first-year college students."
          description="Project FRESH is a Progressive Web App developed for a multi-university research study that helps first-year college students better understand alcohol use, cannabis use, and sexual health through recurring surveys, personalized reports, interactive visualizations, and educational tools."
          variant="mobile"
          phones={[
            {
              src: "/projects/fresh/case-study/hero-kentucky.png",
              alt: "Project FRESH University of Kentucky app",
              label: "University Of Kentucky",
            },
            {
              src: "/projects/fresh/case-study/hero-north-texas.png",
              alt: "Project FRESH University of North Texas app",
              label: "University Of North Texas",
            },
          ]}
        />
      }
      challenge={{
        title:
          "Helping students engage with long-term behavioral research through an experience designed for everyday use.",
        description:
          "Project FRESH followed students throughout their first year of college using recurring daily and weekly surveys. The application transformed responses into personalized reports, educational resources, and visual comparisons while giving researchers tools for participant management, reporting, and clinical monitoring across multiple universities.",
        challenges: [
          "Sustaining engagement over a 9-month study",
          "Recurring participant surveys",
          "Multiple universities from a shared application",
          "Sensitive behavioral health data",
        ],
        role: [
          "UI architecture and frontend development",
          "Participant and administrator experiences",
          "Reusable design system",
          "Data visualization and reporting",
        ],
      }}
      featuresTitle="One Platform. Multiple Experiences."
      featuresEyebrow="Experience Architecture"
      featuresExtra="Four role-based experiences supported students, researchers, administrators, and clinical staff."
      features={[
        {
          title: "Full Student Experience",
          description:
            "Participants completed recurring surveys and explored personalized reports, educational resources, and behavior trends throughout the study.",
          images: [
            {
              src: "/projects/fresh/case-study/student-1.png",
              alt: "Project FRESH personalized activity report",
            },
            {
              src: "/projects/fresh/case-study/student-2.png",
              alt: "Project FRESH student insights",
            },
          ],
          imageSide: "right",
          layout: "mobile",
        },
        {
          title: "Control Student Experience",
          description:
            "A focused control experience supported research requirements while preserving a clear and approachable mobile workflow.",
          images: [
            {
              src: "/projects/fresh/case-study/control-1.png",
              alt: "Project FRESH control dashboard",
            },
            {
              src: "/projects/fresh/case-study/control-2.png",
              alt: "Project FRESH control survey",
            },
          ],
          imageSide: "left",
          layout: "mobile",
        },
        {
          title: "Research Administration",
          description:
            "Administrative dashboards supported participant management, survey completion, demographic reporting, and clinical monitoring.",
          images: [
            {
              src: "/projects/fresh/case-study/admin.png",
              alt: "Project FRESH administration dashboard",
            },
          ],
          imageSide: "right",
        },
      ]}
      engineering={{
        title: "Building the Experience",
        description:
          "The application combined mobile-first participation, role-based routing, and personalized data visualization in one maintainable React platform.",
      }}
      highlights={[
        {
          title: "Progressive Web App",
          description:
            "Built an installable application participants could use like a native mobile app.",
          icon: "/projects/fresh/highlights/progressive-web-app.svg",
        },
        {
          title: "Role-Based Access",
          description:
            "Supported four distinct experiences with role-specific navigation and permissions.",
          icon: "/projects/fresh/highlights/role-based-access.svg",
        },
        {
          title: "Data Visualization",
          description:
            "Transformed survey responses into meaningful visual feedback.",
          icon: "/projects/fresh/highlights/data-visualization.svg",
        },
        {
          title: "BAC Calculator",
          description:
            "Built an educational calculator for BAC, recovery time, and impairment.",
          icon: "/projects/fresh/highlights/bac-calculator.svg",
        },
        {
          title: "Multi-University Support",
          description:
            "Used configurable branding while maintaining one shared application.",
          icon: "/projects/fresh/highlights/multi-university-support.svg",
        },
      ]}
      reflections={[
        "Project FRESH strengthened my experience building research-focused web applications and reinforced the importance of designing software around the people who use it.",
        "The project shaped how I approach reusable components, flexible data models, and maintainable frontend systems that can evolve alongside changing research requirements.",
      ]}
    />
  );
}
