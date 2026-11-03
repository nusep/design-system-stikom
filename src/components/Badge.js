import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-blue-100 text-blue-800",
        success: "bg-green-100 text-green-800",
        warning: "bg-yellow-100 text-yellow-800",
        danger: "bg-red-100 text-red-800",
        secondary: "bg-slate-100 text-slate-700",
        outline: "border border-slate-300 text-slate-700",
      },

      shape: {
        pill: "rounded-full",
        square: "rounded-md",
      },
    },

    defaultVariants: {
      variant: "primary",
      shape: "pill",
    },
  },
);

export default function Badge({
  variant,
  shape,
  className,
  children,
  ...props
}) {
  return (
    <span
      className={cn(badgeVariants({ variant, shape }), className)}
      {...props}
    >
      {children}
    </span>
  );
}
