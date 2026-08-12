import { useEffect, useState } from "react";

export default function useOtpEmail() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("resetEmail");

    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  return { email };
}
