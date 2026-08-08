import Image from "next/image";
import { useTranslations } from "next-intl";
import { googleIcon, githubIcon } from "@/assets/images/images";

export default function SocialAuth() {
  const t = useTranslations("auth.signup");

  return (
    <div className="flex items-center justify-center gap-4">
      <button
        type="button"
        aria-label={t("socialGoogle")}
        className="cursor-pointer flex h-16 w-16 items-center justify-center rounded-full bg-white ds-shadow-sm transition-opacity duration-[var(--motion-fast)] hover:opacity-80"
      >
        <Image src={googleIcon} alt="" width={24} height={24} className="h-8 w-8" />
      </button>
      <button
        type="button"
        aria-label={t("socialGithub")}
        className="cursor-pointer flex h-16 w-16 items-center justify-center rounded-full bg-white ds-shadow-sm transition-opacity duration-[var(--motion-fast)] hover:opacity-80"
      >
        <Image src={githubIcon} alt="" width={24} height={24} className="h-8 w-8" />
      </button>
    </div>
  );
}
