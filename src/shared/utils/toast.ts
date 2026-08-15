import Swal from "sweetalert2";

type ToastType = "success" | "error" | "warning" | "info";

interface ToastOptions {
  type: ToastType;
  message: string;
  locale: string;
}

const Toast = Swal.mixin({
  customClass: {
    popup: "!h-[70px]",
    icon: "!text-sm",
  },
  toast: true,
  background: "var(--color-bg-card)",
  color: "var(--color-text-primary)",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  draggable: true,
});

export const showToast = ({ type, message, locale }: ToastOptions) => {
  Toast.fire({
    position: locale === "ar" ? "top-right" : "top-left",
    icon: type,
    title: message,
  });
};
