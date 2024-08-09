import { cn } from "@/lib/utils";

export function HamburgerIcon({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      className={cn("w-[56px] h-[56px]", className)}
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.9639 18.9623H39.9639"
        stroke={color ?? "#337172"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M15.9639 27.9623H39.9639"
        stroke={color ?? "#337172"}
        stroke-width="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M15.9639 36.9623H39.9639"
        stroke={color ?? "#337172"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <rect
        x="1"
        y="1"
        width="54"
        height="54"
        rx="27"
        stroke={color ?? "#337172"}
        strokeWidth="2"
      ></rect>
    </svg>
  );
}
