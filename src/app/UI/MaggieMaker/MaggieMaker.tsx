"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
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

const MaggieMaker = () => {
  const batchRef = useRef(0);
  const removalTimersRef = useRef<number[]>([]);
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
    const size = Math.min(
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
          />
        ))}
      </div>
    </>
  );
};

export default MaggieMaker;
