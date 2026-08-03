import React from "react";
import SeperatorLink from "../atoms/SeperatorLink";
import Logo from "../atoms/Logo";
import Text from "../atoms/Text";
import List from "../atoms/List";
import { footerList1 } from "@/shared/utils/routes";
import { footerList2 } from "@/shared/utils/routes";
import { useTranslations } from "next-intl";
import Title from "../atoms/Title";
import FooterInput from "../atoms/FooterInput";

function Footer() {
  const t = useTranslations("footer");
  return (
    <div className="ds-bg-alt min-h-100vh !mt-20 flex flex-col gap-5">
      {/* ---------first row ------------ */}
      <div className="ds-container flex flex-col items-center justify-between gap-5 !py-5 md:flex-row">
        <div className="flex w-full flex-col gap-2 md:w-1/3">
          <Logo />
          <Text size="md" variant="secondary">
            {t("subtitle")}
          </Text>
        </div>
        <div className="flex w-full flex-col gap-2 md:w-[40%]">
          <FooterInput btn={t("btn")} placeholder={t("placeholder")} />
        </div>
      </div>
      {/* -------------------------- */}
      <SeperatorLink className="!mx-auto w-3/4" />

      {/* ---------second row ------------ */}
      <div className="ds-container !mx-auto grid grid-cols-1 gap-11 !py-5 text-center md:grid-cols-2 lg:grid-cols-4">
        <div>
          <List routes={footerList1} className="ds-text-secondary gap-2" />
        </div>
        <div>
          <List routes={footerList2} />
        </div>
        <div>
          <Title size="sm">{t("footerLists.footerList3.element1.key")}</Title>
          <a href="mailto:support@example.com">
            <Text>support@example.com</Text>
          </a>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Title size="sm">{t("footerLists.footerList4.element1.key")}</Title>
          {/* sociacl media icons container */}
          <div className="flex flex-row gap-5 font-semibold">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              X
            </a>

            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              In
            </a>
          </div>
          {/* ------------------------------- */}
        </div>
      </div>
      {/* -------------------------- */}
      <SeperatorLink className="!mx-auto w-3/4" />

      {/* ---------third row ------------ */}
      <div className="ds-container flex items-center justify-center !py-3">
        <Text>{t("copyRight")}</Text>
      </div>
      {/* -------------------------- */}
    </div>
  );
}

export default Footer;
