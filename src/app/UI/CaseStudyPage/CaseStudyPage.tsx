import type { ComponentProps, ReactNode } from "react";
import ContentHeader from "../ContentHeader/ContentHeader";
import HighlightCard from "../Cards/HighlightCard/HighlightCard";
import ReflectionsCard from "../Cards/ReflectionsCard/ReflectionsCard";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectHero from "../Projects/ProjectHero";
import Hero from "../ProjectHero/Hero";
import ProcessCardLarge, {
  type ProcessCardLargeImage,
} from "../ProcessCardLarge/ProcessCardLarge";
import styles from "./caseStudyPage.module.css";

export interface CaseStudyFeature {
  title: string;
  description: string;
  images: ProcessCardLargeImage[];
  imageSide?: "right" | "left" | "bottom" | "bottom-border";
  layout?: "desktop" | "mobile";
  width?: "fill" | "hug";
}

export interface CaseStudyHighlight {
  title: string;
  description: string;
  icon?: string;
}

interface CaseStudyPageProps {
  hero: ReactNode;
  challenge: {
    title: string;
    description: string;
    challenges: string[];
    role: string[];
  };
  featuresTitle: string;
  featuresEyebrow?: string;
  featuresExtra?: string;
  features: CaseStudyFeature[];
  engineering?: { title: string; description: string };
  highlights: CaseStudyHighlight[];
  reflections: string[];
}

export const CaseStudyHero = (props: ComponentProps<typeof Hero>) => (
  <ProjectHero>
    <Hero {...props} />
  </ProjectHero>
);

export default function CaseStudyPage({
  hero,
  challenge,
  featuresTitle,
  featuresEyebrow = "Key Features",
  featuresExtra,
  features,
  engineering,
  highlights,
  reflections,
}: CaseStudyPageProps) {
  return (
    <main className={styles.page}>
      {hero}
      <section className={styles.section}>
        <div className={styles.content}>
          <ContentHeader
            eyebrow="The Challenge"
            title={challenge.title}
            description={challenge.description}
          />
          <div className={styles.twoColumns}>
            <ProjectCard
              title="Key Challenges"
              icon="check"
              listItems={challenge.challenges}
            />
            <ProjectCard
              title="My Role"
              icon="check"
              listItems={challenge.role}
            />
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.content}>
          <ContentHeader
            eyebrow={featuresEyebrow}
            title={featuresTitle}
            extraInfo={featuresExtra}
          />
          <div className={styles.featureStack}>
            {features.map((feature) => (
              <ProcessCardLarge key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>
      {engineering && (
        <section className={styles.section}>
          <div className={styles.content}>
            <ContentHeader
              eyebrow="Engineering"
              title={engineering.title}
              description={engineering.description}
            />
          </div>
        </section>
      )}
      <section className={styles.section}>
        <div className={styles.content}>
          <ContentHeader title="Technical Highlights" />
          <div className={styles.highlightGrid}>
            {highlights.map((item) => (
              <HighlightCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.content}>
          <ContentHeader title="Reflections" />
          <ReflectionsCard paragraphs={reflections} />
        </div>
      </section>
    </main>
  );
}
