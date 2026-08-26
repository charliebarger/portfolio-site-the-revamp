"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import ArrowForward from "@/assets/arrow_forward.svg?react";
import styles from "./projectCarousel.module.css";

export interface ProjectCarouselImage {
  src: string;
  alt: string;
}

interface ProjectCarouselProps {
  images: ProjectCarouselImage[];
  label: string;
}

const ProjectCarousel = ({ images, label }: ProjectCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [trackIndex, setTrackIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const isAnimatingRef = useRef(false);
  const pointerStartXRef = useRef<number | null>(null);

  const moveToAdjacentSlide = (direction: -1 | 1) => {
    if (isAnimatingRef.current || images.length <= 1) return;

    const nextActiveIndex =
      (activeIndex + direction + images.length) % images.length;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setIsTransitioning(false);
      setTrackIndex(nextActiveIndex + 1);
      setActiveIndex(nextActiveIndex);
      return;
    }

    isAnimatingRef.current = true;
    setIsTransitioning(true);
    setTrackIndex((index) => index + direction);
    setActiveIndex(nextActiveIndex);
  };

  const showPrevious = () => moveToAdjacentSlide(-1);

  const showNext = () => moveToAdjacentSlide(1);

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const startX = pointerStartXRef.current;
    pointerStartXRef.current = null;
    if (startX === null) return;

    const distance = event.clientX - startX;
    if (Math.abs(distance) < 40) return;
    if (distance > 0) showPrevious();
    else showNext();
  };

  if (images.length === 0) return null;

  const slides = [images.at(-1)!, ...images, images[0]];

  return (
    <section
      className={styles.carousel}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") showPrevious();
        if (event.key === "ArrowRight") showNext();
      }}
    >
      <div
        className={styles.slideRow}
        onPointerDown={(event) => {
          pointerStartXRef.current = event.clientX;
        }}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => {
          pointerStartXRef.current = null;
        }}
      >
        <button
          type="button"
          className={`${styles.navigationButton} ${styles.previousButton}`}
          aria-label="Show previous project image"
          onClick={showPrevious}
        >
          <ArrowForward aria-hidden="true" focusable="false" />
        </button>

        <div className={styles.slide}>
          <div
            className={styles.track}
            style={{
              transform: `translateX(-${trackIndex * 100}%)`,
              transition: isTransitioning ? undefined : "none",
            }}
            onTransitionEnd={(event) => {
              if (event.propertyName !== "transform") return;

              isAnimatingRef.current = false;

              if (trackIndex === 0) {
                setIsTransitioning(false);
                setTrackIndex(images.length);
              } else if (trackIndex === images.length + 1) {
                setIsTransitioning(false);
                setTrackIndex(1);
              }
            }}
          >
            {slides.map((image, index) => {
              const imageIndex =
                index === 0
                  ? images.length - 1
                  : index === images.length + 1
                    ? 0
                    : index - 1;
              const isClone = index === 0 || index === images.length + 1;
              const isActive = !isClone && imageIndex === activeIndex;

              return (
                <div
                  key={`${image.src}-${index}`}
                  className={styles.slidePanel}
                  aria-hidden={!isActive}
                >
                  <Image
                    className={styles.image}
                    src={image.src}
                    alt={isActive ? image.alt : ""}
                    fill
                    sizes="(max-width: 47.999rem) calc(100vw - 4rem), (max-width: 80rem) 48vw, 600px"
                    priority={imageIndex === 0}
                    draggable={false}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          className={`${styles.navigationButton} ${styles.nextButton}`}
          aria-label="Show next project image"
          onClick={showNext}
        >
          <ArrowForward aria-hidden="true" focusable="false" />
        </button>
      </div>

      <div className={styles.indicators} aria-label="Choose project image">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className={styles.indicator}
            aria-label={`Show image ${index + 1} of ${images.length}`}
            aria-current={index === activeIndex ? "true" : undefined}
            onClick={() => {
              if (isAnimatingRef.current) return;

              setIsTransitioning(true);
              setTrackIndex(index + 1);
              setActiveIndex(index);
            }}
          />
        ))}
      </div>
      <p className={styles.status} aria-live="polite">
        Image {activeIndex + 1} of {images.length}
      </p>
    </section>
  );
};

export default ProjectCarousel;
