import type { Metadata } from "next";
import CaseStudyPage, {
  CaseStudyHero,
} from "@/app/UI/CaseStudyPage/CaseStudyPage";

export const metadata: Metadata = {
  title: "FitBrothers | Charlie Barger",
  description: "FitBrothers case study by UI engineer Charlie Barger.",
};

export default function FitBrothersPage() {
  return (
    <CaseStudyPage
      hero={
        <CaseStudyHero
          title="FitBrothers"
          compactTitle
          whoMadeIt="Klein Buendel • Pennington Biomedical Research Center"
          subheading="Supporting long-term healthy habits through wearable technology, personalized goals, and community engagement."
          description="FitBrothers is a mobile-first web application developed for a nine-month health intervention designed to encourage physical activity among African American men. The platform combined Fitbit integration, personalized goal tracking, educational content, challenges, rewards, and health insights into a single engaging experience."
          variant="mobile"
          phones={[
            {
              src: "/projects/fitbrothers/case-study/hero-1.png",
              alt: "FitBrothers goals screen",
              label: "",
            },
            {
              src: "/projects/fitbrothers/case-study/hero-2.png",
              alt: "FitBrothers activity dashboard",
              label: "",
            },
          ]}
        />
      }
      challenge={{
        title: "Encouraging engagement beyond activity tracking",
        description:
          "The application needed to do more than synchronize Fitbit data. Participants used the platform throughout a nine-month intervention, making long-term engagement as important as accurate activity tracking.",
        challenges: [
          "Nine-month health intervention",
          "Fitbit data integration",
          "Long-term participant engagement",
          "Mobile-first daily use",
        ],
        role: [
          "Frontend development and UX",
          "Wearable data integration",
          "Interaction and visual design",
          "Responsive application architecture",
        ],
      }}
      featuresTitle="Key Features"
      featuresExtra="Rather than functioning as a single feature, FitBrothers combined multiple systems that reinforced one another throughout the study."
      features={[
        {
          title: "Personalized Goals",
          description:
            "Weekly activity goals adapted to each participant and translated wearable data into clear, motivating progress.",
          images: [
            {
              src: "/projects/fitbrothers/case-study/goals.png",
              alt: "FitBrothers personalized goals",
            },
          ],
          imageSide: "right",
          layout: "mobile",
          width: "hug",
        },
        {
          title: "Activity & Health Tracking",
          description:
            "Dashboards brought activity, weight, and health trends together in one understandable mobile experience.",
          images: [
            {
              src: "/projects/fitbrothers/case-study/tracking.png",
              alt: "FitBrothers health tracking",
            },
          ],
          imageSide: "left",
          layout: "mobile",
          width: "hug",
        },
        {
          title: "Challenges & Competition",
          description:
            "Friendly challenges and social comparison encouraged participants to stay active together.",
          images: [
            {
              src: "/projects/fitbrothers/case-study/challenges.png",
              alt: "FitBrothers challenge screen",
            },
          ],
          imageSide: "right",
          layout: "mobile",
          width: "hug",
        },
        {
          title: "Rewards & Gamification",
          description:
            "Points, badges, and rewards made progress visible and helped sustain engagement.",
          images: [
            {
              src: "/projects/fitbrothers/case-study/rewards.png",
              alt: "FitBrothers rewards",
            },
          ],
          imageSide: "left",
          layout: "mobile",
          width: "hug",
        },
        {
          title: "Educational Content",
          description:
            "Flexible articles, audio, and video resources connected daily activity with practical health education.",
          images: [
            {
              src: "/projects/fitbrothers/case-study/content.png",
              alt: "FitBrothers educational content",
            },
          ],
          imageSide: "right",
          layout: "mobile",
          width: "hug",
        },
      ]}
      engineering={{
        title: "Engineering for responsive interactions",
        description:
          "Built a mobile-first application around responsive interaction patterns, synchronized server state, wearable data, and fast feedback. Reusable components and thoughtful loading states kept a feature-rich product cohesive and responsive.",
      }}
      highlights={[
        {
          title: "Fitbit Integration",
          description:
            "Synchronized wearable activity data throughout the intervention.",
        },
        {
          title: "Server State Management",
          description:
            "Used TanStack Query for caching and data synchronization.",
        },
        {
          title: "Data Visualization",
          description:
            "Built interactive charts for activity and health trends.",
        },
        {
          title: "Flexible Content Platform",
          description:
            "Supported articles, embedded audio, and video resources.",
        },
        {
          title: "Responsive User Experience",
          description: "Optimized everyday interactions for mobile use.",
        },
        {
          title: "Performance & Feedback",
          description:
            "Used loading skeletons, optimistic updates, and thoughtful state management.",
        },
      ]}
      reflections={[
        "FitBrothers reinforced the importance of designing beyond individual features. Goals, wearable data, educational content, rewards, and challenges each solved a different problem, but the real challenge was creating an experience that felt cohesive rather than disconnected.",
      ]}
    />
  );
}
