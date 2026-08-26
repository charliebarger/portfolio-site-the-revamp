import type { Metadata } from "next";
import ProjectHero from "@/app/UI/Projects/ProjectHero";
import styles from "./speacs.module.css";
import Hero from "@/app/UI/ProjectHero/Hero";
import ProjectCarousel from "@/app/UI/Projects/ProjectCarousel";
import ContentHeader from "@/app/UI/ContentHeader/ContentHeader";
import ProjectCard from "@/app/UI/ProjectCard/ProjectCard";
import ProcessCard from "@/app/UI/ProcessCard/ProcessCard";
import NumberedCard from "@/app/UI/NumberedCard/NumberedCard";
import HighlightCard from "@/app/UI/Cards/HighlightCard/HighlightCard";
import ReflectionsCard from "@/app/UI/Cards/ReflectionsCard/ReflectionsCard";
import Scroll from "@/assets/scroll.svg?react";
import Clipboard from "@/assets/clipboard.svg?react";
import Brain from "@/assets/brain.svg?react";
import Paint from "@/assets/paint.svg?react";
import ReactIcon from "@/assets/react.svg?react";
import Hospital from "@/assets/Hospital.svg?react";
import ArrowForward from "@/assets/arrow_forward.svg?react";

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

const processSteps = [
  { description: "Research Paper", icon: <Scroll aria-hidden="true" /> },
  {
    description: "Clinical Assessment",
    icon: <Clipboard aria-hidden="true" />,
  },
  { description: "Logic Mapping", icon: <Brain aria-hidden="true" /> },
  {
    description: "Figma & Design System",
    icon: <Paint aria-hidden="true" />,
  },
  { description: "React App", icon: <ReactIcon aria-hidden="true" /> },
  { description: "Hospital Pilot", icon: <Hospital aria-hidden="true" /> },
];

const detailedProcessSteps = [
  {
    number: "01",
    title: "Understanding the Problem",
    description:
      "Collaborated with researchers and clinicians to understand how years of evidence based communication research could fit into real ICU workflows. The goal was to create an experience nurses could complete quickly during patient care while producing personalized communication plans that also reinforced best practices for future patient interactions.",
    image: {
      src: "/projects/speacs/process/01-understanding-the-problem-figma.png",
      alt: "Research notes and source materials used to understand the SPEACS clinical workflow",
    },
  },
  {
    number: "02",
    title: "Untangling the Logic",
    description:
      "The original assessment existed as a deeply branched Qualtrics survey that was difficult to understand, validate, and maintain. I worked closely with researchers and project managers through multiple design sessions to document the decision logic, simplify complex branching paths, and translate the assessment into a clear implementation plan before a single line of code was written.",
    image: {
      src: "/projects/speacs/process/02-untangling-the-logic-figma.png",
      alt: "A detailed logic map of the SPEACS clinical assessment",
    },
  },
  {
    number: "03",
    title: "Designing the Experience",
    description:
      "Designed the application's interface and design system in Figma with a focus on the realities of the ICU environment. Large touch targets, clear visual hierarchy, accessible color contrast, and streamlined interactions reduced cognitive load so nurses could complete assessments quickly, even during frequent interruptions.",
    image: {
      src: "/projects/speacs/process/03-designing-the-experience-figma.png",
      alt: "SPEACS interface designs arranged in Figma",
    },
  },
  {
    number: "04",
    title: "Building the Application",
    description:
      "Built the frontend in Vite, React, and TypeScript around reusable components and a dynamic questionnaire engine that could support complex decision trees. Leveraged TanStack Router, React Query, and Zustand to create a scalable architecture with offline support, printable care plans, and responsive layouts.",
    image: {
      src: "/projects/speacs/process/04-building-the-application-figma.png",
      alt: "SPEACS application code in a development environment",
    },
  },
  {
    number: "05",
    title: "Testing Complex Logic",
    description:
      "After translating the assessment into a maintainable decision tree, I wrote automated Vitest tests to validate both the questionnaire's branching logic and the personalized care plans generated from each response path. This made it possible to confidently evolve the application without introducing regressions.",
    image: {
      src: "/projects/speacs/process/05-testing-complex-logic-figma.png",
      alt: "Automated tests validating the SPEACS questionnaire logic",
    },
  },
];

const technicalHighlights = [
  {
    title: "Component Library",
    description:
      "Built a reusable React component library that powered the application's forms, navigation, care plans, and shared interface patterns. Using Storybook, I developed components in isolation before integrating them into the application, improving consistency and accelerating development.",
    icon: "/projects/speacs/highlights/component-library.svg",
  },
  {
    title: "Branching Logic",
    description:
      "Designed a flexible questionnaire architecture capable of rendering dynamic question flows and generating personalized care plans from each patient's assessment without hardcoding individual survey paths.",
    icon: "/projects/speacs/highlights/branching-logic.svg",
  },
  {
    title: "Design System",
    description:
      "Designed the application's design system in Figma using semantic design tokens for typography, color, spacing, and surfaces. Implemented those tokens in React by extending Tailwind, creating a consistent foundation that scaled across the application.",
    icon: "/projects/speacs/highlights/design-system.svg",
  },
  {
    title: "Clinical UX",
    description:
      "Optimized the interface for busy ICU environments with large touch targets, responsive layouts, clear visual hierarchy, and accessible interactions that minimized cognitive load.",
    icon: "/projects/speacs/highlights/clinical-ux.svg",
  },
  {
    title: "Automated Testing",
    description:
      "Wrote automated Vitest tests to validate questionnaire logic and generated care plans, making it easier to evolve the application without unintentionally breaking existing behavior.",
    icon: "/projects/speacs/highlights/automated-testing.svg",
  },
];

const projectOutcomes = [
  {
    title: "Deployed for Clinical Evaluation",
    description:
      "Deployed to multiple hospitals as part of an initial research rollout to evaluate the platform in real clinical environments.",
    icon: "/projects/speacs/highlights/clinical-evaluation.svg",
  },
  {
    title: "Personalized Communication Plans",
    description:
      "Generated individualized communication plans tailored to each patient's assessment, helping nurses better communicate with mechanically ventilated patients.",
    icon: "/projects/speacs/highlights/communication-plans.svg",
  },
  {
    title: "Supports Shift Handoffs",
    description:
      "Created printable care plans that made recommendations easy to reference, share, and use between nursing shifts.",
    icon: "/projects/speacs/highlights/shift-handoffs.svg",
  },
  {
    title: "Research into Practice",
    description:
      "Transformed years of academic communication research into a practical digital workflow that clinicians could realistically use during patient care.",
    icon: "/projects/speacs/highlights/research-practice.svg",
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
        <Hero
          title="Speacs"
          whoMadeIt="Klein Buendel • The Ohio State University"
          subheading="Transforming years of clinical research into an intuitive communication platform for ICU nurses."
          description="A React application that guides ICU nurses through evidence based communication assessments, generating personalized care plans that improve communication with mechanically ventilated patients."
          variant="slider"
          slider={
            <ProjectCarousel
              images={carouselImages}
              label="SPEACS interface gallery"
            />
          }
        />
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

      <section className={styles.process} aria-labelledby="process-title">
        <div className={styles.processContent}>
          <ContentHeader
            title="From Research to Product"
            titleId="process-title"
          />

          <div className={styles.processFlow}>
            {processSteps.map((step, index) => (
              <div className={styles.processItem} key={step.description}>
                <div className={styles.processStep}>
                  <ProcessCard description={step.description} svg={step.icon} />
                </div>
                {index < processSteps.length - 1 && (
                  <ArrowForward
                    className={styles.processArrow}
                    aria-hidden="true"
                    focusable="false"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className={styles.detailedProcess}
        aria-labelledby="detailed-process-title"
      >
        <div className={styles.detailedProcessContent}>
          <ContentHeader title="My Process" titleId="detailed-process-title" />

          <div className={styles.numberedCards}>
            {detailedProcessSteps.map((step) => (
              <NumberedCard
                key={step.number}
                number={step.number}
                eyebrow={`Step ${step.number}`}
                title={step.title}
                titleId={`process-step-${step.number}`}
                description={step.description}
                image={step.image}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        className={styles.summarySection}
        aria-labelledby="technical-highlights-title"
      >
        <div className={styles.summaryContent}>
          <ContentHeader
            title="Technical Highlights"
            titleId="technical-highlights-title"
          />
          <div className={styles.highlightGrid}>
            {technicalHighlights.map((highlight) => (
              <HighlightCard key={highlight.title} {...highlight} />
            ))}
          </div>
        </div>
      </section>

      <section
        className={styles.summarySection}
        aria-labelledby="project-outcomes-title"
      >
        <div className={styles.summaryContent}>
          <ContentHeader
            title="Project Outcomes"
            titleId="project-outcomes-title"
          />
          <div className={styles.highlightGrid}>
            {projectOutcomes.map((outcome) => (
              <HighlightCard key={outcome.title} {...outcome} />
            ))}
          </div>
        </div>
      </section>

      <section
        className={styles.summarySection}
        aria-labelledby="reflections-title"
      >
        <div className={styles.summaryContent}>
          <ContentHeader
            eyebrow="Reflection"
            title="Reflections"
            titleId="reflections-title"
          />
          <ReflectionsCard
            paragraphs={[
              "This project reinforced that good software is as much about communication as it is about implementation. Before any code was written, the hardest challenge was translating years of research, complex branching logic, and stakeholder knowledge into something everyone could understand. Once the problem was clearly defined, building the application became an exercise in creating an experience that felt simple despite the complexity beneath it.",
            ]}
          />
        </div>
      </section>
    </main>
  );
}
