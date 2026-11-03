"use client";

import { forwardRef, useId } from "react";
import { cn } from "@/lib/utils";

const Input = forwardRef(function Input(
  {
    label,
    placeholder,
    helperText,
    error,
    success,
    className,
    type = "text",
    disabled = false,
    required = false,
    ...props
  },
  ref,
) {
  const id = useId();
  const inputId = props.id || id;

  return (
    <div className="w-full space-y-2">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-semibold text-slate-700"
        >
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}

      <input
        ref={ref}
        id={inputId}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={
          error || helperText ? `${inputId}-description` : undefined
        }
        className={cn(
          "w-full rounded-lg border bg-white px-4 py-3 text-sm outline-none transition",
          "placeholder:text-slate-400",
          "focus:border-blue-500 focus:ring-2 focus:ring-blue-100",
          "disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500",
          error
            ? "border-red-500 focus:border-red-500 focus:ring-red-100"
            : success
              ? "border-green-500"
              : "border-slate-300",
          className,
        )}
        {...props}
      />

      {(error || helperText) && (
        <p
          id={`${inputId}-description`}
          className={cn("text-xs", error ? "text-red-600" : "text-slate-500")}
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
});

export default Input;
