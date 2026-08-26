import type { Metadata } from "next";
import CaseStudyPage, {
  CaseStudyHero,
} from "@/app/UI/CaseStudyPage/CaseStudyPage";

export const metadata: Metadata = {
  title: "ezParent | Charlie Barger",
  description: "ezParent case study by UI engineer Charlie Barger.",
};

export default function EzParentPage() {
  return (
    <CaseStudyPage
      hero={
        <CaseStudyHero
          title="ezParent"
          whoMadeIt="Klein Buendel • Ohio State University"
          subheading="An evidence-based parenting platform for parents, facilitators, and researchers."
          description="Over four years, I collaborated closely with university researchers to evolve ezParent through multiple grant-funded studies. What began as a digital learning experience for parents expanded into a complete platform with facilitator training, role-based administration, and dashboards for monitoring engagement across multiple research sites."
          variant="desktop"
          desktopImage={{
            src: "/projects/ezparent/case-study/hero.png",
            alt: "ezParent learning platform",
          }}
        />
      }
      challenge={{
        title:
          "Growing an evidence-based parenting program into a complete digital platform.",
        description:
          "ezParent began as an evidence-based parenting intervention and evolved across multiple studies. Parents needed an approachable learning experience, facilitators needed guided training, and research teams needed reliable administration and reporting tools.",
        challenges: [
          "Multiple connected user experiences",
          "Complex research workflows",
          "Long-running, grant-funded development",
          "Sensitive participant data",
        ],
        role: [
          "Frontend architecture",
          "Interaction and visual design",
          "Reusable component systems",
          "Researcher collaboration",
        ],
      }}
      featuresTitle="Supporting Three Connected Experiences"
      featuresEyebrow="The Platform"
      features={[
        {
          title: "Helping parents learn through interaction.",
          description:
            "Interactive lessons translated evidence-based parenting strategies into approachable activities, videos, reflection prompts, and practice.",
          images: [
            {
              src: "/projects/ezparent/case-study/parents-1.png",
              alt: "ezParent parent lesson",
            },
            {
              src: "/projects/ezparent/case-study/parents-2.png",
              alt: "ezParent parent activity",
            },
            {
              src: "/projects/ezparent/case-study/parents-3.png",
              alt: "ezParent interactive exercise",
            },
          ],
          imageSide: "bottom",
        },
        {
          title:
            "Preparing facilitators before they support participating families.",
          description:
            "Training workflows combined course material, practice tools, and progress tracking for facilitators.",
          images: [
            {
              src: "/projects/ezparent/case-study/facilitators-1.png",
              alt: "ezParent facilitator training",
            },
            {
              src: "/projects/ezparent/case-study/facilitators-2.png",
              alt: "ezParent facilitator dashboard",
            },
            {
              src: "/projects/ezparent/case-study/facilitators-3.png",
              alt: "ezParent facilitator activity",
            },
          ],
          imageSide: "bottom",
        },
        {
          title: "Turning research data into actionable insights.",
          description:
            "Role-based dashboards gave research teams visibility into enrollment, participant progress, completion, and site activity.",
          images: [
            {
              src: "/projects/ezparent/case-study/research-1.png",
              alt: "ezParent research dashboard",
            },
            {
              src: "/projects/ezparent/case-study/research-2.png",
              alt: "ezParent reporting calendar",
            },
          ],
          imageSide: "bottom-border",
        },
      ]}
      engineering={{
        title: "Designing workflows that scaled with the platform.",
        description:
          "One of the largest design challenges was creating reusable workflows that could support parents, facilitators, and researchers without forcing every new study to reinvent the experience. I designed shared patterns for navigation, onboarding, progress, and administration while preserving the needs of each role.",
      }}
      highlights={[
        {
          title: "Interactive Learning Platform",
          description:
            "Built reusable learning experiences around video, reflection, and practice.",
        },
        {
          title: "Localization",
          description:
            "Supported content and workflows across audiences and study sites.",
        },
        {
          title: "Role-Based Experiences",
          description:
            "Created distinct experiences for parents, facilitators, and researchers.",
        },
        {
          title: "Dashboard Design",
          description:
            "Made participant and program activity visible to research teams.",
        },
        {
          title: "Usability Testing",
          description:
            "Iterated alongside researchers and participants over multiple studies.",
        },
      ]}
      reflections={[
        "Working on ezParent has been one of the most meaningful experiences of my career because the platform evolved from a single parent program into a broader ecosystem supporting parents, facilitators, and research teams.",
        "The project strengthened how I translate research needs into clear product experiences and build systems that can evolve over time.",
      ]}
    />
  );
}
