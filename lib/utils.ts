import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId);

  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export function formatPrice(price: string) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
