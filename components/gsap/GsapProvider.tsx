"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type Props = { children: React.ReactNode };

export default function GsapProvider({ children }: Props) {
  const scope = useRef<HTMLDivElement>(null);

  // We’re not creating animations yet — just preparing a safe GSAP scope.
  useGSAP(() => {}, { scope });

  return <div ref={scope}>{children}</div>;
}