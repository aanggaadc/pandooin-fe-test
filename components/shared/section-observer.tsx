"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

interface SectionObserverProps {
  hash: string;
  pathnameOnly?: boolean;
  threshold?: number;
}

export const SectionObserver: React.FC<SectionObserverProps> = ({
  hash,
  pathnameOnly,
  threshold = 0.1,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const section = document.querySelector(hash);

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const sectionEndpoint = pathnameOnly ? pathname : pathname + hash;
          router.replace(sectionEndpoint, { scroll: false });
        }
      },
      { threshold }
    );

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, [hash, pathname, pathnameOnly, router]);

  return null;
};
