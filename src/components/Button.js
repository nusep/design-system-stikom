import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-stikom-blue text-white hover:bg-stikom-navy",
        secondary: "bg-slate-200 text-slate-800 hover:bg-slate-300",
        success: "bg-green-600 text-white hover:bg-green-700",
        danger: "bg-red-600 text-white hover:bg-red-700",
        outline: "border border-stikom-blue text-stikom-blue hover:bg-blue-50",
        ghost: "text-slate-700 hover:bg-slate-100",
      },

      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-5 text-base",
        lg: "h-12 px-7 text-lg",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export default function Button({
  variant,
  size,
  loading = false,
  disabled = false,
  className,
  children,
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && (
        <span
          className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
          aria-hidden="true"
        />
      )}

      {loading ? "Memproses..." : children}
    </button>
  );
}
