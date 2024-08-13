"use client";

import { useRef, useEffect, HTMLAttributes } from "react";

import { Fancybox } from "@fancyapps/ui";
import { OptionsType } from "@fancyapps/ui/types/Fancybox/options";

interface PhotoGalleryProps extends HTMLAttributes<HTMLDivElement> {
  options?: Partial<OptionsType>;
  delegate?: string;
  children: React.ReactNode;
  className?: string;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  options,
  delegate,
  children,
  className,
  ...rest
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegateValue = delegate || "[data-fancybox]";
    const optionsValue = options || {};

    Fancybox.bind(container, delegateValue, optionsValue);

    return () => {
      Fancybox.unbind(container);
      Fancybox.close();
    };
  }, [delegate, options]);

  return (
    <div className={className} ref={containerRef} {...rest}>
      {children}
    </div>
  );
};
