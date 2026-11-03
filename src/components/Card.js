import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
  variant = "default",
  ...props
}) {
  const variants = {
    default: "bg-white border border-slate-200 shadow-sm",
    elevated: "bg-white shadow-lg border border-slate-100",
    outlined: "bg-transparent border-2 border-slate-200",
  };

  return (
    <div
      className={cn(
        "rounded-xl p-6 transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-md",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
