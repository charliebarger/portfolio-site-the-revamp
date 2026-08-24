import type { Metadata } from "next";
import ProjectHero from "@/app/UI/Projects/ProjectHero";
import styles from "./speacs.module.css";
import Hero from "@/app/UI/ProjectHero/Hero";
import ProjectCarousel from "@/app/UI/Projects/ProjectCarousel";
import ContentHeader from "@/app/UI/ContentHeader/ContentHeader";
import ProjectCard from "@/app/UI/ProjectCard/ProjectCard";

const carouselImages = [
  {
    src: "/projects/speacs/carousel/1-preview.png",
    alt: "SPEACS interface preview",
  },
  {
    src: "/projects/speacs/carousel/2-past-care-plans.png",
    alt: "SPEACS past care plans interface",
  },
  {
    src: "/projects/speacs/carousel/3-workflow.png",
    alt: "SPEACS clinical workflow interface",
  },
  {
    src: "/projects/speacs/carousel/4-care-plan.png",
    alt: "SPEACS personalized care plan interface",
  },
  {
    src: "/projects/speacs/carousel/5-communication-strategies.png",
    alt: "SPEACS communication strategies interface",
  },
  {
    src: "/projects/speacs/carousel/6-home.png",
    alt: "SPEACS home interface",
  },
];

export const metadata: Metadata = {
  title: "SPEACS | Charlie Barger",
  description: "SPEACS case study by UI engineer Charlie Barger.",
};

export default function SpeacsPage() {
  return (
    <main className={styles.page}>
      <ProjectHero>
        <div className={styles.heroLayout}>
          <Hero
            title="Speacs"
            whoMadeIt="Klein Buendel • The Ohio State University"
            subheading="Transforming years of clinical research into an intuitive communication platform for ICU nurses."
            description="A React application that guides ICU nurses through evidence based communication assessments, generating personalized care plans that improve communication with mechanically ventilated patients."
          />
          <ProjectCarousel
            images={carouselImages}
            label="SPEACS interface gallery"
          />
        </div>
      </ProjectHero>

      <section className={styles.challenge} aria-labelledby="challenge-title">
        <div className={styles.challengeContent}>
          <ContentHeader
            eyebrow="The Challenge"
            titleId="challenge-title"
            title="Translating years of clinical research into a workflow nurses could use in an ICU environment."
            description="Mechanically ventilated ICU patients are often unable to traditionally communicate, making it difficult for nurses to assess their needs and provide individualized care. Years of research existed as a complex academic survey that needed to be transformed into a standalone electronic clinical workflow. The challenge was creating an intuitive application that nurses could complete quickly during patient care while generating personalized communication plans. With the end goal being providing education for the nurses so that eventually they can effectively communicate with their patients without even opening the app."
          />

          <div className={styles.challengeCards}>
            <ProjectCard
              title="Key Challenges"
              icon="check"
              listItems={[
                "Complex branching logic across multiple survey paths",
                "Workflow needed to be translated for use in busy ICU environments",
                "Difficult to validate every possible outcome",
                "Needed to balance speed, usability, and clinical accuracy",
              ]}
            />
            <ProjectCard
              title="My Role"
              icon="check"
              listItems={[
                "Product discovery & stakeholder interviews",
                "UX/UI Design & Prototyping",
                "Scalable Design System Creation",
                "Frontend Architecture & React Development",
                "Logic Documentation & Validation Strategy",
                "End-to-End Testing",
              ]}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
