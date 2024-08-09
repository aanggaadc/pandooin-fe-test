import { cn } from "@/lib/utils";

export function SeparatorIcon({
  className,
  color,
  stroke,
}: {
  className?: string;
  color?: string;
  stroke?: string;
}) {
  return (
    <svg
      className={cn("w-full h-auto", className)}
      width="1096"
      height="97"
      viewBox="0 0 1096 97"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M802.251 48.3794L791.51 36.3162L780.769 48.3794L791.51 60.4426L802.251 48.3794Z"
        fill={"color ?? #D6B66B"}
      />
      <path
        d="M315.245 48.3833L304.504 36.3201L293.763 48.3833L304.504 60.4466L315.245 48.3833Z"
        fill={color ?? "#D6B66B"}
      />
      <path
        d="M36.0917 48.3772L29.3866 40.8466L22.6814 48.3772L29.3866 55.9079L36.0917 48.3772Z"
        fill={color ?? "#D6B66B"}
      />
      <path
        d="M1073.33 48.3813L1066.63 40.8506L1059.92 48.3813L1066.63 55.912L1073.33 48.3813Z"
        fill={color ?? "#D6B66B"}
      />
      <path
        d="M354.647 38.24L350.907 28.27L335.682 47.19H347.444L354.647 38.24Z"
        fill={color ?? "#179999"}
      />
      <path
        d="M346.971 49H335.209L350.915 68.5L354.788 58.71L346.971 49Z"
        fill={color ?? "#0B7373"}
      />
      <path
        d="M356.266 59.4399L352.393 69.2399H539.318L530.601 59.4399H356.266Z"
        fill={color ?? "#004040"}
      />
      <path
        d="M739.974 59.4399H565.638L556.912 69.2399H743.847L739.974 59.4399Z"
        fill={color ?? "#004040"}
      />
      <path
        d="M749.028 47.48H760.79L745.324 28.27L741.594 38.23L749.028 47.48Z"
        fill={color ?? "#0B7373"}
      />
      <path
        d="M740.187 37.32L743.856 27.52H556.912L565.638 37.32H740.187Z"
        fill={color ?? "#179999"}
      />
      <path
        d="M352.375 27.52L356.052 37.32H530.602L539.318 27.52H352.375Z"
        fill={color ?? "#179999"}
      />
      <path
        d="M567.25 57.63H740.134L747.587 48.38L740.134 39.13H567.25L575.486 48.38L567.25 57.63Z"
        fill={color ?? "#0B7373"}
      />
      <path
        d="M528.982 39.13H356.098L348.654 48.38L356.098 57.63H528.991L520.746 48.38L528.982 39.13Z"
        fill={color ?? "#0B7373"}
      />
      <path
        d="M741.443 58.71L745.316 68.5L760.791 49.29H749.029L741.443 58.71Z"
        fill={color ?? "#004040"}
      />
      <path
        d="M548.134 35.1891L536.367 48.4049L548.134 61.6207L559.901 48.4049L548.134 35.1891Z"
        fill={color ?? "#D6B66B"}
      />
      <path
        d="M547.119 63.64L534.529 49.5H524.556L547.119 74.84V63.64Z"
        fill={color ?? "#B39859"}
      />
      <path
        d="M549.113 33.12L561.703 47.26H571.675L549.113 21.92V33.12Z"
        fill={color ?? "#EDD395"}
      />
      <path
        d="M547.119 33.12V21.92L524.556 47.26H534.529L547.119 33.12Z"
        fill={color ?? "#D6B66B"}
      />
      <path
        d="M549.113 63.64V74.84L571.675 49.5H561.703L549.113 63.64Z"
        fill={color ?? "#B39859"}
      />
      <path
        d="M791.51 48.38H1066.62"
        stroke={stroke ?? "#D6B66B"}
        strokeWidth="3.9"
        strokeMiterlimit="10"
      />
      <path
        d="M29.3828 48.38H304.491"
        stroke={stroke ?? "#D6B66B"}
        strokeWidth="3.9"
        strokeMiterlimit="10"
      />
    </svg>
  );
}
