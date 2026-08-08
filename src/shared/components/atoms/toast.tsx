"use client";

import { Toaster } from "sonner";
import { useTheme } from "next-themes";

interface AppToasterProps {
  dir: "ltr" | "rtl";
}

export default function AppToaster({ dir }: AppToasterProps) {
  const { resolvedTheme } = useTheme();

  return (
    <Toaster
      position={dir === "rtl" ? "top-right" : "top-left"}
      dir={dir}
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      closeButton
      richColors
      toastOptions={{
        classNames: {
          title: "text-base font-semibold",
        },
      }}
    />
  );
}
