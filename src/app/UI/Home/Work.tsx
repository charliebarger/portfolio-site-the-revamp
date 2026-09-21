"use client";

import PreviewCard, { type PreviewCardProps } from "@/app/UI/Cards/PreviewCard";
import Timeline from "@/assets/timeline.svg?react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "./work.module.css";

const projects: PreviewCardProps[] = [
  {
    side: "left",
    img: {
      src: "/projects/speacs/preview4.png",
      alt: "Speacs patient communication support guide shown on a laptop",
      preload: true,
    },
    text: {
      title: "Speacs",
      subtext: "Klein Buendel • The Ohio State University",
      description:
        "Clinical communication platform helping ICU nurses generate personalized care plans for mechanically ventilated patients.",
      pills: ["Design System", "Dynamic Workflows", "Frontend Architecture"],
    },
    href: "/projects/speacs",
  },
  {
    side: "right",
    img: {
      src: "/projects/ezparent/preview2.png",
      alt: "ezParent program logo on a blue and purple background",
    },
    text: {
      title: "ezParent",
      subtext: "Klein Buendel • Ohio State University",
      description:
        "An evidence-based parenting platform for parents, facilitators, and researchers.",
      pills: ["Interactive Learning", "Research Collaboration", "Localization"],
    },
    href: "/projects/ezparent",
  },
  {
    side: "left",
    img: {
      src: "/projects/fitbrothers/preview22.png",
      alt: "FitBrothers mobile dashboard displayed on a phone",
    },
    text: {
      title: "FitBrothers",
      subtext: "Klein Buendel • Louisiana State University",
      description:
        "A mobile health platform that combined wearable technology, personalized goals, and gamification to encourage long-term healthy habits.",
      pills: ["Wearable Integration", "Data Visualization", "Gamification"],
    },
    href: "/projects/fitbrothers",
  },
  {
    side: "right",
    img: {
      src: "/projects/fresh/preview2.png",
      alt: "Project FRESH survey displayed on a phone",
    },
    text: {
      title: "Project FRESH",
      subtext:
        "Klein Buendel • University of Kentucky • University of North Texas",
      description:
        "Behavior change research platform helping first-year college students better understand alcohol use, cannabis use, and sexual health through personalized insights and longitudinal surveys.",
      pills: ["Role-Based Access", "Progressive Web App", "Data Visualization"],
    },
    href: "/projects/fresh",
  },
];

interface StarParticle {
  id: number;
  style: CSSProperties & Record<`--${string}`, string>;
}

interface StarBurst {
  id: number;
  particles: StarParticle[];
}

const particleColors = [
  "var(--color-primary-400)",
  "var(--color-secondary-400)",
  "var(--color-vivid-400)",
  "var(--color-success-400)",
];

const createStarParticles = (intensity: number): StarParticle[] =>
  Array.from(
    { length: 8 + intensity * 3 + Math.floor(Math.random() * 5) },
    (_, index) => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 42 + intensity * 8 + Math.random() * 48;

      return {
        id: Date.now() + index,
        style: {
          "--particle-x": `${Math.cos(angle) * distance}px`,
          "--particle-y": `${Math.sin(angle) * distance}px`,
          "--particle-r": `${Math.round(Math.random() * 300 - 150)}deg`,
          "--particle-size": `${10 + Math.round(Math.random() * 8)}px`,
          "--particle-delay": `${Math.round(Math.random() * 90)}ms`,
          "--particle-color":
            particleColors[Math.floor(Math.random() * particleColors.length)],
        },
      };
    },
  );

export default function Work() {
  const workRef = useRef<HTMLElement>(null);
  const sparkleAudioRef = useRef<HTMLAudioElement | null>(null);
  const burstCountRef = useRef(0);
  const burstTimeoutsRef = useRef<number[]>([]);
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);
  const [timelineColor, setTimelineColor] = useState(0);
  const [starBursts, setStarBursts] = useState<StarBurst[]>([]);

  useEffect(() => {
    const work = workRef.current;
    if (!work) return;

    const startTimelineAtTop = () => {
      const bounds = work.getBoundingClientRect();
      if (bounds.top > 1 || bounds.bottom <= 0) return;

      setIsTimelineVisible(true);
      window.removeEventListener("scroll", startTimelineAtTop);
    };

    window.addEventListener("scroll", startTimelineAtTop);
    const frame = window.requestAnimationFrame(startTimelineAtTop);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", startTimelineAtTop);
    };
  }, []);

  useEffect(
    () => () => {
      burstTimeoutsRef.current.forEach(window.clearTimeout);
      sparkleAudioRef.current?.pause();
    },
    [],
  );

  const celebrateTimeline = () => {
    burstCountRef.current += 1;
    const nextBurst = burstCountRef.current;

    setTimelineColor((color) => {
      const nextColor = Math.floor(Math.random() * (particleColors.length - 1));
      return nextColor >= color ? nextColor + 1 : nextColor;
    });
    setStarBursts((bursts) => [
      ...bursts,
      { id: nextBurst, particles: createStarParticles(nextBurst) },
    ]);

    const timeout = window.setTimeout(() => {
      setStarBursts((bursts) =>
        bursts.filter((burst) => burst.id !== nextBurst),
      );
    }, 900);
    burstTimeoutsRef.current.push(timeout);
    sparkleAudioRef.current ??= new Audio("/audio/sparkle.wav");
    const audio = sparkleAudioRef.current;
    audio.volume = 0.15;
    audio.currentTime = 0;
    void audio.play().catch(() => {
      // Keep the celebration working if audio playback is unavailable.
    });
  };

  return (
    <section
      ref={workRef}
      id="work"
      className={styles.work}
      aria-labelledby="work-title"
    >
      <header className={`${styles.header} page-section-header`}>
        <h2 id="work-title" className="text-section-title">
          Things I’ve Made Recently
        </h2>
        <button
          type="button"
          className={styles.timeline}
          data-animate={isTimelineVisible}
          data-color={timelineColor}
          aria-label="Celebrate projects from 2022 to today"
          title="Change the timeline color and celebrate"
          onClick={celebrateTimeline}
        >
          <span className={styles.timelineStart}>2022</span>
          <Timeline className={styles.timelineGraphic} aria-hidden="true" />
          <span className={styles.timelineEnd}>Today</span>
          {starBursts.map((burst) => (
            <span key={burst.id} className={styles.confetti} aria-hidden="true">
              {burst.particles.map((particle) => (
                <span key={particle.id} style={particle.style}>
                  ★
                </span>
              ))}
            </span>
          ))}
        </button>
      </header>

      <div className={styles.projectList}>
        {projects.map((project) => (
          <PreviewCard key={project.text.title} {...project} />
        ))}
      </div>
    </section>
  );
}
