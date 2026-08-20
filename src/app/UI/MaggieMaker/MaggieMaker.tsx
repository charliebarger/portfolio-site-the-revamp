"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";
import Button from "@/app/UI/Button/Button";
import PawPrint from "@/assets/PawPrint.svg?react";
import styles from "./maggieMaker.module.css";

const maggieStickers = Array.from(
  { length: 9 },
  (_, index) => `/maggie/maggie-${index + 1}.png`,
);

interface Sticker {
  id: string;
  src: string;
  style: CSSProperties & Record<`--${string}`, string>;
}

interface StickerDrag {
  id: string;
  startPointerX: number;
  startPointerY: number;
  startLeft: number;
  startTop: number;
  left: number;
  top: number;
}

const MaggieMaker = () => {
  const batchRef = useRef(0);
  const removalTimersRef = useRef<number[]>([]);
  const stickerDragRef = useRef<StickerDrag | null>(null);
  const [stickers, setStickers] = useState<Sticker[]>([]);

  useEffect(
    () => () => removalTimersRef.current.forEach(window.clearTimeout),
    [],
  );

  const makeMaggies = () => {
    batchRef.current += 1;
    const batch = batchRef.current;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const src = maggieStickers[Math.floor(Math.random() * maggieStickers.length)];
    const exitTime = 4000 + Math.round(Math.random() * 3000);
    const size =
      viewportWidth < 768
        ? Math.min(
            140,
            Math.max(80, viewportWidth * (0.2 + Math.random() * 0.12)),
          )
        : Math.min(
            160,
            Math.max(48, viewportWidth * (0.075 + Math.random() * 0.06)),
          );
    const safeWidth = Math.max(0, viewportWidth - size);
    const safeHeight = Math.max(0, viewportHeight - size * 1.3);
    const newSticker: Sticker = {
      id: `${batch}`,
      src,
      style: {
        "--sticker-left": `${Math.random() * safeWidth}px`,
        "--sticker-top": `${Math.random() * safeHeight}px`,
        "--sticker-size": `${size}px`,
        "--sticker-rotation": `${Math.round(Math.random() * 70 - 35)}deg`,
        "--sticker-delay": "0ms",
        "--sticker-duration": `${exitTime}ms`,
      },
    };

    setStickers((current) => [...current, newSticker]);
    removalTimersRef.current.push(
      window.setTimeout(() => {
        setStickers((current) =>
          current.filter((sticker) => sticker.id !== `${batch}`),
        );
      }, 7200),
    );
  };

  const startDraggingSticker = (
    event: ReactPointerEvent<HTMLImageElement>,
    id: string,
  ) => {
    const computedStyle = window.getComputedStyle(event.currentTarget);
    const left = Number.parseFloat(computedStyle.left);
    const top = Number.parseFloat(computedStyle.top);
    stickerDragRef.current = {
      id,
      startPointerX: event.clientX,
      startPointerY: event.clientY,
      startLeft: left,
      startTop: top,
      left,
      top,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const dragSticker = (event: ReactPointerEvent<HTMLImageElement>) => {
    const dragState = stickerDragRef.current;
    if (!dragState) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const left = Math.min(
      Math.max(
        0,
        dragState.startLeft + event.clientX - dragState.startPointerX,
      ),
      Math.max(0, window.innerWidth - bounds.width),
    );
    const top = Math.min(
      Math.max(
        0,
        dragState.startTop + event.clientY - dragState.startPointerY,
      ),
      Math.max(0, window.innerHeight - bounds.height),
    );
    dragState.left = left;
    dragState.top = top;
    event.currentTarget.style.setProperty("--sticker-left", `${left}px`);
    event.currentTarget.style.setProperty("--sticker-top", `${top}px`);
  };

  const stopDraggingSticker = (event: ReactPointerEvent<HTMLImageElement>) => {
    const dragState = stickerDragRef.current;
    if (!dragState) return;

    setStickers((current) =>
      current.map((sticker) =>
        sticker.id === dragState.id
          ? {
              ...sticker,
              style: {
                ...sticker.style,
                "--sticker-left": `${dragState.left}px`,
                "--sticker-top": `${dragState.top}px`,
              },
            }
          : sticker,
      ),
    );
    stickerDragRef.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <>
      <div className={styles.buttonWrapper}>
        <Button
          variant="default"
          shape="default"
          text="Make more Maggies"
          iconRight={<PawPrint aria-hidden="true" focusable="false" />}
          onClick={makeMaggies}
        />
      </div>
      <div className={styles.stickerLayer} aria-hidden="true">
        {stickers.map((sticker) => (
          <Image
            key={sticker.id}
            className={styles.sticker}
            src={sticker.src}
            alt=""
            width={1122}
            height={1448}
            draggable={false}
            style={sticker.style}
            onPointerDown={(event) => startDraggingSticker(event, sticker.id)}
            onPointerMove={dragSticker}
            onPointerUp={stopDraggingSticker}
            onPointerCancel={stopDraggingSticker}
          />
        ))}
      </div>
    </>
  );
};

export default MaggieMaker;
