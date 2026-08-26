"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./imageCarousel.module.css";

export interface CarouselImage {
  src: string;
  alt: string;
  caption: string;
  href?: string;
  position?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const dragDistanceRef = useRef(0);
  const pointerStartXRef = useRef(0);
  const lastPointerXRef = useRef(0);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const track = viewport.firstElementChild;
    const firstSlide = track?.children[0];
    const repeatedFirstSlide = track?.children[images.length];
    if (
      !(firstSlide instanceof HTMLElement) ||
      !(repeatedFirstSlide instanceof HTMLElement)
    )
      return;

    viewport.scrollLeft = repeatedFirstSlide.offsetLeft - firstSlide.offsetLeft;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;
    let previousTime = performance.now();
    let distance = 0;

    const move = (time: number) => {
      if (!reduceMotion.matches && !isDraggingRef.current) {
        distance += (time - previousTime) * 0.025;
        const wholePixels = Math.floor(distance);
        if (wholePixels > 0) {
          viewport.scrollLeft += wholePixels;
          distance -= wholePixels;
        }
      } else {
        distance = 0;
      }
      previousTime = time;
      animationFrame = requestAnimationFrame(move);
    };

    animationFrame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(animationFrame);
  }, [images]);

  const resetLoop = () => {
    const viewport = viewportRef.current;
    const track = viewport?.firstElementChild;
    const firstSlide = track?.children[0];
    const repeatedFirstSlide = track?.children[images.length];
    if (
      !viewport ||
      !(firstSlide instanceof HTMLElement) ||
      !(repeatedFirstSlide instanceof HTMLElement)
    )
      return;

    const loopWidth = repeatedFirstSlide.offsetLeft - firstSlide.offsetLeft;
    if (viewport.scrollLeft <= 0) viewport.scrollLeft += loopWidth;
    if (viewport.scrollLeft >= loopWidth * 2) viewport.scrollLeft -= loopWidth;
  };

  const startDragging = (event: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    dragDistanceRef.current = 0;
    pointerStartXRef.current = event.clientX;
    lastPointerXRef.current = event.clientX;
  };

  const drag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const movement = event.clientX - lastPointerXRef.current;
    lastPointerXRef.current = event.clientX;
    dragDistanceRef.current = Math.max(
      dragDistanceRef.current,
      Math.abs(event.clientX - pointerStartXRef.current),
    );
    if (event.pointerType === "touch") return;

    if (
      dragDistanceRef.current > 12 &&
      !event.currentTarget.hasPointerCapture(event.pointerId)
    ) {
      event.currentTarget.setPointerCapture(event.pointerId);
    }

    event.currentTarget.scrollLeft -= movement;
  };

  const stopDragging = (event: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div
      ref={viewportRef}
      className={styles.viewport}
      role="region"
      aria-label="Things I like image carousel"
      tabIndex={0}
      onScroll={resetLoop}
      onPointerDown={startDragging}
      onPointerMove={drag}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
      onDragStart={(event) => event.preventDefault()}
      onClickCapture={(event) => {
        if (dragDistanceRef.current > 12) event.preventDefault();
        dragDistanceRef.current = 0;
      }}
    >
      <div className={styles.track}>
        {[...images, ...images, ...images].map((image, index) => {
          const isPrimaryCopy =
            index >= images.length && index < images.length * 2;
          const content = (
            <>
              <Image
                className={styles.image}
                src={image.src}
                alt={isPrimaryCopy ? image.alt : ""}
                fill
                sizes="260px"
                draggable={false}
                style={{ objectPosition: image.position }}
              />
              <figcaption className={styles.caption}>
                {image.caption}
              </figcaption>
            </>
          );

          return (
            <figure
              className={styles.slide}
              key={`${image.src}-${index}`}
              tabIndex={isPrimaryCopy && !image.href ? 0 : -1}
            >
              {image.href ? (
                <a
                  className={styles.slideLink}
                  href={image.href}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={isPrimaryCopy ? 0 : -1}
                  aria-label={`${image.caption}: open video`}
                >
                  {content}
                </a>
              ) : (
                content
              )}
            </figure>
          );
        })}
      </div>
    </div>
  );
};

export default ImageCarousel;
