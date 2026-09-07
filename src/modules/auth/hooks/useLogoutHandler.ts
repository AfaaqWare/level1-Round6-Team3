"use client";

import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { useLogoutApi } from "./useLogout";

export const useLogoutHandler = () => {
  const router = useRouter();
  const { mutate: logout, isPending } = useLogoutApi();

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: message => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: message,
          confirmButtonColor: "#3085d6",
        }).then(() => {
          router.replace("/sign-in");
        });
      },
      onError: () => {
        Swal.fire({
          icon: "error",
          title: "Logout Failed",
          text: "Something went wrong.",
        });
      },
    });
  };

  return { handleLogout, isPending };
};