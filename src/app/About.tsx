import Image from "next/image";
import SkillCard, { type SkillCardProps } from "./UI/Cards/SkillCard/SkillCard";
import ImageCarousel, {
  type CarouselImage,
} from "./UI/ImageCarousel/ImageCarousel";
import styles from "./about/about.module.css";

const skills: SkillCardProps[] = [
  {
    title: "Design → Frontend",
    description:
      "I enjoy transforming ideas into polished user experiences, designing interfaces in Figma and bringing them to life with React and TypeScript.",
    icon: "/about/icons/design.svg",
  },
  {
    title: "Design Systems",
    description:
      "Building reusable component libraries that keep products consistent, accessible, and easy to maintain as they grow.",
    icon: "/about/icons/systems.svg",
  },
  {
    title: "Frontend Engineering",
    description:
      "Creating responsive, performant applications using React, TypeScript, modern CSS, and scalable frontend architecture.",
    icon: "/about/icons/code.svg",
  },
  {
    title: "CSS & Motion",
    description:
      "Crafting polished interactions, smooth animations, and thoughtful micro-interactions that make software feel intuitive and enjoyable to use.",
    icon: "/about/icons/motion.svg",
  },
  {
    title: "Product Thinking",
    description:
      "Collaborating with product teams to understand user needs, simplify complex workflows, and build solutions that balance usability with business goals.",
    icon: "/about/icons/product.svg",
  },
  {
    title: "AI-Assisted Development",
    description:
      "Leveraging AI to explore ideas, speed up development, and improve workflows throughout the product lifecycle.",
    icon: "/about/icons/code.svg",
  },
];

const gallery: CarouselImage[] = [
  {
    src: "/about/gallery/snowboard.png",
    alt: "Snowboarding on a winter mountain",
    caption: "Snowboarding",
  },
  {
    src: "/about/gallery/bjj.png",
    alt: "Three friends after Brazilian Jiu-Jitsu training",
    caption: "Brazilian Jiu-Jitsu",
    href: "https://youtu.be/IAiqOynuzmE?si=6BtfYVUcKsKzidUq&t=434",
  },
  {
    src: "/about/gallery/ceramics.png",
    alt: "Handmade ceramic sculpture",
    caption: "Ceramics",
  },
  {
    src: "/about/gallery/garden.png",
    alt: "Flowers and vegetables growing in a garden",
    caption: "Gardening",
  },
  {
    src: "/about/gallery/ladder-sculpture.png",
    alt: "Person standing on a tall ladder sculpture in the water",
    caption: "Ladder Sculpture",
  },
  {
    src: "/about/gallery/surfing.png",
    alt: "Surfing a wave",
    caption: "Surfing",
  },
  {
    src: "/about/gallery/trout.png",
    alt: "Holding a trout while fly fishing",
    caption: "Fly Fishing",
  },
];

const About = () => (
  <section id="about" className={styles.page} aria-labelledby="about-title">
    <div className={styles.main}>
      <h2 id="about-title" className={styles.pageTitle}>
        Who I Am
      </h2>
      <div className={styles.about}>
        <div className={styles.aboutCopy}>
          <header className={styles.introHeader}>
            <p className={styles.eyebrow}>Hi, I’m Charlie!</p>
            <h3 className={styles.introTitle}>
              Creating software at the intersection of design and engineering.
            </h3>
          </header>
          <div className={styles.bio}>
            <p>
              I am a frontend developer and designer with a passion for
              thoughtful user experiences and clean, maintainable code. Over the
              past four years, I’ve worked across the entire frontend
              development process, collaborating with product teams to transform
              research into intuitive digital experiences, designing interfaces,
              and building scalable, accessible, and performant applications.
            </p>
            <p>
              Before I learned to code, I studied and worked in the visual arts.
              I started working with ceramics in high school, earned a BFA in
              Studio Art in college, and spent the first few years of my career
              at a bronze fine art foundry. It was there that I discovered web
              development and realized programming was simply another creative
              medium. The same excitement I found in making art, I found in
              building software, except now I could bring ideas to life
              instantly. That realization completely changed the direction of my
              career, and I’ve been building software ever since.
            </p>
            <p>
              Outside of work, I enjoy fly fishing, Brazilian Jiu-Jitsu,
              snowboarding, gardening, and spending time outdoors. Whether I’m
              exploring or working on a new creative project, I find that having
              interests beyond software helps me stay curious and brings fresh
              perspective back into my work.
            </p>
            <p>
              If you’ve made it this far, thanks for stopping by. Whether you’re
              hiring, building something interesting, or just want to connect,
              I’d love to hear from you. Don’t be a stranger!
            </p>
          </div>
        </div>
        <div className={styles.portraitFrame}>
          <Image
            className={styles.portrait}
            src="/about/portrait.png"
            alt="Charlie sitting outdoors beside a dog"
            fill
          />
        </div>
      </div>
      <section className={styles.section} aria-labelledby="work-style-title">
        <header className={styles.sectionHeader}>
          <h3 id="work-style-title" className={styles.sectionTitle}>
            How I Work
          </h3>
          <p>
            The principles and technologies that shape how I design and build
            software.
          </p>
        </header>
        <div className={styles.skillGrid}>
          {skills.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </div>
      </section>
      <section className={styles.section} aria-labelledby="things-title">
        <header className={styles.sectionHeader}>
          <h3 id="things-title" className={styles.sectionTitle}>
            Things I Like
          </h3>
          <p>
            A little window into my life, my journey, and what keeps me
            inspired.
          </p>
        </header>
        <ImageCarousel images={gallery} />
      </section>
    </div>
  </section>
);

export default About;
