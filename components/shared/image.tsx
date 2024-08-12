import NextImage, {
  ImageProps as NextImageProps,
  StaticImageData,
} from "next/image";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ImageProps extends Omit<NextImageProps, "src" | "alt"> {
  wrapper?: HTMLAttributes<HTMLDivElement>;
  src: string | StaticImageData;
  alt: string;
}

export const Image: React.FC<ImageProps> = ({
  wrapper: { className: wrapperClassName, ...restWrapper } = {},
  src,
  alt,
  className,
  ...rest
}) => {
  return (
    <div
      {...restWrapper}
      className={cn("relative h-full w-full isolate", wrapperClassName)}
    >
      <NextImage
        {...rest}
        sizes="100%"
        className={cn("w-full h-full object-cover object-center", className)}
        fill
        src={src}
        alt={alt}
      />
    </div>
  );
};
