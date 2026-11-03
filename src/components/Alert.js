"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Badge from "./Badge";
import { Info, CheckCircle, AlertTriangle, XCircle, X } from "lucide-react";

const alertStyles = {
  info: {
    style: "border-blue-200 bg-blue-50 text-blue-900",
    icon: Info,
    badge: "primary",
    title: "Informasi",
  },
  success: {
    style: "border-green-200 bg-green-50 text-green-900",
    icon: CheckCircle,
    badge: "success",
    title: "Berhasil",
  },
  warning: {
    style: "border-yellow-200 bg-yellow-50 text-yellow-900",
    icon: AlertTriangle,
    badge: "warning",
    title: "Perhatian",
  },
  danger: {
    style: "border-red-200 bg-red-50 text-red-900",
    icon: XCircle,
    badge: "danger",
    title: "Penting",
  },
};

export default function Alert({
  variant = "info",
  title,
  children,
  dismissible = false,
  className,
}) {
  const [visible, setVisible] = useState(true);
  const config = alertStyles[variant] || alertStyles.info;
  const Icon = config.icon;

  if (!visible) return null;

  return (
    <div
      role={variant === "danger" ? "alert" : "status"}
      className={cn(
        "flex gap-3 rounded-xl border p-4",
        config.style,
        className,
      )}
    >
      <Icon size={22} className="shrink-0" />

      <div className="flex-1">
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <p className="font-semibold">{title || config.title}</p>
          <Badge variant={config.badge}>{config.title}</Badge>
        </div>

        <div className="text-sm leading-relaxed">{children}</div>
      </div>

      {dismissible && (
        <button
          type="button"
          onClick={() => setVisible(false)}
          aria-label="Tutup pemberitahuan"
          className="shrink-0 rounded p-1 hover:bg-black/5"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}
