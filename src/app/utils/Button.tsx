import React, { useEffect, useRef, ReactNode } from "react";
// import styles from "./style.module.scss";
import gsap from "gsap";

interface IndexProps {
  children: ReactNode;
  backgroundColor?: string;
  [key: string]: any;
}

const Button: React.FC<IndexProps> = ({
  children,
  backgroundColor = "#1F2937",
  ...attributes
}) => {
  const circle = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const timeoutId = useRef<number | null>(null);

  useEffect(() => {
    if (circle.current) {
      timeline.current = gsap.timeline({ paused: true });
      timeline.current
        .to(
          circle.current,
          { top: "-25%", width: "150%", duration: 0.4 },
          "enter"
        )
        .to(
          circle.current,
          { top: "-150%", width: "125%", duration: 0.25 },
          "exit"
        );
    }

    return () => {
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    if (timeline.current) {
      timeline.current.tweenFromTo("enter", "exit");
    }
  };

  const manageMouseLeave = () => {
    timeoutId.current = window.setTimeout(() => {
      if (timeline.current) {
        timeline.current.play();
      }
    }, 300);
  };

  return (
    <div
      className={
        "cursor-pointer relative flex items-center justify-center py-2 px-4"
      }
      style={{ overflow: "hidden" }}
      onMouseEnter={manageMouseEnter}
      onMouseLeave={manageMouseLeave}
      {...attributes}
    >
      {children}
      <div
        ref={circle}
        style={{ backgroundColor }}
        className={"w-full h-[150%] absolute top-[100%]"}
      ></div>
    </div>
  );
};

export default Button;
